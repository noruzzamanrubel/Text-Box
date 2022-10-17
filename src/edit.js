import React from "react";

import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";

import {
	ColorPalette,
	PanelBody,
	PanelRow,
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";

import { __ } from "@wordpress/i18n";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { text, text_color, bg_color, alignment, padding } = attributes;

	//align text
	const onChangeAlignment = (newAlign) => {
		setAttributes({ alignment: newAlign });
	};

	//text
	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};

	//text color
	const onChangeTextColor = (newTextColor) => {
		setAttributes({ text_color: newTextColor });
	};

	//background color
	const onChangeBackgroundColor = (newBackgroundColor) => {
		setAttributes({ bg_color: newBackgroundColor });
	};

	//padding
	const onChangePadding = (newPadding) => {
		setAttributes({ padding: newPadding });
	};

	return (
		<>
			<BlockControls>
				<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
			</BlockControls>

			<InspectorControls key="setting">
				<PanelBody title="Color" initialOpen>
					<PanelRow>Background Color</PanelRow>
					<ColorPalette
						colors={[
							{ name: "red", color: "#f00" },
							{ name: "white", color: "#fff" },
							{ name: "blue", color: "#00f" },
						]}
						value={bg_color}
						onChange={onChangeBackgroundColor}
					/>
					<PanelRow>Text Color</PanelRow>
					<ColorPalette
						colors={[
							{ name: "red", color: "#f00" },
							{ name: "white", color: "#fff" },
							{ name: "blue", color: "#00f" },
						]}
						value={text_color}
						onChange={onChangeTextColor}
					/>
				</PanelBody>
			</InspectorControls>

			<InspectorControls key="setting">
				<PanelBody title="Padding" initialOpen>
					{/* <BoxControl onChange= {(v) => console.log(v)} /> */}
					<BoxControl onChange= {onChangePadding} value={padding} />
				</PanelBody>
			</InspectorControls>

			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
				})}
				onChange={onChangeText}
				value={text}
				placeholder={__("Input text here", "text-box")}
				tagName="h1"
				allowedFormats={["core/bold", "core/italic"]}
				style={{
					backgroundColor: bg_color,
					color: text_color,
					padding: padding,
				}}
			/>
		</>
	);
}

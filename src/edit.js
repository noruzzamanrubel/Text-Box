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
	RangeControl,
	SelectControl,
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";

import { useState } from "@wordpress/element";

import { __ } from "@wordpress/i18n";
import "./editor.scss";

import classnames from "classnames";

export default function Edit({ attributes, setAttributes }) {
	const {
		text,
		text_color,
		bg_color,
		alignment,
		padding,
		font_size,
		font_weight,
		line_height_unit,
	} = attributes;

	//states
	const [fontWeight, setFontWeight] = useState(font_weight);

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

	//font size
	const onChangeFontSize = (newFontSize) => {
		setAttributes({ font_size: newFontSize });
	};

	//font weight
	const onChangeFontWeight = (newFontWeight) => {
		setAttributes({ font_weight: newFontWeight });
	};

	//line height
	const onChangeLineHeight = (newLineHeight) => {
		setAttributes({ line_height: newLineHeight });
	};


	//padding
	const onChangePadding = (newPadding) => {
		setAttributes({ padding: newPadding });
	};

	//classes
	const classes = classnames(
		`text-box-align-${alignment}`
		// `text-box-font-weight-${font_weight}`
	);

	return (
		<>
			<BlockControls>
				<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
			</BlockControls>

			<InspectorControls>
				<PanelBody title="Font Size">
					<RangeControl
						value={font_size}
						onChange={onChangeFontSize}
						min={1}
						max={200}
					/>
				</PanelBody>
				<PanelBody title="Line Height">
					<RangeControl
						value={line_height_unit}
						onChange={onChangeLineHeight}
						min={1}
						max={200}
					/>
				</PanelBody>
				<PanelBody title="Font Weight">
					<SelectControl
						options={[
							{ label: "Thin", value: "100" },
							{ label: "Extra Light", value: "200" },
							{ label: "Light", value: "300" },
							{ label: "Normal", value: "400" },
							{ label: "Medium", value: "500" },
							{ label: "Semi Bold", value: "600" },
							{ label: "Bold", value: "700" },
							{ label: "Extra Bold", value: "800" },
							{ label: "Black", value: "900" },
						]}
						value={fontWeight}
						onChange={(newFontWeight) => {
							setFontWeight(newFontWeight);
							onChangeFontWeight(newFontWeight);
						}}
						__nextHasNoMarginBottom
					/>
				</PanelBody>
			</InspectorControls>

			<InspectorControls>
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
			<InspectorControls>
				<PanelBody title="Padding" initialOpen>
					{/* <BoxControl onChange= {(v) => console.log(v)} /> */}
					<BoxControl onChange={onChangePadding} value={padding} />
				</PanelBody>
			</InspectorControls>
			<RichText
				{...useBlockProps({
					className: classes,
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
					fontSize: font_size,
					fontWeight: font_weight,
					lineHeight: line_height_unit,
				}}
			/>
		</>
	);
}

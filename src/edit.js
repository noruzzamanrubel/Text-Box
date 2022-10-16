import React from "react";

import {
	AlignmentToolbar,
	BlockControls, ColorPalette,
	InspectorControls, RichText,
	useBlockProps
} from "@wordpress/block-editor";

import { TextControl } from "@wordpress/components";

import { __ } from "@wordpress/i18n";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { text, text_color, bg_color, alignment } = attributes;

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

	return (
		<>
			<BlockControls>
				<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
			</BlockControls>

			<InspectorControls key="setting">
				<div id="gutenpride-controls">
					<fieldset>
						<legend className="blocks-base-control__label">
							{__("Background color", "gutenpride")}
						</legend>
						<ColorPalette 
							onChange={onChangeBackgroundColor}
						/>
					</fieldset>
					
					<fieldset>
						<legend className="blocks-base-control__label">
							{__("Text color", "gutenpride")}
						</legend>
						<ColorPalette 
							onChange={onChangeTextColor}
						/>
					</fieldset>
				</div>
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
				}}
			/>
		</>
	);
}

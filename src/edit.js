import React from "react";
import { useEffect } from "react";

// import Inspector from "./inspector";

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
	FontSizePicker,
	__experimentalBoxControl as BoxControl,
	__experimentalBorderBoxControl as BorderBoxControl,
} from "@wordpress/components";

const colors = [{ name: "Blue 20", color: "#72aee6" }];

import { useState } from "@wordpress/element";

import { __ } from "@wordpress/i18n";
import "./editor.scss";

import classnames from "classnames";

export default function Edit({ attributes, setAttributes, isSelected }) {
	const {
		text,
		text_color,
		bg_color,
		align,
		padding,
		font_size,
		font_weight,
		font_style,
		text_transform,
		font_family,
	} = attributes;

	//states
	const [fontSize, setFontSize] = useState(font_size);
	const [fontWeight, setFontWeight] = useState(font_weight);
	const [fontStyle, setFontStyle] = useState(font_style);
	const [textTransform, setTextTransform] = useState(text_transform);
	const [paddingvalue, setPaddingValue] = useState(padding);
	const [fontFamily, setFontFamily] = useState(font_family);

	const onchangeFontFamily = (value) => {
		setFontFamily(value);
		setAttributes({ font_family: value });
	};
	//padding
	const onChangePadding = (value) => {
		setPaddingValue(value);
		setAttributes({ padding: value });
	};

	//align text
	const onChangeAlignment = (value) => {
		setAttributes({ align: value });
	};

	//text
	const onChangeText = (value) => {
		setAttributes({ text: value });
	};

	//text color
	const onChangeTextColor = (value) => {
		setAttributes({ text_color: value });
	};

	//background color
	const onChangeBackgroundColor = (value) => {
		setAttributes({ bg_color: value });
	};

	//font size
	const onChangeFontSize = (value) => {
		setFontSize(value);
		setAttributes({ font_size: value });
	};

	//font weight
	const onChangeFontWeight = (value) => {
		setFontWeight(value);
		setAttributes({ font_weight: value });
	};

	//font style
	const onChangeFontStyle = (value) => {
		setFontStyle(value);
		setAttributes({ font_style: value });
	};

	//text transform
	const onChangeTextTransform = (value) => {
		setTextTransform(value);
		setAttributes({ text_transform: value });
	};

	//classes
	const classes = classnames(
		`text-box-align-${align}`
	);

	return (
		<>
			<BlockControls>
				<AlignmentToolbar value={align} onChange={onChangeAlignment} />
			</BlockControls>

			<InspectorControls>
				<PanelBody title="Font Family">
					<SelectControl
						options={[
							{ label: "Default", value: "default" },
							{ label: "Arial", value: "Arial, Helvetica, sans-serif" },
							{ label: "Georgia", value: "Georgia, serif" },
							{ label: "Tahoma", value: "Tahoma, Geneva, sans-serif" },
							{
								label: "Times New Roman",
								value: "'Times New Roman', Times, serif",
							},
							{ label: "Verdana", value: "Verdana, Geneva, sans-serif" },
						]}
						value={fontFamily}
						onChange={onchangeFontFamily}
						__nextHasNoMarginBottom
					/>
				</PanelBody>

				<PanelBody title="Font Size">
					<FontSizePicker
						value={fontSize}
						onChange={onChangeFontSize}
						__nextHasNoMarginBottom
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
						onChange={onChangeFontWeight}
						__nextHasNoMarginBottom
					/>
				</PanelBody>
				<PanelBody title="Font Style">
					<SelectControl
						options={[
							{ label: "normal", value: "normal" },
							{ label: "italic", value: "italic" },
							{ label: "oblique", value: "oblique" },
							{ label: "initial", value: "initial" },
							{ label: "inherit", value: "inherit" },
							{ label: "unset", value: "unset" },
							{ label: "revert", value: "revert" },
						]}
						value={fontStyle}
						onChange={onChangeFontStyle}
						__nextHasNoMarginBottom
					/>
				</PanelBody>
				<PanelBody title="Text Transform">
					<SelectControl
						options={[
							{ label: "none", value: "none" },
							{ label: "capitalize", value: "capitalize" },
							{ label: "uppercase", value: "uppercase" },
							{ label: "lowercase", value: "lowercase" },
							{ label: "initial", value: "initial" },
							{ label: "inherit", value: "inherit" },
							{ label: "unset", value: "unset" },
							{ label: "revert", value: "revert" },
						]}
						value={textTransform}
						onChange={onChangeTextTransform}
						__nextHasNoMarginBottom
					/>
				</PanelBody>
				<PanelBody title="Padding">
					<BoxControl
						values={paddingvalue}
						onChange={onChangePadding}
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
					paddingTop: padding.top,
					paddingRight: padding.right,
					paddingBottom: padding.bottom,
					paddingLeft: padding.left,
					fontSize: font_size,
					fontWeight: font_weight,
					fontStyle: font_style,
					textTransform: text_transform,
					fontFamily: font_family,
				}}
			/>
		</>
	);
}

import { RichText, useBlockProps } from "@wordpress/block-editor";
import classnames from "classnames";

export default function save({ attributes }) {
	const {
		text,
		text_color,
		bg_color,
		alignment,
		padding,
		font_size,
		font_weight,
		line_height_unit
	} = attributes;

	//classes
	const classes = classnames(
		`text-box-align-${alignment}`,
	);
	return (
		<RichText.Content
			{...useBlockProps.save({
				className: classes,
			})}
			tagName="h1"
			value={text}
			style={{
				backgroundColor: bg_color,
				color: text_color,
				padding: padding,
				fontSize: font_size,
				fontWeight: font_weight,
				lineHeight: line_height_unit,
			}}
		/>
	);
}

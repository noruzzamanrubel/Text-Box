import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { text,text_color ,bg_color, alignment, padding } = attributes;
	return (
		<RichText.Content
			{...useBlockProps.save({
				className: `text-box-align-${alignment}`,
			})}
			tagName="h1"
			value={text}
			style={{
				backgroundColor: bg_color,
				color: text_color,
				padding: padding,
			}}
		/>
	);
}

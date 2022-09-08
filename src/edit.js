import { RichText, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes;
	return (
		<RichText
			{...useBlockProps()}
			onChange={(text) => setAttributes({ text })}
			value={text}
			placeholder={__("Input text here", "text-box")}
			tagName="h1"
			allowedFormats={["core/bold", "core/italic"]}
		/>
	);
}

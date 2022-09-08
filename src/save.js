import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	const { text } = attributes;
	return <RichText.Content {...blockProps} tagName="h1" value={text} />;
}

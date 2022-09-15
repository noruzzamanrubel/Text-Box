import {
	AlignmentToolbar,
	BlockControls,
	RichText,
	useBlockProps,
	InspectorControls,
} from "@wordpress/block-editor";

// import {
// 	ToolbarButton,
// 	ToolbarDropdownMenu,
// 	ToolbarGroup,
// } from "@wordpress/components";

import { __ } from "@wordpress/i18n";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment } = attributes;

	const onChangeAlignment = (newAlign) => {
		setAttributes({ alignment: newAlign });
	};

	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};

	return (
		<>
			<InspectorControls>
				<p>Hello</p>
			</InspectorControls>
			<BlockControls>
				<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
			</BlockControls>

			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
				})}
				onChange={onChangeText}
				value={text}
				placeholder={__("Input text here", "text-box")}
				tagName="h1"
				allowedFormats={["core/bold", "core/italic"]}
				// style={{ textAlign: alignment }}
			/>
		</>
	);
}

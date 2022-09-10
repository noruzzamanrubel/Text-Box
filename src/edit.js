import {
	AlignmentToolbar,
	BlockControls,
	RichText,
	useBlockProps,
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
			{/* <BlockControls
				controls={[
					{
						title: "Button One",
						icon: "admin-generic",
						isActive: true,
						onClick: () => console.log("hi"),
					},
				]}
			/> */}

			{/* <BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						title="Align Left"
						icon={"editor-alignleft"}
						onClick={() => console.log("Align Left")}
					/>
					<ToolbarButton
						title="Align Center"
						icon={"editor-aligncenter"}
						onClick={() => console.log("Align Center")}
					/>
					<ToolbarButton
						title="Align Right"
						icon={"editor-alignright"}
						onClick={() => console.log("Align Right")}
					/>
					<ToolbarDropdownMenu
						icon={"arrow-down-alt2"}
						label={__("More AlignMent", "text-box")}
						controls={[
							{
								title: __("Wide", "text-box"),
								icon: "align-wide",
							},
							{
								title: __("Full", "text-box"),
								icon: "align-full-width",
							},
						]}
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<p>sdf</p>
				</ToolbarGroup>
			</BlockControls> */}

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

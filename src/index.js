import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";

/**
 * Internal dependencies
 */
import metadata from "./block.json";
import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";

registerBlockType(metadata.name, {
	attributes,
	icon: {
		src: "text",
		background: "#1783FF",
		foreground: "#fff",
	},
	edit: Edit,
	save,
});

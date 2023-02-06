import { __ } from '@wordpress/i18n';
const attributes = {

	text: {
		type: "string",
	},

	alignment: {
		"type": "string",
		"default": "left"
	},

	text_color: {
		"type": "string",
		"default": "black"
	},

	bg_color: {
		"type": "string",
		"default": "white"
	},

	font_size: {
		"type": "number",
		"default": 15
	},

	font_weight: {
		"type": "string",
		"default": "400"
	},

	font_style: {
		"type": "string",
		"default": "normal"
	},

	text_transform: {
		"type": "string",
		"default": "none"
	},

	padding: {
		"type": "object",
		"default": {
			"top": "10px",
			"right": "10px",
			"bottom": "10px",
			"left": "10px"
		}
	},

	font_family: {
		"type": "string",
		"default": "Arial"
	}
}

export default attributes;
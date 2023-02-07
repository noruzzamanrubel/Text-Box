import {
	InspectorControls
} from "@wordpress/block-editor";
import { __ } from '@wordpress/i18n';
import {
	PanelBody
} from "@wordpress/components";

import React from "react";
import InspectorTabs from './components/inspector-tabs/InspectorTabs';
import InspectorTab from './components/inspector-tabs/InspectorTab';

import UAGAdvancedPanelBody from './components/advanced-panel-body/index';
import MultiButtonsControl from './components/multi-buttons-control/index';


const Settings = () => {

    return(
        <>
			<InspectorControls>
				<InspectorTabs>

				</InspectorTabs>
			</InspectorControls>
        </>
    );

}

export default Settings;
import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff
    }
const ClickOnOff = action("OnOff and indicator should change color")

export const OnMode = () => <OnOff on={true} onClick={ClickOnOff}/>;
export const OffMode = () => <OnOff on={false} onClick={ClickOnOff}/>;
export const ModeChanging = () => {
    const [value, setValue]=useState<boolean>(true)
    return <OnOff on={value} onClick={setValue}/>;
}

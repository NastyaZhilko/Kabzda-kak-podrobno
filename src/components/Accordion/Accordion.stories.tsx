import React, {useState} from 'react';
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion
}
const callback = action("accordion  code change event fired")
const onClickCallback = action("some item was clicked")
export const CollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]}
                                              onClick={onClickCallback}/>;
export const UncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}
                                                onClick={onClickCallback}
                                                items={[{title: "Dimych", value: 1}, {
                                                    title: "Valera",
                                                    value: 2
                                                }, {title: "Victor", value: 3}, {title: "Artem", value: 4}]}/>;
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={value} onChange={setValue} onClick={(value) => {
        alert(`user with ID ${value} should be happy `)
    }} items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}, {
        title: "Victor",
        value: 3
    }, {title: "Artem", value: 4}]}/>;
}

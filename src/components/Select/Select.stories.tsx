import React from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select
}

export const WithValueExample = () =>

        <Select onChange={action("Value changed")}
                value={"2"}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"}
                ]}/>;


export const WithoutValueExample = () =>

        <Select onChange={action("Value changed")}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"}
                ]}/>;

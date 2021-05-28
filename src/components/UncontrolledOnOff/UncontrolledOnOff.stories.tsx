import React, {useState} from 'react';
import UncontrolledOnOff from "./UncontrolledOnOff";



export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
    }


export const OnMode = () =><UncontrolledOnOff  defaultOn={true} onChange={x=>x}/>;
export const OffMode = () =><UncontrolledOnOff  defaultOn={false} onChange={x=>x}/>;
export const BugMode = () =><div>Unsync when change defaultValue when already rendering</div>;

import React from "react";
type ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange:(collapsed: boolean)=>void
    items: Array<ItemType>
    onClick: (value: any)=>void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} collapsed={!props.collapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange:(collapsed: boolean)=>void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={()=>{props.onChange(props.collapsed)}}>{props.title}</h3>
    )
}
type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any)=>void
}
function AccordionBody(props:AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map((i,index)=><li key={index} onClick={()=>{props.onClick(i.value)}}>{i.title}</li>)}
        </ul>
    )
}

export default Accordion
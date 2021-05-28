import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, ValueRatingType} from "./components/Rating/Rating";

import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";


const App = () => {
    let [valueRating, setValueRating] = useState<ValueRatingType>(0)
    let [valueCollapsed, setValueCollapsed] = useState(false)
    let [valueOn, setValueOn] = useState(false)
    return (
        <div className={"App"}>
            <PageTitle title={"This is App component"}/>

            <b>UncontrolledComponents</b>

            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating/>
            <UncontrolledOnOff onChange={setValueOn}/>{valueOn.toString()}

            <hr/>

            <b>ControlledComponents</b>

            <Accordion titleValue={"Friends"} collapsed={valueCollapsed} onChange={setValueCollapsed} items={[]} onClick={x=>x}/>
            <Rating value={valueRating} onClick={setValueRating}/>
            <OnOff onClick={setValueOn} on={valueOn} />

            <hr/>
        </div>
    )
}


// пустой тег - фрагмент(формально вернули JSX-элемент, но он не превратится ни в какую разметку)
type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    return (
        <div className={"PageTitle"}>{props.title}</div>
    )
}

export default App;

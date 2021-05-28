import React, {useState} from "react";

type OnOffPropsType = {
    defaultOn?: boolean
    onChange: (on: boolean)=>void
}

function UncontrolledOnOff(props: OnOffPropsType) {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn:false)//hook with init value

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }
    const onClicked =()=>{setOn(true)
        props.onChange(true) }

        const offClicked = () => {setOn(false)
            props.onChange(false) }
    return <div>
        <div style={onStyle} onClick={onClicked}
            onChange={()=>{}}
        >On
        </div>
        <div style={offStyle} onClick={offClicked}

        >Off
        </div>
        <div style={indicatorStyle}></div>
    </div>
}

export default UncontrolledOnOff
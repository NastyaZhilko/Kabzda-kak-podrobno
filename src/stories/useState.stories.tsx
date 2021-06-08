import React, {useState} from "react";

export default {
    title: 'useState'
}

function generateData() {
    console.log('generateData')
    return 565641615
}

const Example1 = () => {

    const [counter, setCounter] = useState(generateData)

    return <div>
        <button onClick={() => {
            setCounter(state => state + 1)
        }}>+1
        </button>
        {counter}
    </div>
}
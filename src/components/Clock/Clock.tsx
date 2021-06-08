import React, {useEffect, useState} from "react";

type PropsType = {}

const get2digitString = (num: number) => num < 10
    ? '0' + num
    : num

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        console.log('useEffect registered')
        const idInterval = setInterval(() => {
            console.log('TICK')
            setDate(new Date)
        }, 1000)
        return ()=>{
            clearInterval(idInterval)
        }
    }, [])

        return <div>
        <span>{get2digitString(date.getHours())}</span>
        :
        <span>{get2digitString(date.getMinutes())}</span>
        :
        <span>{get2digitString(date.getSeconds())}</span>
    </div>
}
//date.getSeconds().toString().padStart(2, '0')
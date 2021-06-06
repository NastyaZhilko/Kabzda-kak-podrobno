import React, {useEffect, useState} from "react";
import {log} from "util";

export default {
    title: 'useEffect demo'
}



const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample')
    useEffect(()=>{
        console.log('UseEffect every render')
        document.title=counter.toString()
        //api.getUsers().then('') - запрос на сервер
        //setInterval - установка интервалов
        //indexDB - работа с базой данных
        //document.getElementById - обращение к документу
        //document.title - изменение тайтла документа

    })

    useEffect(()=>{
        console.log('UseEffect only first render')
        document.title=counter.toString()
        //api.getUsers().then('') - запрос на сервер
        //setInterval - установка интервалов
        //indexDB - работа с базой данных
        //document.getElementById - обращение к документу
        //document.title - изменение тайтла документа

    },[])

    useEffect(()=>{
        console.log('UseEffect first render and every counter change')
        document.title=counter.toString()
        //api.getUsers().then('') - запрос на сервер
        //setInterval - установка интервалов
        //indexDB - работа с базой данных
        //document.getElementById - обращение к документу
        //document.title - изменение тайтла документа

    },[counter])

    return <div>

        <button onClick={() => {
            setCounter(fake+1)
        }}>+1
        </button>
        Hello, {counter}
    </div>
}
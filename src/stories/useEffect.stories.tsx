import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}


const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample')
    useEffect(() => {
        console.log('UseEffect every render')
        document.title = counter.toString()
        //api.getUsers().then('') - запрос на сервер
        //setInterval - установка интервалов
        //indexDB - работа с базой данных
        //document.getElementById - обращение к документу
        //document.title - изменение тайтла документа

    })

    useEffect(() => {
        console.log('UseEffect only first render')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('UseEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <div>

        <button onClick={() => {
            setCounter(counter + 1)
        }}>+1
        </button>
        <button onClick={() => {
            setFake(fake + 1)
        }}>+1
        </button>
        Hello, {counter}
    </div>
}

const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('SetTimeoutExample')

    useEffect(() => {
        setInterval(() => {
            setCounter((state => state + 1))
        })
    }, [counter])

    return <div>
        Hello,
        counter: {counter}
    </div>
}

const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('SetTimeoutExample')

    useEffect(() => {
        console.log('useEffect occurred')
        return () =>{
            console.log('RESET EFFECT')
        }
    }, [])
    const increase = () => setCounter(counter + 1)

    return <div>
        Hello,
        counter: {counter}
        <button onClick={increase}>
            +
        </button>
    </div>
}
import React, {useCallback, useMemo, useState} from 'react'

export default {
    title: 'useCallback'
}


const BooksSecret = (props: { addBook: () => void }) => {
    console.log("Books")
    return <div>
        <button onClick={props.addBook}>add Book</button>
    </div>
}

const Books = React.memo(BooksSecret)

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "HTML", "CSS"])

    /*    const newArray = useMemo(()=>{
            const newArray = books.filter(u => u.toLowerCase().indexOf("a") > -1)
            return newArray

        },[books])*/

    /*   const addBook = () => {
           const newBooks = [...books, "Angular"]
           setBooks(newBooks)
       }*/
    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, "Angular"]
            setBooks(newBooks)
        }
    }, [books]) //реализация useCallback с использованием useMemo
    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, "Angular"]
        setBooks(newBooks)
    }, [books])
    return <div>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}

        <Books addBook={memoizedAddBook2}/>
    </div>
}

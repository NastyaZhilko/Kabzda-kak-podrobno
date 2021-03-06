import React, {useState} from "react";

export default {
    title: 'React.memo demo'

}

const NewMessagesCounter = (props: { count: number }) => {
    console.log("NewMessagesCounter")
    return <div>
        {props.count}
    </div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Nastya", "Pavel", "Ignat"])
    const addUser = () => {
        const newUsers = [...users, "Lena"]
        setUsers(newUsers)
    }
    return <div>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <NewMessagesCounter count={counter}/>
        <button onClick={addUser}>add User</button>
        <Users users={users}/>
    </div>
}
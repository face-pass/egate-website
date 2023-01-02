import {useState, useEffect} from 'react'
import mysql from '../script/mysql';

function UserList(){
    const [message, setMessage] = useState('')

    useEffect(() => {
        mysql
        .then((res) => res.json())
        .then((data) => setMessage(data));
    }, [])

    return (
        <>
            <h1>Result</h1>
            <p>{message}</p>
        </>
    )
}

export default UserList
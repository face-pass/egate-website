import {useState, useEffect, useCallback} from 'react'

function UserList(){
    const [message, setMessage] = useState([])

    useEffect(() => {
    fetch("/api/getCurrentAttandanceList", {mode: "cors"})
    .then((res) => res.json())
    .then((data) => setMessage(data.results))
    }, [])

    return (
        <>
            <h1>Result</h1>
            <p>{message}</p>
        </>
    )
}

export default UserList
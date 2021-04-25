import React,{useState,useEffect} from 'react'

const Fetch = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setData(json))
      }, []);
    return (
        <div>
            {
                data.map(todo=>{
                    return (
                        <p key={todo.id}>{todo.title}</p>
                    )
                })
            }
        </div>
    )
}

export default Fetch
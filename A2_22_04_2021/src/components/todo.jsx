import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Todo = ({title}) => {
    return (
        <div>
            <ListGroup.Item>{title}</ListGroup.Item>
        </div>
    )
}

export default Todo

import React from 'react'
import { FaTimes } from 'react-icons/fa'

const EachTask = ({task, onDelete}) => {
    return (
        <div className="eachTask">
            <h1>
                {task.text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={ () => onDelete(task.id)}/>
            </h1>
            <p1>{task.day}</p1>
        </div>
    )
}

export default EachTask

import React from 'react'
import { useState } from 'react'
import EachTask from './EachTask'

const Task = ({tasks, onDelete}) => {

    

    return (
        <>
            {
                tasks.map((task) => (
                    <EachTask className="allTasks" task={task} onDelete={onDelete}/>
                ))
            }
        </>
    )
}

export default Task

import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add text')
            return
        }

        onAdd({text,day})
        setText('')
        setDay('')
    }

    return (
        <div className="addTask" onSubmit={onSubmit}>
            <form>
                <div>
                    <label>
                        Task 
                    </label>
                    <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
                <div>
                    <label>
                        Date 
                    </label>
                    <input type="text" placeholder="Add Date" value={day} onChange={(e) => setDay(e.target.value)}/>
                </div>
                <div className="addTask-submit">
                    <input type="submit" value="Save Task" />
                </div>
            </form>

        </div>
    )
}

export default AddTask

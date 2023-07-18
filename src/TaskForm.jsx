import React, { useState } from 'react'

const TaskForm = ({onAdd}) => {
    const [taskname, setTaskName] = useState('');
    function handleSubmit(ev){
        ev.preventDefault();
        onAdd(taskname);
        setTaskName('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' value={taskname} placeholder='Add Your Task...' onChange={ev => setTaskName(ev.target.value)} />
        <button>+</button>
    </form>
  )
}

export default TaskForm
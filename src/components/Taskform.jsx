import React, { useState, useSyncExternalStore } from 'react'

import './TaskForm.css'
import Tag from './Tag'

const Taskform = () => {
  const [taskdata, setTaskdata] = useState({
      task:" ",
      status : "TO DO"
  })

  const handleChange = (e) =>{
        const {name,value} = e.target;
        

        setTaskdata(prev =>{
          return{...prev, [name]:value}
        })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(taskdata);
  }


  

 /* const [task, setTask] = useState("")
  const [Status, setStatus] = useState("TO DO")
  
  const handleTaskChange = (e) =>{
    setTask(e.target.value)
  }

  const handleStatusChange = (e) =>{
    setStatus(e.target.value)
  }
  
  console.log(Status)*/

  return (
    <div>
       <header className='app-header'>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          name='task'
          className='task-input' 
          placeholder='Enter your task'
          onChange={handleChange}
          
          />

          <div className='task-form-bottom-line'>
            <div>
            <Tag tagName='Important!!'/>
            <Tag tagName='Less Important'/>
            <Tag tagName='Need Time'/>
            <Tag tagName='Less time'/>
           
            </div>

            <div>
            <select className='task-status'
                onChange={handleChange}
                name='status'
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type='submit' className='task-submit'>+ Add Task</button>
            </div>

          </div>
        </form>
      </header>
      </div>
  )
}

export default Taskform
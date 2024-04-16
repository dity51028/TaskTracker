import React from 'react'

import './TaskForm.css'
import Tag from './Tag'

const Taskform = () => {
  return (
    <div>
       <header className='app-header'>
        <form >
          <input type="text" className='task-input' placeholder='Enter your task'/>

          <div className='task-form-bottom-line'>
            <div>
            <Tag name='Important!!'/>
            <Tag name='Less Important'/>
            <Tag name='Need Time'/>
            <Tag name='Less time'/>
           
            </div>

            <div>
            <select className='task-status'>
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
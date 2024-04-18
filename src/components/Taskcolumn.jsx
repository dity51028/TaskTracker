import React from 'react'
import './Taskcolumn.css'
import Taskcard from './Taskcard'


const Taskcolumn = ({title,icon,tasks,status}) => {
  return (
    <section className='task-column'>
        <h2 className='task-col-heading'>
            <img className='task-col-icon' src={icon} alt="" />
             {title}</h2>

            {tasks.map(
              (task,index)=> 
                task.status === status &&
                ( <Taskcard 
                  key={index} 
                  title={task.task} 
                  tags={task.tags}
                  />
                ))
            }

    </section>
  )
}

export default Taskcolumn
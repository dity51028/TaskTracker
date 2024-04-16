import React from 'react'
import './Taskcolumn.css'


const Taskcolumn = ({title,icon}) => {
  return (
    <section className='task-column'>
        <h2 className='task-col-heading'>
            <img className='task-col-icon' src={icon} alt="" />
             {title}</h2>

    </section>
  )
}

export default Taskcolumn
import React from 'react'
import './Taskcolumn.css'
import Taskcard from './Taskcard'


const Taskcolumn = ({title,icon}) => {
  return (
    <section className='task-column'>
        <h2 className='task-col-heading'>
            <img className='task-col-icon' src={icon} alt="" />
             {title}</h2>

             <Taskcard/>

    </section>
  )
}

export default Taskcolumn
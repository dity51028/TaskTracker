import React from 'react'
import './Taskcard.css'
import Tag from './Tag'
import trash from "../assets/trash.png"

const Taskcard = () => {
  return (
   <article className='task-card'>
        <p className='task-text'>This is a simple text</p>
        <div className='task-card-bottom-line'>
            <div className='task-card-tags'>
                <Tag tagName="Important !!"/>
                <Tag tagName="Less important"/>
            </div>
            <div className='task-delete'>
                <img src={trash} alt="delete button" className='delete-icon'/>
            </div>
        </div>
   </article>
  )
}

export default Taskcard
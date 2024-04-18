import React from 'react'
import './Taskcard.css'
import Tag from './Tag'


import trash from "../assets/trash.png"

const Taskcard = ({title, tags,handleDelete,index}) => {
  return (
   <article className='task-card'>
        <p className='task-text'>{title}</p>
        <div className='task-card-bottom-line'>
            <div className='task-card-tags'>
               {
                tags.map((tag,index) => (
                    <Tag key={index} tagName={tag} selected/>) )
               }
            </div>
            <div className='task-delete' onClick={() => handleDelete(index)}>
                <img src={trash} alt="delete button" className='delete-icon'/>
            </div>
        </div>
   </article>
  )
}

export default Taskcard
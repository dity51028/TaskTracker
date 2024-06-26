import React,{useState} from 'react'
import '../App.css'
import Taskform from '../components/Taskform'
import Taskcolumn from '../components/Taskcolumn'
import Todo from '../assets/target.jpeg'
import doing from '../assets/star.jpeg'
import done from '../assets/checkmark.jpeg'

const Home = () => {
    const [tasks, setTasks] = useState([])

    const handleDelete = (taskIndex) =>{
      const newTasks = tasks.filter((task,index) => index !== taskIndex)
      setTasks(newTasks)
  
    }
    
    return (
      <div className='app' >
  
        <Taskform setTasks={setTasks}/>
        <main className='app_main'>
  
         <Taskcolumn 
          className='task-column' 
          title='To Do' 
          icon={Todo} 
          tasks={tasks} 
          status='todo' 
          handleDelete={handleDelete}
          />
  
         <Taskcolumn 
         className='task-column' 
         title='Doing' 
         icon={doing} 
         tasks={tasks} 
         status='doing'
         handleDelete={handleDelete}
         />
         
         <Taskcolumn 
         className='task-column' 
         title='Done' 
         icon={done} 
         tasks={tasks} 
         status='done'
         handleDelete={handleDelete}
         />
        </main>
  
      </div>
  )
}

export default Home
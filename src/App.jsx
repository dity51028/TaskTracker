import React,{useState} from 'react'
import './App.css'
import Taskform from './components/Taskform'
import Taskcolumn from './components/Taskcolumn'
import Todo from '../src/assets/target.jpeg'
import doing from '../src/assets/star.jpeg'
import done from '../src/assets/checkmark.jpeg'

const App = () => {
  const [tasks, setTasks] = useState([])
  
  return (
    <div className='app' >
      <Taskform setTasks={setTasks}/>
      <main className='app_main'>
       <Taskcolumn className='task-column' title='To Do' 
       icon={Todo} tasks={tasks} status='todo'/>
       <Taskcolumn className='task-column' title='Doing' 
       icon={doing} tasks={tasks} status='doing'/>
       <Taskcolumn className='task-column' 
       title='Done' icon={done} tasks={tasks} status='done'/>
      </main>

    </div>
  )
}

export default App
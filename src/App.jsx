import React from 'react'
import './App.css'
import Taskform from './components/Taskform'
import Taskcolumn from './components/Taskcolumn'
import Todo from '../src/assets/target.jpeg'
import doing from '../src/assets/star.jpeg'
import done from '../src/assets/checkmark.jpeg'

const App = () => {
  return (
    <div className='app' >
      
      <Taskform/>
      <main className='app_main'>
       <Taskcolumn title='To Do' icon={Todo}/>
       <Taskcolumn title='Doing' icon={doing}/>
       <Taskcolumn title='Done' icon={done}/>
      </main>

    </div>
  )
}

export default App
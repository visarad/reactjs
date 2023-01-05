import React, { useEffect, useState } from 'react'
import "./Header.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import { IconButton } from '@mui/material';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';  
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import Tasks from './Tasks.js';

const getItemsFromLocalStorage = () => {
  const list = localStorage.getItem('tasks')
  console.log(list)

  if (list) {
    return JSON.parse(list)
  }else {
    return []
  }
}

function Header() {
  const [tasks,addTasks] = useState(getItemsFromLocalStorage())
  const [text,setText] = useState("")

  const handleChange = (event) => {
      event.preventDefault()
      setText([text,event.target.value])
      console.log(event.target.value)
  }

  useEffect(()=> {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  })

  const handleAddTask = (event) => {
      event.preventDefault()
      addTasks([...tasks,text[1]])
      console.log(tasks)
  }

  return (
    <div>
    <div className="header">
      <div className="header__logo">
      <AssignmentIndIcon className='header__icon'/>
      <h2 className='header__logoTitle'>Tasks List</h2>
      </div>
      <div className="header__inputTask">
      <input type="text" className='header__taskInput' onChange={handleChange}></input>
      <IconButton onClick={handleAddTask}>
      <TaskAltRoundedIcon className='header__addTask'/>
      </IconButton>
      <IconButton>
      <ToggleOffIcon className='header__toggleIcon'/>
      </IconButton>
      </div>
    </div>
    
    <div className='tasks_style'>
    <Tasks tasks = {tasks}/>
    </div>
    </div>

  )
}

export default Header
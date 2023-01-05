import React from 'react'
import './Tasks.css'
import { Box, List} from '@mui/material'
import Task from './Task'

const  Tasks = ({tasks}) => {
    return (<Box>
        <List sx={{width:300}}>
            {tasks.map((task,key) => (
                <Task task={task}></Task>
            ))}
        </List>
    </Box>)
}

export default Tasks
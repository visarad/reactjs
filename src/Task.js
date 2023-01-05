import React from 'react'
import "./Task.css"
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import AssignmentLateRoundedIcon from '@mui/icons-material/AssignmentLateRounded';

const Task = ({task}) => {
  return (
    <div className='task'>
    <ListItem>
    <div>
    <ListItemButton style={{"background-color":"aliceblue"}}>
        <Box border={{width:400}} >
        <ListItemText primary={task} />
        </Box>
    </ListItemButton>
    </div>
    <div>
    <ListItemButton>
        <Box border={{width:30}} >
        <ListItemText > 
            <AssignmentTurnedInRoundedIcon/>
        </ListItemText>
        </Box>
    </ListItemButton>
    </div>
    </ListItem>
    </div>
  )
}

export default Task

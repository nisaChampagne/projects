import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'

export default ()=> {
    return(
        <AppBar position='static'>
            <ToolBar>
                <Typography variant='headline' color='colorSecondary' noWrap>
                Simple Blog Example
                </Typography>
            </ToolBar>
        </AppBar>
    )
}
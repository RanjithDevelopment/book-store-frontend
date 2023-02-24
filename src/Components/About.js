import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
<Box display='flex' flexDirection='column' alignItems='center'>
  <Typography sx={{fontFamily:"fantasy"}} variant='h2'>This Library Managemment Application</Typography>
  <Typography  sx={{fontFamily:"fantasy"}} variant='h3'>This is A Simple CRUD Application Developed Using Mern Stack</Typography>

</Box>
    </div>
  )
}

export default About

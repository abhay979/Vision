import React from 'react'
import { useState,useEffect } from 'react'
import SideBar from './SideBar'
import Videos from './Videos'
import {fetchFromAPI} from './utils/FetchfromAPI' 
import { Box,Stack,Typography } from '@mui/material'
const Feed = () => {
  
  const [selectedCategory, setselectedCategory] = useState('New');
  const [videos,setvideos] = useState([]);

  useEffect(()=> {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setvideos(data.items));
  },
   [selectedCategory])
   
  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d', px:{sx:0,md:2}}}>
        <SideBar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/> 
     </Box>
       <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} style={{display:"flex",flexDirection:"row"}} >
        <span style={{color:"white",fontWeight:"bold"}}><h4>{selectedCategory}</h4> </span>
          <span className='mx-2' style={{color:"#FC1503",fontWeight:"bold"}}><h4>Videos</h4> </span>
        </Typography> 
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed

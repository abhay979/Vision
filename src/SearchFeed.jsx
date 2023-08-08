import React from 'react'
import { useState,useEffect } from 'react'
import Videos from './Videos'
import { useParams } from 'react-router-dom'
import {fetchFromAPI} from './utils/FetchfromAPI' 
import { Box,Typography } from '@mui/material'
const SearchFeed = () => {
  const {searchTerm} = useParams();
  const [videos,setvideos] = useState([]);

  useEffect(()=> {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setvideos(data.items));
  },
   [searchTerm])
   
  return (
       <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} style={{display:"flex",flexDirection:"row"}} >
        <span style={{color:"white",fontWeight:"bold"}}><h4>Search Results for: {searchTerm} </h4> </span> 
          <span className='mx-2' style={{color:"#FC1503",fontWeight:"bold"}}><h4>Videos</h4> </span>
        </Typography> 
        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed

import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { fetchFromAPI } from './utils/FetchfromAPI'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'

import {demoChannelUrl,demoChannelTitle,demoVideoUrl,demoVideoTitle } from './utils/constants'
const VideoCard = ({video:{id:{videoId},snippet} }) => {
  const [channel,setchannel] = useState(null);
  useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${snippet?.channelId}`)
        .then(data => setchannel(data?.items[0]))
  },[snippet?.channelId])
    
  return (
    <Card sx={{height:'310px',width :{md:'315px',xs : '100%',boxShadow:'none',borderRadius: 0},backgroundColor:"#1e1e1e"}}>
      <Link to={videoId?`/video/${videoId}`: demoVideoUrl}>
      <CardMedia image={snippet?.thumbnails?.high?.url } 
      alt={snippet?.title} sx={{width:319,height: 180}} />
      </Link>
      <CardContent sx={{backgroundColor:"#1e1e1e",height:'106px'}}>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>   
         <Typography variant='subtitle1' fontWeight="bold" color="#FFF" backgroundColor="#1e1e1e" >
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
         </Typography>
        </Link> 
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:demoChannelUrl} style={{backgroundColor:"#1e1e1e"}}>  
        <div style={{display:"flex",alignItems:"center",backgroundColor:'#1e1e1e'}}> 
        <img src={channel?.snippet?.thumbnails?.high?.url} alt={channel?.snippet?.channelTitle} style={{height:"40px",width:"40px",borderRadius:"50%"}}></img>
         <Typography className='mx-1' variant='subtitle2' fontWeight="bold" backgroundColor="#1e1e1e" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
         </Typography>
         </div>
        </Link>
    </CardContent>
    </Card>
  )
}

export default VideoCard

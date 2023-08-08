import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from './utils/FetchfromAPI'
const ChannelDetail = () => {

  const [channelDetail,setChannelDetail] = useState(null);
  const [videos,setVideos] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  
  return (
    <Box minHeight="95vh">
      <Box>
      <div style={{ background: ' linear-gradient(90deg, rgba(32,124,235,1) 0%, rgba(10,79,224,1) 41%, rgba(136,28,224,1) 100%)',zIndex:10,height:'240px'}}/>
 <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
   </Box>
   <Box display="flex" p="2">
    <Box sx={{mr:{sm:'100px'}}}/>
     <Videos videos={videos} />
   </Box>
    </Box>
    
  )
}

export default ChannelDetail

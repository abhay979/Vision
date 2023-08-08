
import React from "react";
import { useState, useEffect } from "react";
import Videos from "./Videos";
import { fetchFromAPI } from "./utils/FetchfromAPI";
import { useParams, Link } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";

const VideoDetail = () => {
  const [VideoDetail, setVideoDetail] = useState(null);
  const [svideos, setsvideos] = useState([]);

  const { id } = useParams();
  console.log(VideoDetail);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [id]);

  const [channel, setchannel] = useState(null);
  useEffect(() => {
    fetchFromAPI(
      `channels?part=snippet&id=${VideoDetail?.snippet?.channelId}`
    ).then((data) => setchannel(data?.items[0]));
  }, [VideoDetail?.snippet?.channelId]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet,id&relatedToVideoId=${id}`).then((data) =>
      setsvideos(data?.items)
    );
  }, [id]);
  console.log(svideos);

  if (!VideoDetail) return <h3 style={{color:"white"}}>Loading...</h3>;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box sx={{display:"flex"}} >
          <Box sx={{ width: "100%", top: "87px",flex:'2.5',position:"sticky"}}>
            <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls style={{position:"sticky"}}/>
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {VideoDetail.snippet.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1}  px={2}>
              <Link to={`/channel/${VideoDetail.snippet.channelId}`}>
                <button class="c-button c-button--gooey" style={{ borderRadius: "15px 15px 15px 15px" }}>
                  <div style={{ display: "flex" }}>
                    <img src={channel?.snippet?.thumbnails?.high?.url} alt={channel?.snippet?.channelTtile} style={{height: "40px", width: "40px",borderRadius: "50%", }}></img>
                    <Typography className="mx-1" color="#fff" variant="h5">
                      {VideoDetail.snippet.channelTitle}
                    </Typography>
                  </div>
                  <div class="c-button__blobs"><div></div> <div></div> <div></div> </div>
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: "block", height: "0", width: "0" }}  >
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur in="SourceGraphic"  stdDeviation="10" result="blur"></feGaussianBlur>
                      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                      <feBlend in="SourceGraphic" in2="goo"></feBlend>
                    </filter>
                  </defs>
                </svg>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}> {parseInt(VideoDetail.statistics.viewCount).toLocaleString()} views
                </Typography>
                <button className="btton" disabled> {parseInt(VideoDetail.statistics.likeCount).toLocaleString()} Likes
                  <span>  <ThumbUpRoundedIcon /> </span>
                </button>
              </Stack>
            </Stack>
          </Box>
          <div className="mx-3" style={{flex:'0.5'}}>
          <Videos videos={svideos} />
           </div>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;

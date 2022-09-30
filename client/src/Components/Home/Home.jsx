import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BigPlayButton, Player } from 'video-react';
import { serverUrl } from '../../serverUrl';
// import "node_modules/video-react/dist/video-react.css"
import { useDispatch } from 'react-redux';
import { setVideoUrl } from '../../Redux/Video/VideoSlice';
import PlayVideoModal from '../PlayVideo/PlayVideo';

function Home() {
  const [videos, setVideos] = useState();
  const [players, setPlayers] = useState([]);
  const [currentVideo, setCurrentVideo] = useState();
  const dispatch = useDispatch();
  const getVideos = () => {
    axios
      .get(`${serverUrl}/videos`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        setVideos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getVideos();
  }, []);

  const playVideo = (index) => {
    console.log(players, index);
    players[index].actions.play();
  };
  const reloadVideo = (index) => {
    players[index].load();
  };
  
  const handleClick=(url)=>{
    dispatch(setVideoUrl({url:url,modalOpen:true}))
    // setCurrentVideo( url);

  }

  return (
    <div>
      <PlayVideoModal  />
      <Grid container spacing={2}>
        {videos &&
          videos.map((item, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <div
                  onMouseEnter={() => {
                    playVideo(index);
                  }}
                  onMouseLeave={() => {
                    reloadVideo(index);
                  }}
                  onClick={() => {
                    handleClick(item.videoUrl)
                  }}
                >
                  <Player
                    ref={(player) => {
                      players.push(player);
                    }}
                    fluid={false}
                    height={250}
                    width={300}
                  >
                    <source src={item.videoUrl} />
                    <BigPlayButton />
                  </Player>
                </div>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

export default Home;

import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Player } from 'video-react';
import { serverUrl } from '../../serverUrl';
// import "node_modules/video-react/dist/video-react.css"

function Home() {
  const [videos, setVideos] = useState();

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
  return (
    <div style={{ display: 'flex' ,alignItems:'center'}}>
      {/* <Player fluid={false} height={250}>
        <source src='https://res.cloudinary.com/groovy-planet/video/upload/v1664219029/o2xgi0j8bakesij4kei1.mp4' />
      </Player> */}
      <Grid container spacing={2} sx={{alignItems:'center'}}>
        {videos &&
          videos.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <dir style={{ padding: '10px' }}>
                  <Player fluid={false} height={250} width={300}>
                    <source src={item.videoUrl} />
                  </Player>
                </dir>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

export default Home;

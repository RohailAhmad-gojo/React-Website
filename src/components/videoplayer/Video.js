import { Grid } from '@material-ui/core'
import VideoPlayer from "react-video-js-player"
import React from 'react'
import "./Video.css"
import ship from "./vid/video.mp4"


function Video() { 
  
const VideoJs = () => {
  const videoSrc = {ship};
  // const Poster = "./vid/poster.jpg"
} 

  return (
    <div className='secTwo'>
        <Grid container justifyContent='space-evenly'>
            <Grid item xs={11} md={9} lg={6} className="secTwoPara">
               <div className='secTwoParas'>
                <p>Yield daily $BAR rewards without staking, mint strange ape species, steal someone’s NFT & get 50% of secondary OS royalties if you HODL.</p>
               </div>
               <div className='secTwoVideo'>
                <vedio>
                  <source src='./vid/video.mp4'></source>
                </vedio>
               </div> 
            </Grid>
        </Grid>
    </div>
  )
}

export default Video
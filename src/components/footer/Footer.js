import { Grid } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import React from 'react'
import "./footer.css"
function footer() {
  return (
    <div>
        <Grid container justifyContent='space-evenly' className='footerTop'>
            <Grid item lg={4}>
                <div className='footerLogo'>
                   <img src='./Assets/logo2.png'/>
                   <h3>Verified Smart Contract</h3>
                </div>
                <div className='footerIcon'>
                      <div className='navBarIcons'>
                        <TwitterIcon className='icons'/>
                        <FacebookIcon className='icons'/>
                        <YouTubeIcon className='icons'/>
                        <InstagramIcon className='icons'/>
                       </div>
                       <div className='footerList'>
                           <ul>
                               <li>NFT Drops</li>
                               <li>Terms of Service</li>
                               <li className='footerLists'>Privacy Policy</li>
                           </ul>
                       </div>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default footer
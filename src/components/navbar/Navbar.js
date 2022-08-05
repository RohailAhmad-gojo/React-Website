import React from 'react'
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./Navbar.css"
import { useState } from 'react';
import { Box, Button, Drawer, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <div>
        <header className='navBarHeader'>
            <Grid container justifyContent='space-evenly'>
                <Grid item xs={12} lg={11} className="navBar">
                   <div className='navBarLogo'>
                       <img src="./Assets/logo.png"/>
                   </div>
                   <div className='navBar'>
                       <div className='navBarList'>
                           <ul className='NavBarLists'>
                                <li>
                                    <a href=''>Migration</a>
                                </li>
                                <li>
                                    <a href=''>Treehouse</a>
                                </li>
                                <li>
                                    <a href=''>Gallery</a>
                                </li>
                                <li>
                                    <a href=''>BananaBAR</a>
                                </li>
                           </ul>
                       </div>
                       <div className='navBarIcons'>
                        <TwitterIcon className='icons'/>
                        <FacebookIcon className='icons'/>
                        <YouTubeIcon className='icons'/>
                        <InstagramIcon className='icons'/>
                       </div>
                       <div className='navBarBtn'>
                           <Button className='Btn' ><img src='./Assets/btn.png' className='buttonIcon'/>Connect MetaMask</Button>
                       </div>
                   </div>
                   <div className='navbarDrawer'>
                   <IconButton className='sideBarMenu' size='large' edge='start' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
                       <MenuIcon className='sideBarMenuIcon'/>
                   </IconButton>
                   <Drawer   anchoe='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                       <Box className='sideBar'  width='50%' textAlign={'center'} role='presentation'>
                       <ul className='sideBarLists'>
                                <li>
                                    <a href=''>Migration</a>
                                </li>
                                <li>
                                    <a href=''>Treehouse</a>
                                </li>
                                <li>
                                    <a href=''>Gallery</a>
                                </li>
                                <li>
                                    <a href=''>BananaBAR</a>
                                </li>
                           </ul>
                           <div className='sideBarIcon'>
                        <TwitterIcon className='icon'/>
                        <FacebookIcon className='icon'/>
                        <YouTubeIcon className='icon'/>
                        <InstagramIcon className='icon'/>
                       </div>
                       </Box>
                   </Drawer>
                   </div>
                </Grid>
            </Grid>
        </header>
    </div>
  ) 
}

export default Navbar
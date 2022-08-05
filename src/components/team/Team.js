import { Grid } from '@material-ui/core'
import React from 'react'
import "./Team.css"
function Team() {
  return (
    <div>
        <Grid container justifyContent='space-evenly' className='teamContainer'>
            <Grid item xs={10} lg={9}>
                <div className='teamHeader'>
                    <h1><i>The Team</i></h1>
                </div>
                <Grid container className='teamText'>
                    <Grid item className='teamPara' lg={2}>
                            <img src='./Assets/team.png'/>
                        <div className='teamParaText'>
                           <h3>DamienE</h3>
                           <h4>Champion Artist<br/>The Workout<br/>Maniac</h4>
                        </div>
                    </Grid>
                    <Grid item className='teamPara' lg={2}>
                
                            <img src='./Assets/team2.jpg'/>
                       
                        <div className='teamParaText'>
                           <h3>GaryBaby</h3>
                           <h4>Creative Director<br/>YOLO <br/>Experimenting</h4>
                        </div>
                    </Grid>
                    <Grid item className='teamPara' lg={2}>
            
                            <img src='./Assets/team3.jpg'/>
                    
                        <div className='teamParaText'>
                           <h3>BabySage</h3>
                           <h4>Crypto Freak<br/>NFT Enthusiast</h4>
                        </div>
                    </Grid>
                    <Grid item className='teamPara'lg={2}>
                        
                            <img src='./Assets/team4.jpg'/>
                        
                        <div className='teamParaText'>
                           <h3>SandraA</h3>
                           <h4>Mad Artist<br/>Morning Coffee<br/>Addict</h4>
                        </div>
                    </Grid>
                    <Grid item className='teamPara'lg={2}>
                        
                            <img src='./Assets/team5.jpg'/>
                        
                        <div className='teamParaText'>
                           <h3>RachelK</h3>
                           <h4>The Outreach Gal<br/>Secretive Closet<br/>Hoarder

</h4>
                        </div>
                    </Grid>
                    </Grid>
                    
            </Grid>
        </Grid>
    </div>
  )
}

export default Team
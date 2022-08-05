import { Grid, Button } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import React from 'react'
import './Home.css'
function Home() {
  return (
    
        <section className='homePage'>
            <div className='overlay'>
            <Grid container justifyContent='space-evenly' alignItems='center'>
                <Grid item xs={10} md={8} lg={6}className="homePageText">
                   <div className="homePageTexts">
                       <h1>An Apevolution <br/>is Coming</h1>
                       <p>This is the start of a new era of Apes. Strange ape species are created as a result of a mad scientist ape’s obsession to save his own kind.</p>
                       <Button>View Whitepaper</Button>
                       <Button><InstagramIcon className='buttonIcon'/>Join Our Discourd</Button>
                   </div>
                </Grid>
            </Grid>
            </div>
        </section>
    
  )
}

export default Home
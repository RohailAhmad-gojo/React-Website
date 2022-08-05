import { Grid , Button} from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';

import React from 'react'
import "./Featured.css"

function Featured() {
  return ( 
    <div>
        <Grid container justifyContent='space-evenly' className='fraturedBody'>
            <Grid item lg={9}>
                <div className='featuredHeader'>
                    <h1><i>Previously Featured On</i></h1>
                </div>
                <div className='featuredImage'>
                  <ul>
                      <li>
                        <img src='./Assets/featured.png'/>
                      </li>
                      <li>
                        <img src='./Assets/featured2.png'/>
                      </li>
                      <li>
                        <img src='./Assets/featured3.png'/>
                      </li>
                  </ul>
                </div>
                <div className='featuredButton'>
                    <h1><i>What’s Coming in the <br/>Apevolution Club Collection?</i></h1>
                    <ul>
                        <li>
                            <Button className='bt'>View whitepaper</Button>
                        </li>
                        <li>
                        <Button><InstagramIcon className='buttonIcon'/>Join Our Discourd</Button>
                        </li>
                    </ul>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Featured
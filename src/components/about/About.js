import { Grid } from '@material-ui/core'
import React from 'react'
import "./About.css"
function About() {
  return (
    <div>
        <Grid container justifyContent='space-evenly'>
            <Grid item xs={11} md={10} lg={9}>
                <Grid container className='aboutPara'>
                    <Grid item lg={6} className="aboutText">
                        <h1><i>About <br/> Apevolution Club</i></h1>
                        <p>Apevolution club was previously known as Baby Apes Rescue. The rename marks the start of a new era of Apes.</p>
                        <br/>
                        <p>It began when a giant asteroid abruptly struck a volcano at the home of Baby Apes. The impact caused a volcano eruption which quickly turned into a massive forest fire. A total of 2500 baby apes were at risk of extinction but a group of apes from another tribe rescued them in time.</p>
                        <br/>
                        <p>Amongst the survivors of the catastrophe was a Mad Scientist Ape who became obsessed with cloning himself to save his own kind for fear that another disaster may strike. He created a laboratory in his new home and began daily experimentation on different cloning methods in an attempt to clone his kind. On a fateful day, while conducting one of his many cloning experiments, he accidentally created a couple of strange species apart from his own kind.</p>
                    </Grid>
                    <Grid item className='aboutImage' lg={6}>
                        <div className='aboutImages'>
                        <img src='./Assets/about.jpg'/>
                        <img src='./Assets/about3.jpg'/>
                        </div>
                        <div className='aboutImg'>
                        <img src='./Assets/about3.jpg'/>
                        <img src='./Assets/about4.jpg'/>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
  )
}

export default About
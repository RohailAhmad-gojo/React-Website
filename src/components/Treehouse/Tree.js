import { Grid,Button } from '@material-ui/core'
import React from 'react'
import "./Tree.css"
function Tree() {
  return (
    <div>
        <Grid container justifyContent='space-evenly' className='treeHouseContainer'>
            <Grid item xs={10} lg={8}>
                <div className='treeHouseHeader'>
                <h1><i>Entry Into the Treehouse</i></h1>
                <p>When you are a member of the Apevolution Club, you will be able to access this beautiful treehouse. A new home that was built in a new land after the wildfire catastrophe. In the treehouse you can claim exclusive daily $BAR rewards without staking.</p>
                </div>
                {/* <div className='treeButton'>Enter Treehouse<Button/></div> */}
            </Grid>
        </Grid>
        <div className='treeHouseBack'>
           <img src="./Assets/treehouse.jpg" />
        </div>
    </div>
  )
}

export default Tree
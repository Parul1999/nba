import React, { useState } from 'react';
import Header from './Header';

import Teams from './Teams';
import Games from './Games';
import { Grid,Tabs, Tab,Paper} from '@material-ui/core';

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  function handleTabChange(e, val) {
    setCurrentTab(val)
  }
  return (
    <div className="App">
     <Header/>
      <Grid container justify="center" >
        <Grid item xs={8} md={8} >
          <Paper style={{width:"50%", marginLeft:"25%"}}>
          <Tabs
          centered
            value={currentTab}
            onChange={handleTabChange}
          >
            
            <Tab label="NBA Teams"  />
            <Tab label="NBA Games"  />
          </Tabs>
        </Paper>
        </Grid>
        <Grid>
          {
            currentTab === 0?<Teams></Teams>:<Games></Games>
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default  (App);

 
     

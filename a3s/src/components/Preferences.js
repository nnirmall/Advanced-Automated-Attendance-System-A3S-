import React, { Component } from 'react'
import SideBar from './SideBar'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export class Preferences extends Component {
  render() {
    return (
      <div className="App">
          <div className='container'>
            <SideBar/>
            <div className='dybamicPage' style={{
            backgroundImage: "url('./img/ok1.jpg')",
            backgroundSize: 'cover',
          }}>
            <section>
              <div className="row">
                
                <Box sx={{ minWidth: 275 }} margin={4}>
                 
                  <Card variant="outlined">
                      <CardContent>
                      <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom variant="body2" component="div">
                      <h3>Feature coming soon!!</h3>
                      </Typography>
  
                      </CardContent>
                      
                  </Card>
                  
                </Box>
                <Box
                component="main"
                sx={{
                  backgroundColor: (theme) => theme.palette.background.default,
                  flexGrow: 1,
                  height: '100vh',
                  overflow: 'auto',
                }}
              ></Box>
              </div>
            </section>
            </div>
          </div>
      </div>
    );
  }
}

export default Preferences

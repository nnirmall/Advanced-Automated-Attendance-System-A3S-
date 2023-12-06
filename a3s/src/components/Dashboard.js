import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SideBar from "./SideBar";
import { useAuth } from './AuthContext';

// other MUI imports

function Dashboard() {
  const { user } = useAuth();
  return (
    <div className="App">
        <div className='container'>
          <SideBar/>
          <div className='dybamicPage' style={{
            backgroundImage: "url('./img/ok3.jpg')",
            backgroundSize: 'cover',
          }}>
          <section>
            <div className="row">
              
              <Box sx={{
                minWidth: 275,
                margin: 4,
                
              }}>
                <h2>Welcome to the Dashboard |{user.firstname} {user.lastname}|</h2>
              
                {/* <Card variant="outlined">
                    <CardContent>
                    <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom variant="body2" component="div">
                               
                    </Typography>

                    </CardContent>
                    
                </Card> */}
                
                
              </Box>
              <Box sx={{
                minWidth: 275,
                margin: 4,
                
              }}>
                
                <Card >
                    {/* <CardContent> */}
                    <Typography sx={{ fontSize: 26 }} >
                               
                    </Typography>

                    {/* </CardContent> */}
                    
                </Card>
                
                
              </Box>
            </div>
          </section>
          </div>
        </div>
    </div>
  );
}

export default Dashboard;
import React, { useEffect, useState } from "react"
import SideBar from './SideBar'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAuth } from './AuthContext';

function Profile() {
  const { user } = useAuth();
  const [showEditPopup, setShowEditPopup] = useState(false); 
  
  const handleEdit = () => {
      setShowEditPopup(true);
  }
  return (
    <div className="App">
        <div className='container'>
          <SideBar/>
          <div className='dybamicPage' style={{
            backgroundImage: "url('./img/ok2.jpg')",
            backgroundSize: 'cover',
          }}>
          <section>
            <div className="row">
              <Box sx={{ minWidth: 275 }} margin={4}>
                <Card variant="outlined">
                    <CardContent>
                    <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
                    Profile
                    </Typography>
                    </CardContent>
                    <CardContent>
                    <Typography variant="body2" component="div">
                                    Name: {user.firstname} {user.lastname}
                    </Typography>

                    </CardContent>
                    <CardContent>
                  <Typography variant="body2" component="div">
                  Email address :{user.email}
                  </Typography>
                    </CardContent>

                    <CardContent>
                  <Typography variant="body2" component="div">
                  Phone :{user.phone}
                  </Typography>
                    </CardContent>
                    <CardContent>
                  <Typography variant="body2" component="div">
                  Address :{user.address}
                  </Typography>
                    </CardContent>
                    <CardContent>
                  <Typography variant="body2" component="div">
                  LID :{user.id}
                  </Typography>
                    </CardContent>
                    <CardActions>
                            <Button
                                variant="outlined"
                                size="small"
                                onClick={() => handleEdit()}
                              >
                                Edit
                              </Button>
                          </CardActions>
                </Card>
                
              </Box>
            </div>
          </section>
          </div>
        </div>
    </div>
  )
}

export default Profile

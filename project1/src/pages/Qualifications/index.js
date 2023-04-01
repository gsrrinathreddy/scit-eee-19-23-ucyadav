import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree Chaitanya " src="https://media.licdn.com/dms/image/C5103AQGi5ROCraNoIQ/profile-displayphoto-shrink_800_800/0/1554872220950?e=2147483647&v=beta&t=gW1b11jPLjpxKilCZKrPzE47AzIFp6O_Ufh2901MH7M"/>
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                7.21 CGPA
              </Typography>
              {" — B.Tech in Electrical And Electronics Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Trinity College" src="https://content.jdmagicbox.com/comp/karimnagar/m6/9999px878.x878.090606115217.m4m6/catalogue/trinity-college-of-engineering-and-technology-station-road-karimnagar-colleges-d7pav9h-250.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Trinity College Of Engineering And Technology"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                80% CGPA
              </Typography>
              {" — Diploma in Electrical And Electronics Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Little Flower School" src="https://schoollisting-cms.s3.ap-south-1.amazonaws.com/upload/tazjCJbn556fw1CSGBMMxY.jpeg" />
        </ListItemAvatar>
        <ListItemText
          primary="Little Flower English Medium High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                8.7% CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
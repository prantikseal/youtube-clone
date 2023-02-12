import React from 'react'
import {Box, CardContent, CardMedia , Typography} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({channelDetail}) => {
  console.log(channelDetail);
  return (
    <Box sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: {xs:'356px' , md: '320px'},
        height: '326px',
        margin: 'auto'
    }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>\
        <CardContent sx={{display:'flex', flexDirection: 'column' , justifyContent : 'center', textAlign: 'center', color: '#FFF'}}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{width: '180px', height:'180px', borderRadius:'50%', mb: 2, border: '1px solid #ee3e3'}}
          />
          <Typography variant="h6" >
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize: 14 , color:'grey', marginLeft: '5px' , marginTop: '2px'}} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
        </CardContent>
      </Link>  
    </Box>
  )
}

export default ChannelCard
import {Link} from 'react-router-dom'
import { Typography,Card ,CardContent, CardMedia  } from '@mui/material'
import React from 'react'
import {CheckCircle} from '@mui/icons-material'

import {demoThumbnailUrl, demoVideoTitle , demoVideoUrl, demoChannelTitle, demoChannelUrl } from '../utils/constants'

const VideoCard = ({video:{ id:{videoId},snippet}}) => {
  return (
    <Card sx={{width : {md:'320px', xs:'100%'}, boxShadow: 'none', borderRadius: 0}}>
        <Link to={videoId ? `/video/{videoId}` : demoVideoUrl}>
            <CardMedia 
            
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{width: 358, height:180}} />
        </Link>
        <CardContent sx = {{backgroundColor: '#1e1e1e', height:106}} >
        <Link to={videoId ? `/video/{videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF" sx={{textOverflow : 'ellipsis'}}>
                {snippet?.title.slice(0,60) || demoChannelTitle.slice(0,60)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/video/{snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle sx={{fontSize: 16 , color:'grey', marginLeft: '5px' , marginTop: '2px'}} />
            </Typography>
        </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard
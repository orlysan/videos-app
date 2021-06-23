import React from 'react';
import VideoItem from './VideoItem';
import { ListGroup } from 'react-bootstrap';


class VideoList extends React.Component{
  
    render(){
        const selectedVideo = this.props.onVideoSelect;
        const videosList = this.props.videoResults.map(item => {
            return (
            <VideoItem 
                key={item.id.viedoId}
                onVideoSelect={selectedVideo} 
                video={item}
            />)
        })
       
        return (
           <ListGroup>{videosList}</ListGroup>
        )
    }
}

export default VideoList;
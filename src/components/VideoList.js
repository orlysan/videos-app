import React from 'react';
import VideoItem from './VideoItem';
import { ListGroup } from 'react-bootstrap';


class VideoList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const selectedVideo = this.props.onVideoSelect;
        const videosList = this.props.videoResults.map(item => {
            return <VideoItem onVideoSelect={selectedVideo} video={item}/>
        })
       
        return (
           <ListGroup>{videosList}</ListGroup>
        )
    }
}

export default VideoList;
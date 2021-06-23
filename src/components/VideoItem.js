import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './VideoItem.css';

class VideoItem extends React.Component{
    constructor(props){
        super(props)
    }

    showVideo =(video)=>{
        this.props.onVideoSelect(video)
    }
    render(){
        const video = this.props.video
        return(
            <ListGroup.Item className="video-item" onClick={()=>this.showVideo(video)}>
                <img className="p-2" src={video.snippet.thumbnails.medium.url}/>
                {video.snippet.title}
            </ListGroup.Item>
        )
    }
}

export default VideoItem;
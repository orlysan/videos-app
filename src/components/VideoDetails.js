import React from 'react';
import { Card } from 'react-bootstrap';

class VideoDetails extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        const video = this.props.video
        if(!video){
            return <div>Loading...</div>
        }

        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

        return (
            <Card>
              
                <iframe width="560" height="315" src={videoSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
                <Card.Body>
                    <Card.Text>{video.snippet.title}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default VideoDetails;
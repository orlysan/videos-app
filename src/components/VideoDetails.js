import React from 'react';
import { Card } from 'react-bootstrap';

class VideoDetails extends React.Component{
    render(){
        
        const video = this.props.video
        if(!video){
            return <div>Loading...</div>
        }

        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

        return (
            <Card className="mt-3">
              
                <iframe width="560" height="315" src={videoSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              
                <Card.Body>
                    <Card.Text>{video.snippet.title}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default VideoDetails;
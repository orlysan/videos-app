
import React from 'react';
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';
import { Container , Row , Col } from 'react-bootstrap';
import youtube from './API/youtube';



class App extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      videoResults : [],
      chosenVideo: null
    }
  }
  render(){

    //searchBar function
    this.onSearchSubmit = async (input) =>{
      const response = await youtube.get('/search', {
        params: {
          q:input
        }
      })
      this.setState({
        videoResults: response.data.items
      })
    }

    //selecting video
    this.onVideoSelect =(video)=>{
      this.setState({chosenVideo : video})
    }

    return (
      <Container>
        <SearchBar 
          searchInput={this.onSearchSubmit}
        />
        <Row>
          <Col>
              <VideoDetails video={this.state.chosenVideo}/>
          </Col>
          <Col className="mt-2">
              <VideoList 
                videoResults={this.state.videoResults}
                onVideoSelect={this.onVideoSelect}
              />
          </Col>
        </Row>
      </Container>
  
    );
  }
}

export default App;


import React from 'react';
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';
import { Container } from 'react-bootstrap';
import youtube from './API/youtube';



class App extends React.Component{
  render(){

    this.onSearchSubmit = async (input) =>{
      const response = await youtube.get('/search', {
        params: {
          q:input
        }
      })
      console.log(response.data.items)
    }
    return (
      <Container>
        <SearchBar 
          searchInput={this.onSearchSubmit}
        />
        <VideoDetails />
        <VideoList />
      </Container>
  
    );
  }
}

export default App;

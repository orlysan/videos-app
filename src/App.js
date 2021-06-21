
import React from 'react';
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';
import { Container } from 'react-bootstrap';



class App extends React.Component{
  render(){
    return (
      <Container>
        <SearchBar />
        <VideoDetails />
        <VideoList />
      </Container>
  
    );
  }
}

export default App;

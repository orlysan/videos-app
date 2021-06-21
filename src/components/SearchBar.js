import React from 'react';
import { Form  } from 'react-bootstrap';

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchImput: ""
        }
    }

    onSearchInput = (e) =>{
        this.setState({searchImput:e.target.value})
    }

    onSubmitVideo =(e) =>{
        e.preventDefault();
        this.props.searchInput(this.state.searchImput)
    }
    render(){
        return (
            <Form onSubmit={this.onSubmitVideo}>
                <Form.Control 
                    type="text" 
                    placeholder="Search for a Video"
                    vlaue={this.state.searchImput}
                    onChange={this.onSearchInput}
                    />
            </Form>
        )
    }
}

export default SearchBar;
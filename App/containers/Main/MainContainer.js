import React, { Component } from 'react';

class MainContainer extends Component {
    constructor(){
        super()
        
        this.state = {
            welcomeText: 'Welcome to the Playground!'
        }
    }

    render(){
        const { welcomeText } = this.state;
        return(
            <div className="container">{welcomeText}</div>
        )
    }
}

export default MainContainer;
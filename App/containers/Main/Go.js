import React, { Component } from 'react';

class Go extends Component {
    constructor(){
        super()
        
        this.state = {
            welcomeText: 'GO!'
        }
    }

    render(){
        const { welcomeText } = this.state;
        return(
            <div className="container">{welcomeText}</div>
        )
    }
}

export default Go;
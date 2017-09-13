import React, { Component } from 'react';

class SideMenu extends Component {
    constructor(){
        super();
        const listofMenus = [
            {name: 'Analytics', pathSlug: 'analytics'}
        ]
    }
    render(){
        const { children } = this.props
        return(
            <div className="col-md-3">
                <ul>
                   {children} 
                </ul>
            </div>
        )
    }
}

export default SideMenu;
import React, { Component } from 'react';

class Showcase extends Component {
    constructor() {
        super();
        this.state = {
            testLifeCycle: []
        }
    }

    componentDidMount() {
        this.setState({testLifeCycle: [0, 1, 2, 3, 4]})
    }

    render() {
        const { testLifeCycle } = this.state;
        return (
            <div>
              <h6>Hello from Showcase Page</h6>
              { testLifeCycle && testLifeCycle.length > 0 && testLifeCycle.map((item, i) => {
                  return(
                      <li key={i}>{item}</li>
                  )
              })}
            </div>
        );
    }
}

export default Showcase;
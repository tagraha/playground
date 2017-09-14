import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header } from '../../components';

class MainContainer extends Component {
  constructor(){
    super()
  }

  render(){
    const { children } = this.props;
      return (
          <div className="container">
           {children}
          </div>
      )
    }
}

export default MainContainer;
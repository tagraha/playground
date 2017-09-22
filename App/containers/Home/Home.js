import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HomeExplore } from '../../components';

class Home extends Component {
  constructor(){
      super();
      const promotedMenus = [
          {name: 'Analytics', pathSlug: 'analytics'},
          {name: 'D3 JS', pathSlug: 'd3-js'},
          {name: 'React Bootstrap', pathSlug: 'react-bootstrap'},
          {name: 'SnapSvg', pathSlug: 'snapsvg'}
      ]
      this.state = {
          promotedmenus: promotedMenus
      }
  }

  render(){
    const { children } = this.props;
    const { promotedmenus } = this.state;

    return(
      <div className="container">
        {/* MARK: Logo */}
        <div className="iframe-home">
          <iframe width="500" height="500" src="https://lottiefiles.com/iframe/410-lego-loader" frameBorder="0" allowFullScreen></iframe>
        </div>
        {/* MARK: Main Title */}
        <div className="row">
          <div className="col-xs-12 text-center paddtop-120">
            <h1 className="medium-font">Welcome To The Playground</h1>
            <hr />
          </div>
        </div>
        {/* MARK: Promoted Menu */}
        <div className="row text-center">
          <ul className="col-xs-12">
           {promotedmenus && promotedmenus.length > 0 && promotedmenus.map((menu, index) => {
              return(
                <Link key={index} to={`toys/${menu.pathSlug}`}>
                  <li className="col-xs-3" key={index}>{menu.name}</li>
                </Link>
              )
            })
           }
          </ul>
        </div>
        {/* MARK: Explore Card */}
        <h2 className="text-center">Or Checkout Other Stuffs</h2>
        <div className="row">
          <HomeExplore />
        </div>
      </div>
    )
  }
}

export default Home;
import React, { Component } from 'react';
import { Analytics, D3Graph, SnapSvg, ReactBootstrap, NotFound, MomentJs } from '../../components';

class Showcase extends Component {
    constructor() {
        super();
        this.state = {
            testLifeCycle: []
        }
        this.renderD3 = this._renderD3.bind(this);
        this.renderAnalytics = this._renderAnalytics.bind(this);
        this.renderReactBootstrap = this._renderReactBootstrap.bind(this);
        this.renderSnapSvg = this._renderSnapSvg.bind(this);
        this.renderMomentJs = this._renderMomentJs.bind(this);
    }

    componentDidMount() {
        this.setState({testLifeCycle: [0, 1, 2, 3, 4]})
    }

    _renderD3() {
      return ( <D3Graph /> )
    }
    _renderAnalytics() {
      return ( <Analytics /> )
    }
    _renderReactBootstrap() {
      return ( <ReactBootstrap /> )
    }
    _renderSnapSvg() {
      return ( <SnapSvg /> )
    }
    _renderMomentJs() {
      return( <MomentJs /> )
    }
    render() {
      const { match } = this.props;
      const { testLifeCycle } = this.state;

    //   switch(match) {
    //       case match.params.pathSlug === 'analytics':
    //       return this.renderAnalytics()

    //       case match.params.pathSlug === 'd3-js':
    //       return this.renderD3()
    //   }
      if(match.params.pathSlug === 'analytics') {
        return this.renderAnalytics();
      }
      else if(match.params.pathSlug === 'd3-js') { 
        return this.renderD3();
      }
      else if(match.params.pathSlug === 'react-bootstrap') {
        return this.renderReactBootstrap();
      }
      else if(match.params.pathSlug === 'snapsvg') {
        return this.renderSnapSvg();
      }
      else if(match.params.pathSlug === 'moment-js') {
        return this.renderMomentJs();
      }
      else {
        return ( <NotFound /> )
      }
        
    }
}

export default Showcase;
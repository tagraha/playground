import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import { NotFound } from '../../components';
import { MainContainer, Showcase } from '../../containers';
import { Menus } from '../../apidata/Menus';
// import { getRoutes } from '../../routes';

class App extends Component {
    constructor(){
        super();
        this.state = {
            listofMenu: []
        }
    }
    componentWillMount(){
        console.log('masuk ke CWM');
        if(Menus && Menus.length > 0) {
            this.setState({listofMenu: Menus});
        }
    }

    render(){
        const { listofMenu } = this.state;
        console.log('isi list of menu', listofMenu);
        return (
            <Switch>
              <Route exact path="/" component={MainContainer} />
              <Route path="/toys/:pathSlug" component={Showcase} />
              <Route component={NotFound} />
            </Switch>
        )
    }
}

export default App;

/* <Route exact path="/">
              <SideMenu>
                {listofMenu && listofMenu.length > 0 && listofMenu.map((menu, i) => {
                    return(
                      <Link key={i} to={`/toys/${menu.pathSlug}`}><li>{menu.name}</li></Link>
                    );
                    })
                }
              </SideMenu>
</Route> */
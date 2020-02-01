import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerHandler = () => {
        const show = this.state.showSideDrawer;
        this.setState({showSideDrawer: !show});
    }

    render(){
        return(
            <Aux>
                <Toolbar clicked={this.sideDrawerHandler}/>
                <SideDrawer show={this.state.showSideDrawer} clicked={this.sideDrawerHandler}/>
                <div>Toolbar, SideDrawer, Backdrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
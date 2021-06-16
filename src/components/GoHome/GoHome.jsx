import React, { Component } from 'react';
import { withRouter } from 'react-router';
import homeicon from '../../assets/home_white.png';
import blackHomeIcon from '../../assets/home_black.png';
import './GoHome.css';
// Programmatic navigation
class GoHome extends Component{
    navigationToHome = () =>{
        const { history } = this.props;
        history.push('/')
    }
    render(){
        const {location} = this.props;
        const whiteBtn = location.pathname === "/";

        return(
            <button onClick={this.navigationToHome} className={`go-home-btn ${whiteBtn ? `white-bkg` : `black-bkg`}`}>
                <img className="home-icon"
                src={ whiteBtn ? blackHomeIcon : homeicon } 
                alt="home-icon" />
            </button>
        );
        
    }
}

export default withRouter(GoHome);
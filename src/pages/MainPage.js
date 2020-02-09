import React, {Component} from "react";
import {Link} from "react-router-dom";

import logo from '../logo.svg'
class MainPage extends Component {


    render() {
        return (
            <React.Fragment>
               <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1>GSX React SSR</h1>
                        <p>
                        Add your page <code>routes/index.js</code> and save to reload.
                        </p>
                        <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Learn React
                        </a>
                    </header>
                    </div>


            </React.Fragment>
        )
    }
}



export default MainPage;

require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./assets/styles/app.css');

import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div className="container">
                <div className="jumbotron">
                    <h1>Hello Webpack!!</h1>
                    <p>Webpack boiler plate using proxies with webpack-dev-server</p>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <h3>Column 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>Column 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>Column 3</h3> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                </div>
            </div>
        );
    }
}

React.render(<App />, document.body);

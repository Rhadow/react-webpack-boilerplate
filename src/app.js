require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./assets/styles/app.scss');

import React from 'react';
import Modal from './components/Modal/Modal';

class App extends React.Component {
    render() {
        return (
        	<div className="container">
                <div className="jumbotron">
                    <div className="app-jumbotron-header-wrapper">
                        <h1 className="app-jumbotron-header">Hello Webpack!!</h1>
                        <p className="app-jumbotron-body">Webpack boiler plate using proxies with webpack-dev-server</p>
                    </div>
                    <div className="app-jumbotron-image"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <h3>Column 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        <span className="glyphicon glyphicon-tag"></span>
                        <span className="glyphicon glyphicon-screenshot"></span>
                        <span className="glyphicon glyphicon-thumbs-up"></span>
                    </div>
                    <div className="col-sm-4">
                        <h3>Column 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        <Modal />
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

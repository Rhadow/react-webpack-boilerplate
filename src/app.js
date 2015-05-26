require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./assets/styles/app.css');

import React from 'react';
import Profile from './components/Profile/Profile.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div>
                <h1>Hello Webpack!</h1>
                <Profile />
            </div>
        );
    }
}

React.render(<App />, document.body);

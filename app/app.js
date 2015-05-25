import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>Hello Webpack!</h1>
        );
    }
}

React.render(<App />, document.body);

import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    render() {
        return ( 
            <div>
                Hello, React! Asit das                
                
            </div>
        )
    }
};

ReactDOM.render( < HelloWorld / > , document.getElementById('root'));
 import React, { Component } from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';
 
 class App extends Component {
 
     render() {
         return (React.createElement("div",null,"Hello world!")
            
         );
     }
 }
 ReactDOM.render( <App/>,document.getElementById('app'))

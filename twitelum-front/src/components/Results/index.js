import React, { Component } from 'react';

class Results extends Component {
    
    render(){
        return (
            <div className="loginPage__errorBox"> { this.props.text } </div>
        );
    }
};

export default Results;
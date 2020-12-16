import React, { Component } from 'react';

class Image extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="App">
                <img src={this.props.src} alt="" />
            </div>
        );
    }
}

export default Image;

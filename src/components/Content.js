import React, { Component } from 'react';

export default class Content extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render () {
        return (
            <div className="right_content">
                <input />
                <button>点我</button>
            </div>
        )
    }
}
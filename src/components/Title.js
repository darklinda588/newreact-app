import React, { Component } from 'react';

export default class Title extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render () {
        return (
            <div>
                <div className="name">   
                    My Html
                </div>
                <div className="content">
                    内容<br />
                    没错我是内容<br />
                    这是我写的react+router+redux的页面<br />
                </div>
            </div>
        )
    }
}
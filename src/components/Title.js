import React, { Component } from 'react';

export default class Title extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render () {
        return (
            <div className="left_title">
                <ul>
                    {this.props.todos.map((todo, index) =>
                    <li key={index}>{todo.text}</li>
                    )}
                </ul>
            </div>
        )
    }
}
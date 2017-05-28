import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Content extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }
    render () {
        return (
            <div className="right_content">
                <input type='text' ref='input' />
                <button onClick={(e) => this.handleClick(e)}>
                    添加
                </button>
            </div>
        )
    }
}

Content.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
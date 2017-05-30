import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../store/actions/actions'

class Datalist extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()
        this.props.dispatch(addTodo(text))
        node.value = ''
    }
    render () {
        const { visibleTodos } = this.props
        return (
            <div>
                <input ref='input'/>
                <button onClick={(e) => this.handleClick(e)}>点点点</button>
                <ul>
                    {visibleTodos.map((li, index) => 
                        <li key={index}>{li.text}</li>
                    )}
                </ul>
            </div>
        )
    }
}

Datalist.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

function select(state) {
    console.log(state)
  return {
    visibleTodos: state.todos
  }
}

export default connect(select)(Datalist)
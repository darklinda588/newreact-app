import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../store/actions/actions'
import QueueAnim from 'rc-queue-anim'
import Title from '../components/Title'
import Content from '../components/Content'

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render () {
        const { dispatch } = this.props
        return (
            <div className="home" onClick={() => {
                dispatch(addTodo('111'))}}>
                <QueueAnim type="left">
                    <Title key="0"/>
                </QueueAnim>
                <QueueAnim type="right">
                    <Content key="0" />
                </QueueAnim>
            </div>
        )
    }
}

Home.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

function select(state) {
  return {
    visibleTodos: state.todos
  }
}

export default connect(select)(Home)
import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim'
import Title from '../components/Title'
import Content from '../components/Content'

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render () {
        return (
            <div className="home">
                <QueueAnim type="left" className="left">
                    <Title key="0"/>
                </QueueAnim>
                <QueueAnim type="right" className="right">
                    <Content key="0"/>
                </QueueAnim>
            </div>
        )
    }
}
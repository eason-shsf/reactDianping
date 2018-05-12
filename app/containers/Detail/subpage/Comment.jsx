import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import CommentList from '../../../components/CommentList'
import {getCommentData} from '../../../fetch/detail/detail'

import './style.less'

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        getCommentData(1, 1).then(res => {
            return res.json()
        }).then(res => {
            this.setState({
                data: res.data,
                hasMore: res.hasMore
            })
        })
    }

    render() {
        return (
                <CommentList data={this.state.data} />
        )
    }
}

module.exports = Comment
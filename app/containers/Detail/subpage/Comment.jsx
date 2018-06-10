import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import CommentList from '../../../components/CommentList'
import {getCommentData} from '../../../fetch/detail/detail'

import './style.less'
import LoadMore from '../../../components/LoadMore';

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            page: 1,
            data: []
        }
    }

    componentDidMount() {
        this.getCommentDataAction();
    }

    render() {
        return (
            <div>
                <CommentList data={this.state.data} />
                <LoadMore loadMoreFn={this.loadMoreFn.bind(this)} />
            </div>
        )
    }

    getCommentDataAction() {
        var page = this.state.page;
        const id = this.props.id;
        const that = this;
        getCommentData(page, id).then(res => {
            return res.json()
        }).then(res => {
            that.setState({
                data: that.state.data.concat(res.data),
                hasMore: res.hasMore,
                page: page+1
            })
        })
    }
    loadMoreFn() {
        this.getCommentDataAction();
    }
}

module.exports = Comment
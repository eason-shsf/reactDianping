import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import CommentItem from './CommentItem'

import './style.less'

class CommentList extends React.Component {
    constructor(props, context) {
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const items = this.props.data

        return (
            <div className="comment-list">
                {
                    items.map((item,index) => {
                        return <CommentItem key={index} data={item}/>
                    })
                }
            </div>
        )
    }
}

export default CommentList
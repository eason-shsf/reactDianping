import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate

    }

    render() {
        return (
            <div className="load-more">
                {
                    this.props.isLoadingMore ?
                    <span>loading .....</span>
                    : <span onClick={this.loadMoreHandler.bind(this)}>load more</span>
                }
            </div>
        )
    }

    loadMoreHandler() {
        this.props.loadMoreFn();
    }
}

export default LoadMore
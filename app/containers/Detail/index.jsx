import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Comment from './subpage/Comment'
import Info from './subpage/Info'
import BuyStore from './subpage/BuyStore'
import Header from '../../components/Header'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const id = this.props.params.id
        return (
            <div>
                <Header title="商户详情" clickHandler={this.clickHandler.bind(this)}/>
                <Info />
                <BuyStore id={id}/>
                <Comment />
            </div>
        )
    }

    clickHandler() {
        this.props.history.goBack()
    }

}

module.exports = Detail
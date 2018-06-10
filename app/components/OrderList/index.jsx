import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Item from './Item'

import './style.less'

class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <div>您的订单</div>
                {
                    this.props.data.map((item, index) => {
                        return <Item data={item} key={index}/>
                    })
                }
            </div>
        )
    }
}

export default OrderList
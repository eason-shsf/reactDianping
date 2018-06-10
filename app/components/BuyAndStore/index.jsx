import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class BuyAndStore extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        
        return (
            <div>
                <div>
                    {
                        this.props.isStore ? <button onClick={this.storeClickHandler.bind(this)}>已收藏</button>
                        : <button onClick={this.storeClickHandler.bind(this)}>收藏</button>
                    }
                    </div>
                <div>
                    <button onClick={this.buyClickHandler.bind(this)} >购买</button>
                </div>
            </div>
        )
    }

    storeClickHandler() {
        this.props.storeClickHandler();
    }

    buyClickHandler() {
        this.props.buyClickHandler();
    }

}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default NotFound
module.exports = BuyAndStore
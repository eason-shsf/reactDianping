import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Header extends Component {
    constructor(props) {
        super(props);
        this.shouldComonentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

    }

    render() {
        return (
            <div id="common-header">
                <span className="back-icon" 
                 onClick={this.clickHandler.bind(this)}>
                    <i className="icon-chevron-left"></i>
                 </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }

    clickHandler() {
        this.props.clickHandler();
    }
}

export default Header;
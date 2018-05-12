import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: this.props.defaultV
        }
    }
    render() {
        return (
            <input className="search-input"
             type="text" 
             placeholder="please input content2"
             value = {this.state.value} 
             onChange={this.changeHandler.bind(this)}
             onKeyUp={this.keyupHandler.bind(this)}
            />
        )
    }

    changeHandler(e) {
        this.setState({
            value: e.target.value
        })
    }

    keyupHandler(e) {
        if(e.keyCode != 13) {
            return;
        }
        this.props.confirmInputHandler(this.state.value);
    }
}

export default SearchInput
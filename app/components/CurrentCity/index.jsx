import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class CurrentCity extends Component {
    constructor(props) {
        super(props);
        this.shouldComonentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div className="city-display">
                {this.props.currentCity}
            </div>
        )
    }

}

export default CurrentCity;
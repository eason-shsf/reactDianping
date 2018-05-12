import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import DetailInfo from '../../../components/DetailInfo'
import {getInfoData} from '../../../fetch/detail/detail'

import './style.less'

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        getInfoData(1).then(res => {
            return res.json()
        }).then(res => {
            this.setState({
                data: res
            })
        })
    }

    render() {
        return (
                <DetailInfo data={this.state.data} />
        )
    }
}

module.exports = Info
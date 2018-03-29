import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import LocalStore from '../util/localStore.js'
import { CITYNAME } from '../config/localStoreKey.js'

import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo.js'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }

    render() {
        return (
            <div>
                {this.state.initDone ?
                this.props.children : <div>loading...</div>}
            </div>
        )
    }

    componentDidMount() {
        let cityName = LocalStore.getItem(CITYNAME)
        if(cityName == null) {
            cityName= '北京'
        }
        // store city info to redux
        this.props.userInfoActions.update({
            cityName: cityName
        })
        
        this.setState({
            initDone: true
        })
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
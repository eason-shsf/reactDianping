import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect } from 'react-redux'
import {bindActionCreators } from 'redux'

import './style.less'
import '../../components/Header'
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import localStore from '../../util/localStore'
import { CITYNAME } from '../../config/localStorekey'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <Header title="选择城市" clickHandler={this.returnHome.bind(this)}/>
                <CurrentCity currentCity={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCityHandler.bind(this)}/>
                <h1>city</h1>
            </div>
        )
    }

    returnHome() {
        window.history.back();
    }

    changeCityHandler(city) {
        this.props.userInfoActions.update({
            cityName: city
        });
        localStore.setItem(CITYNAME, city)
        this.props.history.push('/')
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
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
)(City)

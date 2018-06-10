import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import * as actions from '../../../actions/store'
import BuyAndStore from '../../../components/BuyAndStore'
import LoadMore from '../../../components/LoadMore';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {hashHistory} from 'react-router'

import './style.less'

class BuyStore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }

    componentDidMount() {
        this.checkStoreState();
    }

    render() {
        return (
                <BuyAndStore isStore={this.state.isStore} 
                    buyClickHandler={this.buyHandler.bind(this)} 
                    storeClickHandler={this.storeHandler.bind(this)} />
        )
    }

    checkStoreState() {
        let that = this;
        const id = that.props.id;
        that.props.store.some(function(item) {
            if(item === id) {
                that.setState({
                    isStore: true
                });
                return true; 
            }
        });
    }

    checkLoginState() {
        if(this.props.userinfo && this.props.userinfo.username) {
            return true;
        } else {
            hashHistory.push('/login/' + encodeURIComponent('/detail/' + this.props.id))
            return false;
        }
    }

    buyHandler() {
        if(!this.checkLoginState()) {
            return ;
        }
        hashHistory.push('/User');
    }

    storeHandler() {
        if(!this.checkLoginState()) {
            return;
        }
    
        if(this.state.isStore) {
            this.props.storeActions.removeRM(this.props.id)
        } else {
            this.props.storeActions.add(this.props.id);
        }
        this.setState({
            isStore: !this.state.isStore
        })
    }

}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BuyStore)
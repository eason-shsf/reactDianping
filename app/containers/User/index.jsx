
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderList from '../../components/OrderList'

import './style.less'
import {getOrderList} from '../../fetch/orderlist/orderlist'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [1,3]
        }
    }
    render() {
        return (
            <div>
                <Header title="用户中心" clickHandler={this.clickHandler.bind(this)}/>
                <UserInfo className="order-list-container" username={this.props.userinfo.username} city={this.props.userinfo.cityName}/>
                <OrderList data={this.state.data} />
            </div>
        )
    }

    clickHandler() {
        this.props.history.goBack();
    }
    componentDidMount() {
        let username = this.props.userinfo.username
        if(!username) {
            this.props.history.push('login');
            return;
        }
        let result = getOrderList();
        if(result) {
            result.then((res) => {
                return res.json()
            }).then((json) => {
                this.setState({
                    data: json
                })
            })
        }
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default Search
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
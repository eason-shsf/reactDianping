import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {getListData } from '../../../fetch/home/home.js'
import './style.less'
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            hasMore: false,
            data: [],
            isLoadingMore: false,
            page: 1
        }
    }

    render() {
        return (
            <div>
                <h2>猜你喜欢</h2>
                <div>
                    <ListComponent data={this.state.data}/>
                </div>
                {
                    this.state.hasMore ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : <div></div>
                }
            </div>
        )
    }
    componentDidMount() {
        this.loadFirstPageData()
    }

    loadFirstPageData() {
        const cityName = this.props.cityName
        var result = getListData(cityName, 0)
        this.resultHandle(result)
    }

    resultHandle(result) {
        result.then((res) => {
            return res.json()
        }).then((json) => {
            const hasMore = json.hasMore
            this.setState({
                hasMore: json.hasMore,
                data: this.state.data.concat(json.data)
            })
        })
    }

    loadMoreData() {
        this.setState({
            isLoadingMore: true
        });
        const cityName = this.props.cityName;
        const page = this.state.page
        const result = getListData(cityName, this.state.page)


        this.resultHandle(result)

        this.setState({
            page: page+1,
            isLoadingMore: false
        })
    }
}

export default List;
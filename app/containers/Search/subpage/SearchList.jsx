import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {getSearchData } from '../../../fetch/search/search.js'

import List from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.initialState = {
            hasMore: false,
            data: [],
            isLoadingMore: false,
            page: 1,
            searchPath: ''
        }
        this.state = this.initialState
        
    }

    render() {
        return (
            <div>
                <h2>猜你喜欢</h2>
                <div>
                    <List data={this.state.data}/>
                </div>
                {
                    this.state.hasMore ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : <div></div>
                }
            </div>
        )
    }
    componentDidMount() {
        this.onSearchHappen();
    }
    componentDidUpdate(prevProps, prevState) {
        const keyword = this.props.params.keyword
        const category = this.props.params.category
        if(keyword === prevProps.params.keyword && category === prevProps.params.category) {
            return;
        }
        this.setState(this.initialState);
        this.onSearchHappen();
    }

    onSearchHappen() {
        var searchPath = '/' + this.props.params.type + '/' + this.props.params.keyword;
        this.setState({
            searchPath: searchPath
        })
        this.loadFirstPageData(searchPath)
    }

    loadFirstPageData(searchPath) {
        const cityName = this.props.cityName
        var result = getSearchData(cityName, 0, searchPath)
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
        const result = getSearchData(cityName, this.state.page, this.state.searchPath)


        this.resultHandle(result)

        this.setState({
            page: page+1,
            isLoadingMore: false
        })
    }
}

export default SearchList;
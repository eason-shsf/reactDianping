import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'
import './style.less'
import SearchInput from '../SearchInput'

class SearchHeader extends React.Component  {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div id="home-header" className="clear-fix">

                    <div className="home-header-left float-left" onClick={this.onBackButtonHandler.bind(this)}>
                        <i className="icon-chevron-left"></i>
                    </div>
                <div className="home-header-middle">
                <div className="search-container">
                    <i className="icon-search"></i>
                    <SearchInput defaultV="" confirmInputHandler={this.confirmInputHandler.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }

    onBackButtonHandler() {
        this.props.history.goBack();
    }

    confirmInputHandler(value) {
        this.props.history.push('/search/all/' + encodeURIComponent(value));
    }
}

export default SearchHeader
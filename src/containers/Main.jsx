
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import VendorTable from '../components/VendorTable'
import SortPanel from '../components/SortPanel';
import * as actions from '../actions/actions';

export const AllTablesDiv = styled.div`
    padding-top: 100px;
`;

class Main extends Component {

    constructor(props) {
        super(props);
        this.handleSortItems = this.handleSortItems.bind(this);
    }

    handleSortItems(results, sortKey, sortOrder) {
        this.props.dispatch(actions.sortItems(results, sortKey, sortOrder));
    }

    componentDidMount() {
        this.props.dispatch(actions.fetchData());
    }

    render() {
        const { error, loading, results } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <AllTablesDiv>
                <SortPanel
                    vendors={results}
                    onSortItems={this.handleSortItems}
                />

                <VendorTable
                    vendors={results}
                    onSave={this.handleSaveItems}
                />

            </AllTablesDiv>
        )
    }
}


const mapStateToProps = state => ({
    results: state.data.results,
    loading: state.data.loading,
    error: state.data.error,
})


export default connect(mapStateToProps)(Main);

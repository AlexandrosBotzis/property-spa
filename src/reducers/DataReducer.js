import _ from 'lodash';
import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    SORT_ITEMS,
    EDIT_PRICE,
} from '../actions/constants';

const initialState = {
    results: [],
    loading: false,
    error: null,
};

let groupByVendor = arr => arr && _.groupBy(arr, 'vendor_verbose.id');

let sortBy = (results, key, sortOrder) => {

    let sortedResults = Object.values(results)
        .map(item => item.sort((a, b) => {
            a[key] = typeof a[key] === String ? a[key].toLowerCase() : a[key];
            b[key] = typeof b[key] === String ? b[key].toLowerCase() : b[key];

            if (sortOrder === 'ASC') {
                if (a[key] < b[key])
                    return -1;
                if (a[key] > b[key])
                    return 1;
                return 0;
            }
            else {
                if (a[key] < b[key])
                    return 1;
                if (a[key] > b[key])
                    return -1;
                return 0;
            }
        })
        );
    return sortedResults;
}


const fetchDataReducer = (state = initialState, action) => {
    console.log('action', action)
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                loading: true,
                error: null,
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                results: groupByVendor(action.payload.results),
            }

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                results: [],
            }

        case SORT_ITEMS:
            return {
                ...state,
                results: sortBy(action.payload.results, action.payload.sortKey, action.payload.sortOrder),
            };

        case EDIT_PRICE:
            return {
                ...state,
                value: action.value,
            };

        default:
            return state;
    }
}

export default fetchDataReducer;

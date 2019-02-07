import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    SORT_ITEMS,
    EDIT_PRICE,
} from './constants';

export const fetchData = () => {
    return dispatch => {
        dispatch(fetchDataStart());
        
        return fetch('http://localhost:1337/houses')
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchDataSuccess(json.results));
                return json.results;
            }).catch( error => {
                dispatch(fetchDataFailure(error))
            });
    };
};

const handleErrors = response => {
    if(!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

export const fetchDataStart = () => ({
    type: FETCH_DATA_START,
});

export const fetchDataSuccess = results => ({
    type: FETCH_DATA_SUCCESS,
    payload: { results },
});

export const fetchDataFailure = error => ({
    type: FETCH_DATA_FAILURE,
    payload: { error },
});

export const sortItems = (results, sortKey, sortOrder) => ({
    type: SORT_ITEMS,
    payload: { results, sortKey, sortOrder },
});

export const editPrice = (id, value) => ({
    type: EDIT_PRICE,
    id,
    value,
});
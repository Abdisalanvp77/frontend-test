import {GET_PAGES} from '../actions/types';
import _ from 'lodash';
export default (state = {}, action) => {
    switch (action.type) {
        case GET_PAGES:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
}
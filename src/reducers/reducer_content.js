/**
 * Created by Bien on 2017-06-11.
 */
import { SET_FILTER, TOGGLE_GREEN, TOGGLE_RED } from '../actions/changeContent';

const initialState = {
    type: null,
    text: null
}

export default function(state = initialState, action) {
    // if(typeof state === 'undefined') {
    //     return initialState
    // }

    switch(action.type) {
        case TOGGLE_RED:
            console.log('reducer fired', SET_FILTER.RED);

            return Object.assign({}, state, {
                type: action.type,
                text: action.text
            });
        case TOGGLE_GREEN:
            console.log('reducer fired', SET_FILTER.GREEN);

            return Object.assign({}, state, {
                type: action.type,
                text: action.text
            });
        default:
            return state
    }

}

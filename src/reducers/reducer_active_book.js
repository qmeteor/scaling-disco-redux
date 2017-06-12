/**
 * Created by Bien on 2017-06-10.
 */
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}
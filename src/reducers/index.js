import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import Content from './reducer_content';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook,
    content: Content
});

export default rootReducer;

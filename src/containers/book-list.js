/**
 * Created by Bien on 2017-06-10.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        let style = {
            color: 'red'
        };
        let style2 = {
            color: 'red'
        };


        return this.props.data.map((book) => {
            if(!this.props.book) {
                return (
                    <li
                        key={book.title}
                        onClick={() => this.props.selectBook(book)}
                        className="list-group-item">
                        {book.title}
                    </li>
                );
            }
            if (this.props.book.title === 'Eloquent Ruby') {

                return (
                    <li
                        key={book.title}
                        onClick={() => this.props.selectBook(book)}
                        className="list-group-item">
                        {book.title}
                    </li>
                );
            } else {
                return (
                    <li
                        key={book.title}
                        onClick={() => this.props.selectBook(book)}
                        className="list-group-item">
                        {book.title}
                    </li>
                );
            }
        });
    }

    render() {
        if(!this.props.book) {
            return (
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
            )
        } else if (this.props.book.title === 'Eloquent Ruby') {
            return (
                <ul className="list-group active col-sm-4">
                    {this.renderList()}
                </ul>
            )
        } else {
            return (
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        data: state.books,
        book: state.activeBook
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook }, dispatch) // flows actions to reducers in application
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
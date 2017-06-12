import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import Header from '../containers/header';
import Content from '../containers/content';

export default class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Content/>
        </div>
    );
  }
}

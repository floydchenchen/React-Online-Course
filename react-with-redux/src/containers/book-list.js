import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// this class is not exported as default anymore since it uses redux
class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}
                    // call the bind action creator
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">

                    {book.title}

                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// take application state as an argument (that contains a book list and an active book)
// connection between state(redux) and our component(container)
// get books
function mapStateToProps(state) {
    // whatever is returned will show up as props inside of bookList
    return {
        books: state.books
    };
}

// whenever selectBook is called, the result should be passed to all our reducers
// anything returned from this function will end up as props for the booklist container
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect takes a function and a component and produces a container
// promote booklist from a component to a container: it needs to know about this new dispatch method, selectBook.
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
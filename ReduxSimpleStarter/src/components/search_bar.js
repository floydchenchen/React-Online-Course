import React, {Component} from 'react';

/* functional component */
// const SearchBar = () => {
//     return <input />;
// };

/* class component */
class SearchBar extends Component{

    constructor(props) {
        super(props);

        this.state = { term: ''}
    }

    render() {
        return (
            <div className="search-bar input-group">
                <input
                    // the value of the input equals the state
                    value = {this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)}
                />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
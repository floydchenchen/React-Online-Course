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
            <div>
                <input
                    // the value of the input equals the state
                    value = {this.state.term}
                    onChange={(event) => this.setState({ term: event.target.value })}
                />
            </div>
        )
    }
}

export default SearchBar;
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDd7g6xFn_OPJn0fP50gJM3aMHa5HnwV2o';

// create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take this component's generated HTML and put it on the page (in the DOM)
/**
 * error message: ReactDOM.render(): Invalid component element.
 * Instead of passing a component class, make sure to instantiate it by passing it to React.createElement.
 **/
// ReactDOM.render(App);


// self-closing tag: when we have nothing inside of it, e.g., <App />
ReactDOM.render(<App />, document.querySelector('.container'));


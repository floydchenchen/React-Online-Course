import React, { Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDd7g6xFn_OPJn0fP50gJM3aMHa5HnwV2o';

// create a new component. This component should produce some HTML
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo : null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            // if key and value have the same variable name (videos in this case)
            // the above sentence could be written as 'this.setState({ videos });'
        });
    }


    render() {

        // returns a new function that can only be called every 300 milliseconds
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={ this.state.selectedVideo } />
                {/*passing props from videos to VideoList*/}
                <VideoList
                    onVideoSelect = { selectedVideo => this.setState({ selectedVideo })}
                    videos = { this.state.videos }
                />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
/**
 * error message: ReactDOM.render(): Invalid component element.
 * Instead of passing a component class, make sure to instantiate it by passing it to React.createElement.
 **/
// ReactDOM.render(App);


// self-closing tag: when we have nothing inside of it, e.g., <App />
ReactDOM.render(<App />, document.querySelector('.container'));


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        // The constructor is the right place to initialize state. To do so, just assign an object to this.state
        this.state = { term: '' };

        // SearchBar has a method called onInputChange, and replace onInputChange with this bound instance(SearchBar) of this function
        // 在onInputChange里调用了this SearchBar，让this指向SearcBar而不是onInputChange
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        // console.log(event.target.value);
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event) {
        // preventDefault() 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）
        event.preventDefault();

        // we need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        // clear off the search input
        this.setState({term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

// hook up action creator (fetchWeather) to search bar container
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// 第一个argument是null: doesn't care about state at all
export default connect(null, mapDispatchToProps)(SearchBar);
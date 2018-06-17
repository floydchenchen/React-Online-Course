# Section 5: Intermediate Redux: Middleware

## App Overview and Planning
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-04-19%20at%205.25.59%20PM.png?token=AX_3vn_Tt3RdPfNV_iyy7ux70_nQM2hNks5a4lnRwA%3D%3D)

* weather forecast browser
* challenges:
    * AJAX requests with redux

## Component Setup
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-04-19%20at%2011.42.28%20PM.png?token=AX_3vibUAig1ZDugCG6v4algF30sMksNks5a4qsCwA%3D%3D)

## Controlled Component and Binding Context
* controlled field: a form element where **the value of the input is set by the state of the component**, not the other way around
* 关于binding context看下面代码的备注

###### search_bar.js

```JavaScript
import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        // The constructor is the right place to initialize state. To do so, just assign an object to this.state
        this.state = { term: '' };

        // SearchBar has a method called onInputChange, and replace onInputChange with this bound instance(SearchBar) of this function
        // 在onInputChange里调用了this SearchBar，让this指向SearcBar而不是onInputChange
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        // console.log(event.target.value);
        this.setState({ term: event.target.value })
    }

    render() {
        return (
            <form className="input-group">
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
```

## Form Elements in React
###### search_bar.js
```JavaScript
onFormSubmit(event) {
        // preventDefault() 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）
        event.preventDefault();

        // we need to go and fetch weather data
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
```

## Introduction to Middleware
* middleware is a function that takes an action and depending on the action's type, payload and other information, it can manipulate the action.
* can be think of as gatekeepers.
* a way to intercept/modify actions.


### redux-promise
* a popular NPM middleware package for redux
* The default export is a middleware function. If it receives a promise, it will **dispatch the resolved value of the promise**. It will not dispatch anything if the promise rejects.
* If it receives an Flux Standard Action whose payload is a promise, it will either
    * **dispatch a copy of the action with the resolved value of the promise**, and set status to success.
    * dispatch a copy of the action with the rejected value of the promise, and set status to error.

#### `Promise`
* As defined by the Mozilla, **a Promise object is used for handling asynchronous computations which has some important guarantees** that are difficult to handle with the callback method (the more old-school method of handling asynchronous code).
* A Promise object is simply a **wrapper around a value that may or may not be known when the object is instantiated and provides a method for handling the value after it is known** (also known as resolved) or is unavailable for a failure reason (we'll refer to this as rejected).
* Using a Promise object gives us the **opportunity to associate functionality for an asynchronous operation's eventual success or failure** (for whatever reason). It also allows us to treat these complex scenarios by using synchronous-like code.
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-06-06%20at%202.26.51%20PM.png)
######src/index.js
```JavaScript
import ReduxPromise from 'redux-promise';
...
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
```

## AJAX Requests with Axios
* axios: a library made for making AJAX requests from the browser; very similar to JQuery

```JavaScript
import axios from 'axios';

const API_KEY = '6c17dc4956c5e7e0d6116f7692884099';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FEATCH_WEATHER = 'FEATCH_WEATHER';

// action creator
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FEATCH_WEATHER,
        payload: request
    };
}
```

## Avoiding State Mutation in Reducers
* 不要改变state，而是要return一个新的state

###### reducers/reducer_weather.js

```JavaScript
import { FEATCH_WEATHER } from "../actions";

export default function(state = null, action) {
    // console.log("Action Received", action);
    switch (action.type) {
        case FEATCH_WEATHER:
            // we are mutating state directly, which is wrong
            // we don't mutate the state, we return a completely new state
            // return state.push(action.payload.data);

            // a better approach
            // return state.concat([action.payload.data]);
            // an even better approach using ES6 syntax
            return [ action.payload.data, ...state ];
    }

    return state;
}
```

## Adding Sparkline Charts (react-sparkline)
[react-sparkline](https://github.com/borisyankov/react-sparklines)


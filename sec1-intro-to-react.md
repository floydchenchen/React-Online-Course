# Section 1: Introduction to React
## Introduction
* Get a boilerplate project
* Gain familiarity with React
* Learn about general data modeling
* Delve into Redux

## How to get help
* email: ste.grider@gmail.com
* twitter: @sg_in_sf
* github: /stephengrider

## Tooling Process
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-03-30%20at%2012.24.03%20PM.png)

## JSX
```JavaScript
const element = <h1>Hello, world!</h1>;
```

* This funny tag syntax is neither a string nor HTML.
* It is called JSX, and it is a syntax extension to JavaScript.

### component / view
* definition: snippets of code that produce HTML

### why are we using JSX?
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-04-10%20at%207.29.23%20PM.png)

### project demo
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-04-10%20at%209.02.31%20PM.png)

components:

![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-04-12%20at%206.37.48%20PM.png)

* rule: we always make one component per file

## ReactDOM vs React
* React and ReactDOM are two separate libraries.
* ReactDOM is the glue between React and the DOM
* Often, you will only use it for one single thing: mounting with `ReactDOM.render()`
* Another useful feature of ReactDOM is `ReactDOM.findDOMNode()` which you can use to gain direct access to a DOM element.

## component class vs component instance

```JavaScript
// this is a component class
const App = function() {
    return <div>Hi!</div>;
}
```

```JavaScript
// a component instance of “App” 
ReactDOM.render(<App />);
```

## render targets
```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML
const App = function() {
    return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page in the DOM (inside the div whose class is "container")
ReactDOM.render(<App />, document.querySelector('.container'));
```

## component structure
* functional component: create a component with a function

```JavaScript
return (
    <div>
        <SearchBar />
    </div>
);
```

* class component: **internal record-keeping** feature

```
class SearchBar extends Component{
    render() {
        return <input />;
    }
}
```

## Handling User Events
two steps to handling user events:

* declare a event handler
* pass the event handler to the element that we want to monitor for events
 
```JavaScript
 /* class component */
render() {
        return <input onChange={(event) => console.log(event.target.value)}/>;
    }
```
 
## Introduction to State
* state is a plain JavaScript object that is used to **record and react to user events**.
* each **class based component** (not functional component) defined has its own state object
* when ever the state is changed, the component (with all its children) immediately re-renders

```JavaScript
/* class component */
class SearchBar extends Component{

    constructor(props) {
        super(props);

        this.state = { term: ''}
    }

    render() {
        return (
            <div>
                <input onChange={(event) => this.setState({ term: event.target.value })} />
                Value of the input: { this.state.term }
            </div>
        )
    }
}
```
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-04-13%20at%205.37.29%20AM.png)

## controlled components

**The state should tell the input what its value should be**

```JavaScript
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
```

* When the user type something, they **don't really change the input value**, instead they **trigger an user event** that 1. changes the state 2. which causes the value of the input to change.



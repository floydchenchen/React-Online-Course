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

## class-based components
* functional component: create a component with a function

```JavaScript
return (
    <div>
        <SearchBar />
    </div>
);
```

* class component: internal record-keeping feature

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

* When the user type something, they **don't really change the input value**, instead they **trigger an user event** that causes the value of the input to change.



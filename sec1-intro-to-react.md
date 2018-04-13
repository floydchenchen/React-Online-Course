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
 



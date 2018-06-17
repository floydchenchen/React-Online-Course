# Rethink Web App Development at Facebook

# Flux
## increase predictability
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-04-20%20at%202.24.53%20PM.png)

### traditional MVC (model-view-controller)
#### mvc for small app
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-04-20%20at%202.31.29%20PM.png)

#### mvc for large app
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-04-20%20at%202.33.18%20PM.png)

### FLUX (single-directional data flow)
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-04-20%20at%204.07.27%20PM.png)

### Move External Control to Internal Control
##### external control: data and logic is separated
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-04-20%20at%203.36.41%20PM.png)

##### internal control: data right next to logic
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-04-20%20at%203.39.13%20PM.png)

* Use explicit data instead of derived data
* Separate data from view state
* Avoid cascading effects by preventing nested updates


## Impacts
* Improved data consistency
* Easier to pinpoint root of a bug
* More meaningful unit tests

# React
## re-rendering instead of appending
* When data changes, React re-render the component
* Referentially transparent functions
    * Describe UI at any point in time
    * Trivial to predict for a given output
    * Easy to test

## Stateful Browser DOM
### Virtual DOM
* React builds a new virtual DOM subtree
    * diffs it with the old one
    * computes the minimal set of DOM mutations and puts them in a queue
    * and batch executes all updates
    
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-04-20%20at%204.13.09%20PM.png)

![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-04-20%20at%204.14.05%20PM.png)


# Section 6: More On React
## 1. Basics of Redux Thunk
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-06-15%20at%2010.17.56%20PM.png)
the above cycle is good for synchronous channels.

### handling asynchronous action creators and make asynchronous requests
* redux thunk gives us direct control over the dispatch method.
* dispatch method is handling everything in the "middleware -> reducers -> state" corner.
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-06-15%20at%2010.24.03%20PM.png)

```JavaScript
export function fetchUsers() {
    const request = axiom.get(...);
    
    return (dispatch) => {
        request.then({data} => {
            dispatch({type: 'FETCH_PROFILES', payload: data})
        });
    };
}
```

* Usually this fetchUsers function returns a plain JavaScript object, but redux thunk could **return a function**.

![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-06-15%20at%2010.31.48%20PM.png)

## 2. Connecting Redux to Firebase
* react-fire library: directly inject data into your components.

![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-06-15%20at%2010.36.30%20PM.png)

* in the bad flow, data flows directly from Firebase to ReactFire to React, without Redux knowing the current data inside the application is.
* good flow: redux is acting as a intermediary between React and Firebase 


### redux vs firebase API
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-06-15%20at%2010.41.48%20PM.png)

### how to make redux and firebase work together
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-06-15%20at%2010.43.00%20PM.png)

```JavaScript
import Firebase from 'firebase';
...
const Posts = new Firebase('https://fbredux.firebaseio.com/');

export function fetchPosts() {
    return dispatch => {
        Posts.on('value', snapshot => {
            dispatch({
                type: FETCH_POSTS,
                payload: snapshot.val()
            });
        });
    }
}

export function detelePost(key) {
    return dispatch => {
        Posts.child(key).remove();
    }
}

export function createPost(post) {
    return dispatch => Posts.push(post); // push to database
}
```

## 3. Dynamic Forms with Redux Form
* 利用React的Component的灵活性，来减少很多代码量 ==> reusable code


```JavaScript

// const FIELDS = ['title', 'categories', 'content'];
const FIELDS = {
    title: {
        type: 'input',
        label: 'Title for Post'
    },
    categories: {
        type: 'input',
        label: 'Enter some categories for this post'
    },
    content: {
        type: 'textarea',
        label: 'Post Contents'
    }
}

// validate function
function validate(values) {
    const error = {};
    _.each(FIELDS, (type, field) => {
        if (!values[field]) {
            errors[field] = `Enter a ${field}`;
        }
    })
}

// helper render method
renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];
    return (
        <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
            <label>{fieldConfig}</label>
            <fieldConfig.type type="text" className="form-control" {...fieldHelper}/>
            <div className="text-help">
                {fieldHelper.touched ? fieldHelper.error : ''}
            </div>
        </div>
    )
}

// render function
render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return (
        <form onSubmit={handleSubmit(props => this.onSubmit(proprs))} >
            <h3>Create a New Post</h3>
            {_.map(FIELDS, this.renderField.bind(this))}
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    );
}

export default reduxForm({
    form: 'PostsNew',
    fields: _.keys(FIELDS),
    validate
})(PostsNew);
```

## 4. Logicless Components with Reselect
###goal:
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-06-16%20at%208.34.50%20AM.png)
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-06-16%20at%208.36.27%20AM.png)

### bad approach
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-06-17%20at%208.21.01%20AM.png)

### good approach
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-06-17%20at%208.24.18%20AM.png)
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-06-17%20at%208.25.15%20AM.png)
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-06-17%20at%208.30.22%20AM.png)

###### selected_posts_list.js
```JavaScript 
import SelectedPostsSelector from 'selectors/selected_posts';

const SelectedPostsList = (props) => {
    return (
        <ul className="list-group">
            {
                props.posts.map(post => {
                    return <li className="list-grou-item" key={post.id}>{post.title}</li>
                })
            }
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        posts: SelectedPostsSelector(state)
    };
}

export default connect(mapStateToProps)(SelectedPostsList);
```

## 5. Data Loading Methods with Redux

![Browser-Redux/React App & Server]()

## 6. Animation of React Components
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-06-17%20at%208.50.19%20AM.png)

## The best way to store Redux data

##### "Post" Model

```JavaScript
post = {
    id: 23,
    title 'Learn 3 New Things',
    body: 'the body'
}
```
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-06-17%20at%208.55.55%20AM.png)
![](https://raw.githubusercontent.com/floydchenchen/pictures/master/Screen%20Shot%202018-06-17%20at%208.56.03%20AM.png)

使用Object-Based Storage的好处：相当于利用的map的好处,O(1) fetch/update/delete

## 7. Four most common errors with React and Redux

### 1. `Warning: React.createElement: type should not be null, undefined, boolean or number. It should be a string or a ReactClass`

* check `import` and `export` statements

### 2. import的时候没有加Curly braces，这样会造成这个import的variable undefined

### 3. `Uncaught (in promise) TypeError`
Something is wrong inside the promise

## 8. Modals in React and Redux App

## 9. Deployment of react/Webpack Apps

## 10. BrowserHistory in Production

## 11. React Integration with 3rd Party Libraries

## 12. JSPlagrounds for Rapid Prototyping



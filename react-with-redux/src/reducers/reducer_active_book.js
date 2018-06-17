// state argument is not application state, but only the state this reducer is responsible for
export default function (state = null, action) { // an ES6 syntax: when the argument coming in is undefined, set it to null
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        // default:
        //     return state;
    }
    return state;
}
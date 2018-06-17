import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    // console.log("Action Received", action);
    switch (action.type) {
        case FETCH_WEATHER:
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
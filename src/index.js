import store from './store';
// import * as actions from './actionTypes'
import { bugAdded } from './actions';

//To unsubscribe the change listener, invoke the function returned by subscribe.
const unsubscribe = store.subscribe(() => { //Rerender for UI if it has changed 
    console.log("Store changed!", store.getState())
})

store.dispatch(bugAdded("Bug1"));

// unsubscribe(); // we are not gonna get subscribtion

// store.dispatch({
//     type : actions.BUG_REMOVED,
//     payload : {
//         id:1
//     }
// });

console.log(store.getState());
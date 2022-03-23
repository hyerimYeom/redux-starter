import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions'; 
//To unsubscribe the change listener, invoke the function returned by subscribe.
const unsubscribe = store.subscribe(() => { //Rerender for UI if it has changed
})

unsubscribe(); // we are not gonna get subscribtion

store.dispatch(bugAdded('bug1'));
store.dispatch(bugResolved(1));

console.log(store.getState());
console.log(store);
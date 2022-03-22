import store from './store';


//To unsubscribe the change listener, invoke the function returned by subscribe.
const unsubscribe = store.subscribe(() => { //Rerender for UI if it has changed 
    console.log("Store changed!", store.getState())
})

store.dispatch({
    type : "bugAdded",
    payload : {
        discribtion :"Bug1"
    }
});

// unsubscribe(); // we are not gonna get subscribtion

store.dispatch({
    type : "bugRemoved",
    payload : {
        id:1
    }
});

console.log(store.getState());
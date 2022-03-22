import store from './store';

store.dispatch({
    type : "bugAdded",
    payload : {
        discribtion :"Bug1"
    }
});

store.dispatch({
    type : "bugRemoved",
    payload : {
        id:1
    }
});

console.log(store.getState());
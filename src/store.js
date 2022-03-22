import {createStore} from 'redux/store';
import reducer from './reducer'; //Okay without using Curl bracket export default

const store = createStore(reducer); //just passing function reference

export default store;


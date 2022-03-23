// import {BUG_ADDED, BUG_REMOVED} from './actionTypes'
import * as actions from './actionTypes'

let lastId = 0; 

//pure function
//always giving same results with giving same args if it calls multiple times
export default function reducer(state = [], action){
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id : ++lastId,
                    resolve : false,
                    description: action.payload.description,
                }
            ]
            
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id )
            
        case actions.BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolve: true})
    
        default:
            return state;
    }
}
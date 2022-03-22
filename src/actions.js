import * as actions from './actionTypes';

export const bugAdded = description => ({
    type : actions.BUG_ADDED,
    playload : {
        description 
    }
})



// export function bugAdded(description){
//     return{
//         type : actions.BUG_ADDED,
//         payload : {
//             discribtion : description //Bug1
//         }
//     };
// }
let lastId = 0; 

//pure function
//always giving same results with giving same args if it calls multiple times
function reducer(state = [], action){
    switch (action.type) {
        case "bugAdded":
            return [
                ...state,
                {
                    id : ++lastId,
                    description: action.payload.description,
                    resolve : false 
                }
            ]
            
        case "bugRemoved":
            return state.filter(bug => bug.id !== action.payload.id )
    
        default:
            return state;
    }
}
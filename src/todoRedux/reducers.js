const reducers = {
    todos(state, action){
        const {type, payload} = action;
        switch (type) {
            case "SET":
                return payload;
            case "ADD":
                return [...state, payload]

            case "REMOVE":
                return state.filter(item=>{
                    return item.id !== payload;})

            case "TOGGLE":
                return state.map(item=>{
                    return item.id === payload ? {
                        ...item,
                        complete: !item.complete,
                    }: item
                })
        }

    },
    incrementCount(state, action){
        const {type} = action;
        switch (type) {
            case "SET":
                return state + 1
            case "ADD":
                return state + 1
        }

        return state
    }
}


function combineReducers(reducers) {
    return function reducer(state, action) {
        const changed = {};
        for(let key in reducers){
            changed[key] = reducers[key](state[key], action);
        }

        return{
            ...state,
            ...changed,
        }
    }
}

export default combineReducers(reducers);
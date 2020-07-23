import {createStore} from "redux";
import rootReducer from "./reducers";
import {addTodo} from "./actions";

const store = createStore(rootReducer);

// initial state
console.log(store.getState())

// subscribe state'change
const unsubscribe = store.subscribe(()=>{
    console.log("new State: ", store.getState())
})


store.dispatch(addTodo("Learn React"))


// cancel subscription
unsubscribe()
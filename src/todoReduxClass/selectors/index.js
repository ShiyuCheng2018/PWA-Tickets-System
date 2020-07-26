import {createSelector} from "reselect";

export const getText = (state) => state.get("text");
export const getFilter = (state) =>  state.get("filter");

const getTodos = state => state.todos.data;

export const getVisibleTodos = createSelector(
    [getTodos, getFilter],
    (todos, filter) => {
        switch (filter) {
            case "ALL": return todos
            case "COMPLETED":
                return todos.filter(item=> item.get("completed"))
            case "ACTIVE":
                return todos.filter(item => !item.get("completed"))
            default: return new Error("Unknown filter " + filter)
        }
    }
)

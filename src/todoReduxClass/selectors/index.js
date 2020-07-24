export const getText = (state) => state.text;
export const getFilter = (state) =>  state.filter;

export const getVisibleTodos = (state) => {
    const {todos: {data}, filter} = state;
    switch (filter) {
        case "ALL": return data
        case "COMPLETED":
            return data.filter(item=> item.completed)
        case "ACTIVE":
            return data.filter(item => !item.completed)
        default: return new Error("Unknown filter " + filter)
    }
}
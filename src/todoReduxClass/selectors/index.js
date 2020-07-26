export const getText = (state) => state.get("text");
export const getFilter = (state) =>  state.get("filter");

export const getVisibleTodos = (state) => {
    const data = state.getIn(["todos", "data"]);
    const filter = state.get("filter");

    switch (filter) {
        case "ALL": return data
        case "COMPLETED":
            return data.filter(item=> item.get("completed"))
        case "ACTIVE":
            return data.filter(item => !item.get("completed"))
        default: return new Error("Unknown filter " + filter)
    }
}
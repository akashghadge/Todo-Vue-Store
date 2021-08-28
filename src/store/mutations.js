export const mutations = {
    addTodo: function (state, payload) {
        state.todoList.push(payload);
    },
    deleteTodo: function (state, payload) {
        state.todoList = state.todoList.filter((val, index) => {
            if (val.id == payload.id)
                return false;
            return true;
        })
    },
    setQuotes: function (state, payload) {
        state.quotes = payload;
    }
}
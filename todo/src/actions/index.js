export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = newTodo => {
    return{
        type: ADD_TODO,
        payload: newTodo
    }
}

export const deleteTodo = targetTodo => {
    return {
        type: DELETE_TODO,
        payload: targetTodo
    }
}
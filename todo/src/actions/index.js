export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const DELETE_COMPLETED = "DELETE_COMPLETED";

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

export const updateTodo = (originalTodo, updatedTodo) => {
    return{
        type: UPDATE_TODO,
        payload: {
            originalTodo,
            updatedTodo
        }
    }
}

export const toggleCompleted = (targetTodo) => {
    return{
        type: TOGGLE_COMPLETED,
        payload: targetTodo
    }
}

export const deleteCompleted = () => {
    return{
        type: DELETE_COMPLETED
    }
}
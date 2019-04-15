import {ADD_TODO, DELETE_TODO} from '../actions/index'

const initialState = {
    todos: [
        {
            value: 'Walk the dog',
            completed: false
        },

        {
            value: 'Feed the cat',
            completed: false
        }
    ]
}

export const rootReducer = (state = initialState, action) => {
    console.log("Reducer is working")
    switch(action.type) {
        case ADD_TODO:
            return{
                ...state,
                todos: [...state.todos, 
                {
                    value: action.payload,
                    completed: false
                }
            ]
            }
        case DELETE_TODO:
        console.log("Delete todo payload:", action.payload)
            return{
                ...state,
                todos:[...state.todos.filter(todo =>{ 
                    console.log("Filter todo", todo);
                   return todo.value != action.payload
                })]
            }
        default:
            return state;
    }
}
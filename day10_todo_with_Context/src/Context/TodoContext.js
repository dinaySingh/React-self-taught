import {createContext, useContext} from "react"
export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo:"todo msg",
            complete: "false"
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
})


// making our own hook 
export const useTodo =() =>{
return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider
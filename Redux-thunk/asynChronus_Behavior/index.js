const { createStore, applyMiddleware } = require("redux")
const {delayActionMiddleware,fetchTodoMiddleware}  = require("./middlewares")
 
// inital state
const initialstate  ={
    todos:[]
}

// reducer

const todoReducer = (state = initialstate,action)=>{
    switch(action.type){
        case "todo/todoAdded":
            return {
                ...state,
                todos:[...state.todos,
                
                {
                    title:action.payload
                }
            ]
            }
        case "todo/todoLoaded":
            return{
                ...state,
                todos:[...state.todos,...action.payload]
            }
    }
}

// store
const store = createStore(todoReducer,applyMiddleware(delayActionMiddleware,fetchTodoMiddleware))

// subscribe

store.subscribe(()=>{
    console.log(store.getState())
})

// store.dispatch({
//     type:"todo/todoAdded",
//     payload:'Learn Redux with LWS'
// })

store.dispatch({
    type:"todo/fetchTodos",
})
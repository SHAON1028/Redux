const fetch = require('node-fetch')

const delayActionMiddleware = (store)=>(next)=>(action)=>{
    if(action.type ==="todo/todoAdded"){
        console.log('I am delaying you from middleware')
        setTimeout(()=>{
            next(action)

        },2000)

        return;
    }
   return next(action)
}

const fetchTodoMiddleware =(store)=>(next)=>async(action)=>{
    if(action.type ==="todo/fetchTodos"){
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        const todos =await response.json()
        console.log(todos)
        store.dispatch({
            type:"todo/todoLoaded",
            payload: todos
        })

        return;
    }
    return next(action)
}

module.exports ={
    delayActionMiddleware,fetchTodoMiddleware
}
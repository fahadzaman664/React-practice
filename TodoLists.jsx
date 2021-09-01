import react from 'react'
import  './CssForTodo.css'

const TodoLists =(props)=>{

    return  ( 
        <>
        <div className="todo-style">
        <ul> {props.text}</ul>
        </div>
        </>
       
    );

};

export default TodoLists;
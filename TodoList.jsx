import react, { useState } from 'react'
import  './CssForTodo.css'


import TodoLists from './TodoLists'

const TodoList = () => {

        const [InputValue , SetValue] = useState("");
        const [Items , SetItem] = useState([]);


        const InputEvent = (event) =>{

                SetValue(event.target.value);
        }

        const ItemClick = ()=>{
                SetItem((olditems) => {

                        return [...olditems , InputValue];
                        // here olditems take add data and input take new data

                });

                SetValue(""); // here we remove the written data 
               
        };


return (

            <>
                <div className="main-div">
                    <div className="center-div">
                        <br />
                        <h1> Todo List</h1>
                        <br />
                        <input type="text" placeholder= "add Items" 
                        onChange={InputEvent}
                        value={InputValue}
                        />
                        <button onClick={ItemClick}> +</button>

                        <ol>
                            {/* <li>  {Item}</li> */}

                            {Items.map((ItemVal)=>{

                                    return (

                                        <TodoLists text = {ItemVal}/>

                                    );


                            })}


                        </ol>




                    </div>


                </div>

            </>



);


};

export default TodoList;
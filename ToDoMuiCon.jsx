import React, { useState } from 'react'
import  './CssForTodo.css'
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';


const ToDoMuiCon = () =>{


    const [AddInput , SetInput] = useState("buy");
    const [AddValue , SetValue]=useState([]);
    const [line, setLine]=useState(false);


    const ItemEvent = (event)=>{

        SetInput(event.target.value)

    };

    const ButtonClick = () =>{

        SetValue((preValue)=>{// here store previous value in array
            return [...preValue , AddInput] // we have to return afray because data is stored in array and setvalue in input


        })
        SetInput("");

    }
    const cutIt = () =>{

            setLine(true);
    }
 

return (
<>
                <div className="main-div">
                    <div className="center-div">
                        <br />
                        <h1> Todo List</h1>
                        <br />
                        <input type="text" placeholder= "add Items" 
                        onChange={ItemEvent} value={AddInput}
                        
                        />
                        <Button className="newbtn" onClick={ButtonClick}> 

                            <AddCircleIcon />
                        </Button>

                        <ol>
                          {  AddValue.map((Value  ) =>{
                                   return(
                                    <>   
                                   
                                   <div className="todo-style">
                                       <span onClick={cutIt}>
                                           <DeleteIcon className="deleteIcon"/>
                                       </span>
                                       <li style={{textDecoration: line ? 'Line-through':'none'}}>  {Value}</li>;

                                   
                                   </div>
                                </>
                                   )


                            })}
                            

                        </ol>




                    </div>


                </div>

            </>
);


}

export default ToDoMuiCon;
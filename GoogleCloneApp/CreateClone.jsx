import react, { useState } from 'react'
import './Clone.css'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';



const CreateClone =(props)=>{

    const [note, setNote] =useState({

            title :"",
            content : "",


    });

    const InputText =(event)=>{

       const  {name ,value}=event.target;

        setNote((prevdata)=>{

            return {
                
                ...prevdata,
                [name]:value,

        }

        })
    };

    const AddBtn = (note) =>{

                props.passNote();


    }

    

return(

        <>
            <form>
        <div className="MainArea">
            <input className="InputField" 
            type="text" placeholder="Title" 
            autoComplete="off" 
            value={note.title}
            name="title"
            />
            <textarea className="TextArea"
             placeholder="... what to write" 
            onChange={InputText}
            value={note.content}
            name="content"

             />

            <Button className="AddBtn" onClick={AddBtn}>
                <AddIcon />

            </Button>

            


        </div>
        </form>

        </>


);

}

export default CreateClone;
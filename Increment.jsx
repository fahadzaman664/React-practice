import react, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';


const Increment =()=>{

    const [Count , SetCount]= useState(0);

    const InCre = ()=>{
                SetCount(Count+1);

    };

    const Decre = ()=>{
            if(Count>0){
        SetCount(Count-1);
            }

            else if(Count=== 0){
                alert('xero limit reached')

                SetCount(0)

            }

};

return (
            <>
                    <h1>{Count}</h1>
                    <Button onClick={InCre} > <AddIcon /></Button>
                    <button onClick={Decre} >  
                    <RemoveIcon/>
                    </button>
                   

            </>
);

}

export default Increment;
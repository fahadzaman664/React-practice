import react from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';



const Clone2 =(props)=> {

            return (

                    <>
                        <div className="MainClone2">
                            <h1>{props.title}</h1>
                            <br />
                            <p>{props.content}</p>
                            <DeleteOutlineIcon />



                        </div>


                    </>


            );


}
export default Clone2;
import react, { useState } from 'react'
import Header from './Header';
import Footer from './Footer'
import CreateClone from './CreateClone';
import Clone2 from './Clone2';

const GoogleClone= () =>{
        const [addItem , SetItem] = useState([]);

        const addNote =(note)=>{
                        // alert('i am clicked');

                        SetItem((prevalue)=>{

                                return [...prevalue , note]

                        })
        }

        return (

        <>
                <Header />
                <CreateClone
                passNote={addNote}
                
                />
                
                
                {addItem.map((val, index)=>{

                        return (
                        
                        <Clone2
                                key={index}
                                id={index}
                                title={val.title}
                                content={val.content}

                        />
                        )
                })}
                
                
                <Footer />
                

        </>
        );
}

export default GoogleClone;
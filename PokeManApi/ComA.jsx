
import React ,{useState,useEffect} from 'react'
import  axios from 'axios'

const ComA =()=> {

    const[num, setNum] =useState();
    const[name, setName] =useState();

    const[moves, setMove] =useState();



    useEffect(() => {
// now getting data from api
// we use await, if data is still not load
        async function getData (){
            const res =await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            setName(res.data.name)
            setMove(res.data.moves.map((value , index)=>{
                return index

    }))
        }
        getData();
        
    })

    return (
        <>

            <h1>you choose<span style={{color:'red'}}> {num} </span>number   </h1>
            <h1>you choose  <span style={{color:'red'}}>{name}</span> name</h1>
            <h1>you choose  <span style={{color:'red'}}>{moves}</span> moves</h1>

        <select value={num} onChange={(event)=>{

            setNum(event.target.value);

        }}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>



        </select>
        </>
    )
}

export default ComA;

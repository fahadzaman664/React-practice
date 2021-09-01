import React, {useState} from 'react'
import './Menu.css'
import SearchResult from './SearchResult'

const Search = () => {

    const  [img, setimg] = useState()

    const InputEvent = (event) =>{

            const data=event.target.value;
            setimg(data);
    }
    return (
        <>
        <div className="searchbar">
                <input  type="text" placeholder="search for anythig"
                
                onChange={InputEvent}
                value={img}
                >

                </input>

            { img === "" ? null : <SearchResult name={img} />}
        </div>
        </>
    )
}

export default Search

import react from 'react'
import "./index.css"

function Card (props){ // here instaed of props we can write anything

    return(
    <>
    <div className="cards">
        <div className="card">
            <img src={props.imgsrc} alt="mypic" className="card__img"/>
            <div className="card__info">
                <span className="card__category"> {props.cardcateg} </span>
                <h3 className= "card__title"> {props.cardtitle}</h3>
                <a href={props.cardbutton} target="_blank">
                <button>watch now </button>
                </a>
            </div>
        </div>
    </div>
</>

    );

}

export default Card;
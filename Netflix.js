import Card from './Cards'
import carddata from "./Caradata"
import logo from "./Darklogo.jpg"


const Netflix =() => {

    return(
        <Card
        key = {carddata[0].id} 
        imgsrc= { carddata[0].imgsource.logo}
        cardcateg = {carddata[0].cardcateg}
        cardtitle = {carddata[0].cardtitle}
        cardbutton={carddata[0].cardbutton}
    />
    
    );



};

export default Netflix;
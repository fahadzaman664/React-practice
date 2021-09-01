import Card from './Cards'
import carddata from "./Caradata"
import logo from "./Darklogo.jpg"
 const Amazon = () => {
    return(
        <Card
        key = {carddata[1].id} 
        imgsrc= { carddata[1].imgsource.logo}
        cardcateg = {carddata[1].cardcateg}
        cardtitle = {carddata[1].cardtitle}
        cardbutton={carddata[1].cardbutton}
    />
    
    );

    };
    
    export default Amazon;

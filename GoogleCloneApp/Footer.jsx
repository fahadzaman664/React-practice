import react from 'react'
import CopyrightIcon from '@material-ui/icons/Copyright';
import './Clone.css'


const Footer= () =>{
        const year = new Date();
        const latestyear=year.getFullYear().toLocaleString();

        return (

        <>
        <div className="MainFooter">
            <h1> copyright <CopyrightIcon /> {latestyear}</h1>
            </div>

        </>
        );

}

export default Footer;
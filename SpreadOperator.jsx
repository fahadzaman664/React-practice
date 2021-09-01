import react from 'react'

const SpreadOperator = ()=>{

        // const fullname = ["fahad" , "zaman"]
        // const biodata =[1  ,...fullname, "male","age"];
        // //case 2

        // const shootergames = ["carrace" , "viking" ," heatman"];
        // const [first , ...remainig] = shootergames;

        //case3

        const Name ={
                fname : 'fahad',
                lname :'zaman'

        }

        const Biodata = {
                id : 1,
                ...Name,

        }

return (
        <>

            <h2>{Biodata} </h2>
            <h3>
                {/* {first} */}
                {/* {remainig} */}
            </h3>

            <h2>
                {/* {biodata} */}
            </h2>

        </>

)

}; 

// export default SpreadOperator;
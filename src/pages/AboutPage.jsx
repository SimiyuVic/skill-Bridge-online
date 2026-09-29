import { useEffect, useState } from "react";

const About = () => {

    const [name, setName ] = useState("Victor");

    useEffect(()=>{
        console.log("useEffect ran!");
    }, [name]);

    return ( 
        <div>
            <p> Hello { name } </p>
            <button onClick={ ()=>setName("Charles") } >Change Name</button>
        </div>
     );
}
 
export default About;
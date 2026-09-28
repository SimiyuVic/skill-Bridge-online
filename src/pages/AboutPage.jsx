import { useEffect, useState } from "react";

const About = () => {

    const [name, setName] = useState("Victor");

    useEffect(()=>{
        console.log("useEffect Ran");
    },[name]);

    return ( 
        <div>
            <p> Hello { name } </p>
            <button onClick={ ()=>setName("Simiyu") }>Change Name</button>
        </div>
     );
}
 
export default About;
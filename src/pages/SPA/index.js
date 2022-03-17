import { render } from "@testing-library/react";
import {React, useState} from "react";
import * as components from "../../components/"

//a box with createroom
//loads form to create game
//renders to waiting room
const SPA = () => {
    const [game, setGame] = useState("")
    const [mode, setMode ] = useState("")
    const clickCreate = async (e) => {
        e.preventDefault();
        
    }

  
    return(
        <>
      
            <button onClick={clickCreate}
            > Create room</button>
            
    
       
        </>

    )
}

export default SPA;
//socket.on - useEffect it

import { render } from "@testing-library/react";
import React from "react";
import * as components from "../../components/"

//a box with createroom
//loads form to create game
//renders to waiting room
const SPA = () => {
    const clickCreate = async (e) => {
        e.preventDefault();
        render(
            <components.CreateRoom/>
        )
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

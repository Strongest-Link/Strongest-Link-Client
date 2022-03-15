import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import './index.css'

const JoinRoom = () => {

    const history = useHistory();
  
    const [state, setState] = useState({ lobbyname: '', nickname: '' })

    const handleInput = e => {
        const eventName = e.target.name;

        if (eventName === 'lobbyname') {
            const lobbyName = e.target.value;
            setState({ ...state, lobbyname: lobbyName});
        } 
        if (eventName === 'nickname') {
            const nickName = e.target.value;
            setState({ ...state, nickname: nickName });
        }
        
    };

    const handleSubmit = e => {
        e.preventDefault();
        let lobbyName = state.lobbyname
        let nickName = state.nickname
        console.log(state)
        
        // return (
        //     <Redirect
        //       to={{
        //         pathname: '/quiz',
        //         search: `?=${lobbyName}`,
        //         state: { referrer: '/' }
        //       }}
        //     />
        //   );

        // history.push(`/waiting-room`);
    }
    
        return (
        <div>
            <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="lobbyname"><h3>Enter Lobby Name</h3></label>
                <input
                    placeholder="Lobby Name"
                    aria-label="lobbyname"
                    name="lobbyname"
                    onChange={handleInput}
                    type="text"
                    value={state.lobbyname}
                    required
                />
                <br />
                <label htmlFor="nickname"><h3>Enter Your Nickname</h3></label>
                <input
                    placeholder="Nickname"
                    aria-label="nickname"
                    name="nickname"
                    onChange={handleInput}
                    type="text"
                    value={state.nickname}
                    required
                />
                <br />
                <button type="submit">
                    Join
                </button>
            </form>
            <br /><br /><br />
            </div>
        </div>
        );
}

export default JoinRoom

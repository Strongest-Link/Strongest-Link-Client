import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from "axios"
import { LobbyList } from '../../components'

import './index.css'

const JoinRoom = () => {

    const history = useHistory();
  
    const [state, setState] = useState({ lobbyId: '', nickname: '' })
    const [lobbydata, setLobbydata] = useState([])

    const handleInput = e => {
        const eventName = e.target.name;

        if (eventName === 'lobbyId') {
            const lobbyId = e.target.value;
            setState({ ...state, lobbyId: lobbyId});
        } 
        if (eventName === 'nickname') {
            const nickName = e.target.value;
            setState({ ...state, nickname: nickName });
        }
        
    };

    const handleSubmit = e => {
        let lobbyId = state.lobbyId
        let nickName = state.nickname
        console.log(state)

        // add person to the players array
        const toSend = { username: nickName };
        axios.post(`http://localhost:8000/games/${lobbyId}`, toSend)
        .then(response => console.log(response))
        .catch(error => {
            console.error('There was an error!', error);
        });

        // history.push(`/waiting-room`);
    }

    
    useEffect(() => {
        async function getLobbyData() {
        try {
            let { data } = await axios.get(`http://localhost:8000/games`);
            setLobbydata(data)
        } catch (err) {
            alert(err.message);
        }
        }
        getLobbyData();
    }, []);

    return (
        <div>
            <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="lobbyId"><h3>Enter Lobby ID</h3></label>
                <input
                    placeholder="Lobby ID"
                    aria-label="lobbyId"
                    name="lobbyId"
                    onChange={handleInput}
                    type="text"
                    value={state.lobbyId}
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
            <br /><br />
            </div>
            <h1 className='lobbies-header'>Open Lobbies</h1>
            <div className='lobby-div'><LobbyList results={lobbydata} /></div>
        </div>
        );
}

export default JoinRoom

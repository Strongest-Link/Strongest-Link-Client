import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from "axios"
import { LobbyList } from '../../components'

import './index.css'

const JoinRoom = () => {

    const history = useHistory();
  
    const [state, setState] = useState({ lobbyname: '', nickname: '' })
    const [lobbydata, setLobbydata] = useState([])

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

        // history.push(`/waiting-room`);
    }

    useEffect(() => {
        async function getLobbyData() {
        try {
            let { data } = await axios.get(`http://localhost:8000/games`);
            console.log('this is data', data)
            setLobbydata(data)
            console.log('this is lobbydata', lobbydata)
        } catch (err) {
            alert(err.message);
        }
        }
        console.log('before', lobbydata)
        getLobbyData();
        console.log('AFTER', lobbydata)
    }, []);


    
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

            <h1>Open Lobbies</h1>
            <div className='lobby-div'><LobbyList results={lobbydata} /></div>
        </div>
        );
}

export default JoinRoom

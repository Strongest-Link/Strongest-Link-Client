import React, { useState } from 'react';
import './index.css'

const JoinRoom = () => {
  
    const [state, setState] = useState({ roomId: '', nickname: '' })

    const handleInput = e => {
        const eventName = e.target.name;

        if (eventName === 'roomId') {
            const roomId = e.target.value;
            setState({ roomId });
          } 
        if (eventName === 'nickname') {
            const nickname = e.target.value;
            setState({ nickname });
          }
    };

    const handleSubmit = e => {
        e.preventDefault();
        let id = state.roomId
        let name = state.nickname
        // function that returns the room with the id entered
    };
    
        return (
        <div>
            <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="roomId"><h3>Enter Room ID</h3></label>
                <input
                    placeholder="Room ID"
                    aria-label="roomId"
                    name="roomId"
                    onChange={handleInput}
                    type="text"
                />
                <br />
                <label htmlFor="nickname"><h3>Enter Nickname</h3></label>
                <input
                    placeholder="Nickname"
                    aria-label="nickname"
                    name="nickname"
                    onChange={handleInput}
                    type="text"
                />
                <br />
                <button type="submit">
                    Join
                </button>
            </form>
            </div>
        </div>
        );
}

export default JoinRoom

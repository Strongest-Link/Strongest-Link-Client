import React, { useState } from 'react';

const JoinRoom = () => {
  
    const [state, setState] = useState({ roomId: '' })

    const handleInput = e => {
        const roomId = e.target.value;
        setState({ roomId });
    };

    const handleSubmit = e => {
        e.preventDefault();
        let id = state.roomId
        // function that returns the room with the id entered
    };
    
        return (
        <div>
            <label htmlFor="roomId">Enter Room ID</label>
            <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Room ID"
                    aria-label="roomId"
                    name="roomId"
                    onChange={handleInput}
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

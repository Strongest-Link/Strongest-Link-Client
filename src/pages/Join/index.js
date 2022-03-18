import React from 'react'
import { JoinRoom } from '../../components';
import './index.css';

const Join = () => {
    return (
        <>
        <h1 role="joinAGame" className='join-h1'>Join A Game</h1>
        <JoinRoom />
        </>
    )
}

export default Join

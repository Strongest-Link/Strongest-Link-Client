import React from 'react'
import './index.css';
import strongestLink from '../../images/sl-home.png'

const Home = () => {
    return (
        <>
            <img role="img" src={strongestLink} width="100%"/>
            <div role="rules" className='rules-div'>
                <h2>RULES: </h2>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </>
    )
}

export default Home

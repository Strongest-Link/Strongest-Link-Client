import React, { useState } from 'react';
import axios from "axios"
import { useEffect } from "react"
import './index.css'

const LeaderBoardTable = () => {

    const [scores, setScores] = useState()
    const [error, setError] = useState();


    // useEffect(() => {
    //     async function getScores() {
    //     try {
    //         let { data } = await axios.get(
    //         `https://${apidomain}.herokuapp.com/${route}`
    //         );
    //         console.log(data)
    //         data.sort((a, b) => b.score - a.score)
    //         setScores(data);

    //     } catch (err) {
    //         setError(err.message);
    //     }
    //     }
    //     getScores();
    // }, []);


    return (
        <div role="leaderboard-table" className="leaderboard-table">
            <table className='table'>
                <tbody>
                    <tr>
                        <th role="Rank" className='table-header'>Rank</th>
                        <th role="Username" className='table-header'>Username</th>
                        <th role="Score" className='table-header'>Score</th>
                    </tr>
                </tbody>
                {/* change this after to get the data from the api */}
                <tbody>
                    <tr className='table-row'>
                        <td>1</td>
                        <td>User 1</td>
                        <td>20</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className='table-row'>
                        <td>2</td>
                        <td>User 2</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};



export default LeaderBoardTable

import React, { useState } from 'react';
import axios from "axios"
import { useEffect } from "react"
import './index.css'

const LeaderBoardTable = () => {

    const [scores, setScores] = useState()
    const [error, setError] = useState();


    useEffect(() => {
        async function getScores() {
            try {
                let { data } = await axios.get(
                `http://localhost:8000/games/leaderboard`
                );
                console.log(data)
                // data.sort((a, b) => b.score - a.score)
                setScores(data);

            } catch (err) {
                setError(err.message);
            }
        }
        getScores();
    }, []);


    return (
        <div className="leaderboard-table">
            <table className='table'>
                <thead>
                    <tr>
                        <th className='table-header'>Rank</th>
                        <th className='table-header'>Username</th>
                        <th className='table-header'>Score</th>
                    </tr>
                </thead>
                {/* change this after to get the data from the api */}
                <tbody>
                    {
                        scores && scores.map((score, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{score.name}</td>
                                <td>{score.highscore}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};



export default LeaderBoardTable

import React from 'react';
import LeftBar from '../LeftBar';
import './Education.css';
import Calendar from './Calendar/Calendar';
import firebase from 'firebase';
import { db } from '../../Login/googleAuth';

function Education() {

    return (
        <div className="screen">
            <LeftBar/>
            <div className="edukacja-screen">
                <div className="welcome-text-box">
                <h1 className="welcome-text">Witaj, użytkowniku!</h1>
                    <div className="conteiner-score-time">
                        <div className="conteiner-left-score">
                            <div className="box-score-test">
                                <div className="your-score-box">
                                    <h2 className="text-edukacja">Twój wynik</h2>
                                        <div className="circle-box">
                                            <div className="circle-score-test"><p className="score">100/100</p></div>
                                        </div>
                                        <div className="date-time-box">
                                            <p className="date">Data: 31.10.2020</p>
                                            <p className="time">Godzina: 12:00</p>
                                        </div>
                                </div>
                                <div className="test-time-box">
                                    <div className="test-time-horizontal1">
                                        <p className="text-edukacja1">Czas trwania testu:</p>
                                        <div className="circle-time"><p className="test-time-value">100 min</p></div>
                                    </div>
                                    <div className="test-time-horizontal1">
                                        <p className="text-edukacja2">Średni czas odpowiedzi:</p>
                                        <div className="circle-time"><p className="response-time-value">100 min</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="aplication-time-box">
                                <h2 className="text-edukacja">Spędzony czas</h2>
                            </div>
                            <div className="aplication-last-box">
                                <h2 className="text-edukacja">Ostatnio oglądane</h2>
                            </div>
                        </div>
                        <div className="conteiner-right-planner">
                            <div className="planner-box">
                                <h2 className="text-edukacja">Planner</h2>
                                <div><Calendar/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Education

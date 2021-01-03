import React from 'react'
import './Calendar.css'

function Calendar() {
    return (
        <div className="calendar-box">
            <div className="planner-month-conteiner">
                <div className="planner-month-box"><p className="planner-month-name">Styczeń 2021</p></div>
            </div>
            <div className="calendar-days">
                <div className="days-box-horizontal">
                    <div className="days-box">
                        <a href="/">Pn</a>
                    </div>
                    <div className="days-box">
                        <a href="/">Wt</a>
                    </div>
                    <div className="days-box">
                        <a href="/">Śr</a>
                    </div>
                    <div className="days-box">
                        <a href="/">Cz</a>
                    </div>
                    <div className="days-box">
                        <a href="/">Pt</a>
                    </div>
                    <div className="days-box">
                        <a href="/">Sb</a>
                    </div>
                    <div className="days-box">
                        <a href="/">Nd</a>
                    </div>
                </div>
                <div className="days-box-horizontal-numbers">
                    <div className="days-box-number">
                        <a href="/">28</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">29</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">30</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">31</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">1</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">2</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">3</a>
                    </div>
                </div>
                <div className="days-box-horizontal-numbers">
                    <div className="days-box-number">
                        <a href="/">4</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">5</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">6</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">7</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">8</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">9</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">10</a>
                    </div>
                </div>
                <div className="days-box-horizontal-numbers">
                    <div className="days-box-number">
                        <a href="/">11</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">12</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">13</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">14</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">15</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">16</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">17</a>
                    </div>
                </div>
                <div className="days-box-horizontal-numbers">
                    <div className="days-box-number">
                        <a href="/">18</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">19</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">20</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">21</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">22</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">23</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">24</a>
                    </div>
                </div>
                <div className="days-box-horizontal-numbers">
                    <div className="days-box-number">
                        <a href="/">25</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">26</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">27</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">28</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">29</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">30</a>
                    </div>
                    <div className="days-box-number">
                        <a href="/">31</a>
                    </div>
                </div>
            </div>
            <div className="planner-conteiner">
                <p className="date-number-planner">Zadania: 01.01.2021</p>
                <form className="input-planner">
                        <input className="input-text-planner1" type="text" input/>
                </form>
                <form className="input-planner">
                        <input className="input-text-planner2" type="text" input/>
                </form>
                <form className="input-planner">
                        <input className="input-text-planner3" type="text" input/>
                </form>
                <form className="input-planner">
                        <input className="input-text-planner4" type="text" input/>
                </form>
                <form className="input-planner">
                        <input className="input-text-planner5" type="text" input/>
                </form>
                <button className="button-generate-planner" type="button">Generuj</button>
            </div>
        </div>
    )
}

export default Calendar

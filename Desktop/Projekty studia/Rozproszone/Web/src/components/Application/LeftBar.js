import React from 'react'
import {VscAccount} from 'react-icons/vsc'
import {BiGridAlt} from "react-icons/bi"
import {GiPencilRuler} from "react-icons/gi"
import {ImBooks} from "react-icons/im"
import {GiGraduateCap} from "react-icons/gi"
import {IoStatsChartSharp} from  "react-icons/io5"
import {FaRegHandshake} from "react-icons/fa"
import {GoMailRead} from "react-icons/go"
import {HiOutlineAtSymbol} from "react-icons/hi"
import {MdGavel} from "react-icons/md"
import './LeftBar.css';

function LeftBar() {
    return (
        <div className="left-conteiner">
            <div className="icon-conteiner">
                <div className="profile-icon"><a href="/"><VscAccount/></a></div>
                <div className="leftbar-icons"><a href="/"><BiGridAlt/></a></div>
                <div className="leftbar-icons"><a href="/"><GiPencilRuler/></a></div>
                <div className="leftbar-icons"><a href="/"><ImBooks/></a></div>
                <div className="leftbar-icons"><a href="/"><GiGraduateCap/></a></div>
                <div className="leftbar-icons"><a href="/"><IoStatsChartSharp/></a></div>
                <div className="leftbar-icons"><a href="/"><FaRegHandshake/></a></div>
                <div className="leftbar-icons"><a href="/"><GoMailRead/></a></div>
                <div className="leftbar-icons"><a href="/"><HiOutlineAtSymbol/></a></div>
                <div className="leftbar-icons"><a href="/"><MdGavel/></a></div>
            </div>
        </div>
    )
}

export default LeftBar;

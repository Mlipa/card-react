import React from 'react'
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import './styles/Fooder.css'

function Fooder() {
    return (
        <div className="fooder">
            <a>
                <img src={linkedin} alt="red social linkedin"/>
                <p>Yaretas24</p>
            </a>
            <a>
                <img src={instagram} alt="red social linkedin"/>
                <p>Yaretas24</p>
            </a>
        </div>
    )
}

export default Fooder

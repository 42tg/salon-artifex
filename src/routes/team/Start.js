import React, { Component } from 'react';


import teamPicture from './GruppenbildLoraSW.jpg'

import { Link } from "react-router-dom"
class Start extends Component {

    render() {
        return (
            <div id="Start" align="center">
                <h3>Team</h3>
                <div className="innershadow">
                    <img style={{width: 500}} src={teamPicture} alt="Team Mitglieder" border="0"/>
                </div>
                <ul className="link-list">
                    {this.props.members && this.props.members.map((member, i)=>(
                        <li key={i} ><Link id="btHome" to={`${this.props.match.url}/${member.name.toLowerCase()}`}>{member.name}</Link></li>
                    ))}
                </ul>
                <h4>Um mehr über mich und mein Team zu erfahren, einfach auf die Namen klicken.</h4>
            </div>
        )
    }
}

export default Start
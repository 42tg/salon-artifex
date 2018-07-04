import React, { Component } from 'react';

import buchungIcon from './onlinebuchung/sh.png'

class Onlinebuchung extends Component {

    render() {
        return (
            <div id="online-buchung" align="center">
                <p align="center">
                    Du m&ouml;chtest auch au&szlig;erhalb der &Ouml;ffnungszeiten selbst&auml;ndig einen Termin vereinbaren?
                    Kein Problem! Einfach den Button anklicken, registrieren und Termin vereinbaren.
                    Hast Du noch ein Anliegen? Schreibe uns unter &bdquo;Bemerkungen&rdquo;.
                    <br/>
                </p>
                <a className="lbody" href="https://www.e-cut.de/online-buchung/index.php?salon=tech" rel="noopener noreferrer" target="_blank">
                    <p align="center">
                        Hier kommst Du
                        <br/>
                        <img src={buchungIcon} border="0" alt="Zur Onlinebuchung" title="Zur Onlinebuchung"/>
                        <br/>
                        zur Online-Buchung
                    </p>
                </a>
                <p align="center">
                    <br/>
                    Du kannst Dir nat&uuml;rlich auch Benutzernamen und Kennwort direkt im Salon geben lassen.<br/>
                    Falls Du Deinen Termin nicht einhalten kannst, ruf uns bitte im Salon an!
                </p>
            </div>
        )
    }
}

export default Onlinebuchung
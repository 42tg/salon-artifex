import React, { Component } from 'react';


import schaukasten from './preise/Schaukasten.jpg'

class Preise extends Component {

    render() {
        return (
            <div id="preise" align="center">
                <table cellSpacing="0" rules="none" border="0">
                <tbody>
                <tr>
                    <td align="left">
                        <table cellSpacing="0" rules="none" border="0">
                        <tbody>
                            <tr>
                                <td colSpan="2">
                                    <h2 className="hbody">Dienstleistungen</h2>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <p>
                            <a id="pic" href="./pic/Schaukasten18.jpg"><img src={schaukasten} style={{width: 500}} alt="Preisaushang"/></a>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <h2 className="hbody">...und noch mehr</h2>
                    </td>
                </tr>
                </tbody>
                </table>
                <p align="justify">
                    <b>
                        Wo sind denn die versteckten Preise f&uuml;r Waschen, Haarkur und so weiter? Gibt es nicht! Warum?
                        Ganz einfach! Weil einfach einfach ist: Die Preise sind Inklusivpreise!
                        Das heißt, Ihr bezahlt den Preis, den Ihr seht... und nicht noch 1000 und 1 Extra.
                        Also Waschen, Trocknen und Styling ist immer mit drin!
                        Und noch ein Vorteil: Ich kann Eurem Haar die Pflege geben, die es wirklich braucht und nicht die, die am g&uuml;nstigsten ist!
                    </b>
                </p>
                <h6 align="left">Preise g&uuml;ltig ab 18.August 2015</h6>
            </div>
        )
    }
}

export default Preise
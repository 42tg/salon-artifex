import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


import schaukasten from './preise/Schaukasteninnen19.jpg'

class Preise extends Component {
    constructor(props){
        super(props)
        this.state ={
            isOpen: false
        }
    }
    render() {
        const { isOpen } = this.state;

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
                        <button className="innershadow" onClick={() => this.setState({ isOpen: true })}>
                            <img src={schaukasten} style={{width: 500}} alt="Preisaushang"/>
                        </button>
                        { isOpen && (
                            <Lightbox mainSrc={schaukasten}
                                onCloseRequest={() => this.setState({ isOpen: false })}/>
                        )}

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
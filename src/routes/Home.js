import React, { Component } from 'react';

import mainImage from './team/team-weinachten.jpg'
class Home extends Component {

    render() {
        return (
            <div align="center">
                <h3>Hier d&uuml;rft Ihr Euch wie zu Hause f&uuml;hlen!</h3>
                <div className="innershadow">
                    <img src={mainImage} alt="salon" border="0" title="Willkommen bei Artifex!" style= {{width :400}} />
                </div>
            <h3 > Unsere Öffnungszeiten ab dem 2. Advent: </h3>
            <div >
                Dienstags - Freitags : 10 - 20 Uhr * <br/>
                Samstags: 10 - 20 Uhr * <br/>
                <small style={{fontSize: '0.7em'}}>*Mit Terminvereinbarungen</small>
            </div>
            <br/>
            <h3>
                Wir machen Betriebsurlaub!
            </h3>
            <div>
                Do, 27.12.2018 bis Sa, 05.01.2019 <br/>
                ist der Salon geschlossen <br/>
                <small style={{fontSize: '0.7em'}}>Termine für das neue Jahr könnt ihr natürlich
                <a style={{color: 'black'}} href="https://www.e-cut.de/online-buchung/index.php?salon=tech"> <b style={{fontWeight: 'bold', textDecoration:'underline'}}>hier</b> </a>
                Buchen!</small>
            </div>

            </div>
        )
    }
}

export default Home
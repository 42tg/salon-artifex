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
            <p> Dieses Jahr bleibt der Salon durchgehend geöffnet. Unsere Urlaubszeiten: </p>
            <table>
                <tbody>
                    <tr>
                        <th style={{textAlign: 'left'}}>Franzi:</th><td>28.08.- 12.09.</td>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'left'}}>Lora:</th><td>19.07.- 08.08.</td>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'left'}}>Varina:</th><td>11.06.- 26.06.</td>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'left'}}>Wanda:</th><td>24.07.- 04.08.</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
}

export default Home
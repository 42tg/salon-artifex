import React, { Component } from 'react';

import mainImage from './home/salon_umbau.jpg'

class Home extends Component {

    render() {
        return (
            <div align="center">
                <h3>Hier d&uuml;rft Ihr Euch wie zu Hause f&uuml;hlen!</h3>
                <div className="innershadow">
                    <img src={mainImage} alt="salon" border="0" title="Willkommen bei Artifex!" style= {{width :500}} />
                </div>
            <br/>
           
            <p>Unsere Urlaubszeiten: </p>
            <table>
               <tbody>
                    <tr>
                        <th style={{textAlign: 'left'}}>Franzi:</th><td>22.03. - 30.05. Krankheitsbedingt</td>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'left'}}></th><td>11.08. - 26.08.</td>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'left'}}>Varina:</th><td>30.07. - 07.08.</td>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'left'}}></th><td>15.09. - 25.09.</td>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'left'}}>Wanda:</th><td>06.01. - 14.03. Meisterschule</td>
                    </tr>
                </tbody>
            </table>
           
            </div>
        )
    }
}

export default Home
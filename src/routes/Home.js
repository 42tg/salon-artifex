import React, { Component } from 'react';

import mainImage from './home/weihnachten19-2FB.jpg'

class Home extends Component {

    render() {
        return (
            <div align="center">
                <h3>Hier d&uuml;rft Ihr Euch wie zu Hause f&uuml;hlen!</h3>
                <div className="innershadow">
                    <img src={mainImage} alt="salon" border="0" title="Willkommen bei Artifex!" style= {{width :500}} />
                </div>
            <br/>
            {/*
            <p>Unsere Urlaubszeiten: </p>
            <table>
               <tbody>
                    <tr>
                        <th style={{textAlign: 'left'}}>Franzi:</th><td>23.08. - 10.09.</td>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'left'}}>Varina:</th><td>09.07. - 16.07.</td>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'left'}}></th><td>  27.08. - 06.09. </td>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'left'}}>Wanda:</th><td>14.06. - 25.06.</td>
                    </tr>
                </tbody>
            </table>
            */}
            </div>
        )
    }
}

export default Home
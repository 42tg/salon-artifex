import React, { Component } from 'react';
import mainImage from './home/Kundenhinweis2.jpg';


class Home extends Component {

    render() {
        return (
          <div align="center"> 
          {/* <h3>Hier dürft Ihr Euch wie zu Hause fühlen!</h3> */}
            <div className="innershadow">
              <img
                src={mainImage}
                alt="salon"
                border="0"
                title="Willkommen bei Artifex!"
                style={{ width: 500 }}
              />
            </div>
            <br />
            <h2>
              Wir haben geöffnet!
            </h2>
            {/* <h2>Wir sind wegen Corona leider gerade nicht für euch da!</h2> */}
            <p>Zum Schutz für Euch und uns gilt bei uns die <br/>2G-Regelung:<br/>
                Geimpft<br/>
                Genesen<br/>
                {/* Getestet<br/> */}
                <br/>
                Sollte ein Termin aufgrund fehlender Nachweise nicht stattfinden können, müssen wir Euch diesen in Rechnung stellen.<br/>
                Wir bitten um Euer Verständnis.<br/>
                <br/>
                Die jeweils aktuellen Zahlen und Vorgaben findet Ihr hier:<br/>
                <a className="lbody" href="www.corona-os.de">www.corona-os.de</a><br/>
            </p>
            <p>Unsere Urlaubszeiten: </p>
            <table>
              <tbody>
                <tr>
                  <th style={{ textAlign: "left" }}>Franzi:</th>
                  <td>1.4. - 31.9.2021</td>
                </tr>
                {/* <tr>
                  <th style={{ textAlign: "left" }}>Varina:</th>
                  <td>30.07. - 07.08.</td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}></th>
                  <td>15.09. - 25.09.</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        );
    }
}

export default Home
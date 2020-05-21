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
            <p>Unsere Urlaubszeiten: </p>
            <table>
              <tbody>
                <tr>
                  <th style={{ textAlign: "left" }}>Franzi:</th>
                  <td>08.06. - 26.08.</td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}>Varina:</th>
                  <td>30.07. - 07.08.</td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}></th>
                  <td>15.09. - 25.09.</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }
}

export default Home
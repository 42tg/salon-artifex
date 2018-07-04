import React, { Component } from 'react';
import logo from './static/Artifex-Logo-Final.png'
import facebookF from './static/fb_48.png'
import faireSalon from './static/derfairesalon.png'
import pomadeshopLogo from './static/pomadeshop_logo.png'
import schwarzkopfLogo from './static/schwarzkopf.svg'
import morganspomadeLogo from './static/morgans-pomade.png'


import Home from './routes/Home'
import Aktuelles from './routes/Aktuelles'
import Philosophie from './routes/Philosophie'
import Onlinebuchung from './routes/Onlinebuchung'
import Anfahrt from './routes/Anfahrt'
import Preise from './routes/Preise'
import Video from './routes/Video'
import Impressum from './routes/Impressum'
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div align="center">
      <Router>
        <div className="boxshadow">
        <table width="1024" cellSpacing="0" rules="none" border="0">
        <tbody>
          <tr>
            <td className="lo" width="68" height="200"></td>
            <td className="xn" width="210" height="200">
                  <div align="center">
                      <div className="infoshadow">
                          <p className="info">
                              Koksche Stra&szlig;e 15<br/>
                              49080 Osnabr&uuml;ck<br/>
                              <br/>
                              Tel.: 0541 91 56 899
                          </p>
                      </div>
                  </div>
            </td>
            <td className="ro" valign="top" colSpan="2">
                  <div className="tbody" align="center">
                      <img src={logo} alt="Logo" border="0" style={{padding: 20}}/>
                  </div>
            </td>
          </tr>
          <tr>
            <td className="x" width="68">
            </td>
            <td className="xn" width="210" valign="top">
              <p className="lhead" align="left">
                
                <Link id="btHome" to="/">Home</Link><br/><br/>
                <Link id="btAktuelles" to="/aktuelles">Aktuelles</Link><br/><br/>
                <Link id="btPhilosophie" to="/philosophie">Philosophie</Link><br/><br/>
                <Link id="btTerminplaner" to="/online-buchung">Online-Buchung</Link><br/><br/>
                <Link id="btAnfahrt" to="/anfahrt">Anfahrt</Link><br/><br/>
                <Link id="btTeam" to="/team">Team</Link><br/><br/>
                <Link id="btPrices" to="/preise">Preise</Link><br/><br/>
                <Link id="btPhotos" to="/video">Video</Link><br/><br/>
                <Link id="btImpressum" to="/impressum">Impressum</Link><br/><br/>
                <a href="https://www.facebook.com/SalonArtifex" rel="noopener noreferrer" target="_blank"><img src={facebookF} alt="Facebook" style={{float: 'left'}} border="0"/>anpage</a>
              </p>
            </td>
            <td className="mr" valign="top" colSpan="2">
                  <div className="tbody" >
                    <Route exact path="/" component={Home} />
                    <Route exact path="/aktuelles" component={Aktuelles} />
                    <Route exact path="/philosophie" component={Philosophie} />
                    <Route exact path="/online-buchung" component={Onlinebuchung} />
                    <Route exact path="/anfahrt" component={Anfahrt} />
                    <Route exact path="/preise" component={Preise} />
                    <Route exact path="/video" component={Video} />
                    <Route exact path="/impressum" component={Impressum} />
                  </div>
            </td>
            
          </tr>
          <tr>
            <td className="lu" width="68" height="178"></td>
            <td className="xn" width="210" valign="bottom">
						  <div align="center">
                <a href="http://der-faire-salon.de/" rel="noopener noreferrer" target="_blank" title="Der faire Salon"><div className="innershadow">
                  <img src={faireSalon} width="170" alt="Der faire Salon" border="0" /></div></a>
  							<a href="http://www.pomade-shop.eu/" rel="noopener noreferrer" target="_blank" title="Pomade Shop"><div className="innershadow">
                  <img src={pomadeshopLogo} width="150" alt="pomadeshop_logo" border="0" style={{padding: 10}}/></div></a>
							  <a href="http://www.schwarzkopf-professional.de" rel="noopener noreferrer" target="_blank" title="Schwarzkopf"><div className="innershadow">
                  <img src={schwarzkopfLogo} width="170" alt="schwarzkopf" border="0"/></div></a>
							  <a href="https://morganspomade.de/" rel="noopener noreferrer" target="_blank" title="Morgans Pomade"><div className="innershadow">
                  <img src={morganspomadeLogo} width="150px" alt="morgans"  style={{padding: 10}} border="0"/></div></a>
							  <br/>
						  </div>
            </td>
            <td className="ru">
              <table width="680" cellSpacing="0" rules="none" border="0">
              <tbody>
                <tr>
                  <td colSpan="4"><hr/>
                    <u>&Ouml;ffnungszeiten:</u>
                  </td>
                </tr>
                <tr>
                  <td align="left">
                    <p align="left">
                      Montag:<br/>
                      Dienstag:<br/>
                      Mittwoch:
                    </p>
                  </td>
                  <td align="left">
                    <p align="left">
                      geschlossen<br/>
                      10:00 - 19:00 Uhr<br/>
                      10:00 - 19:00 Uhr
                    </p>
                  </td>
                  <td align="left">
                    <p align="left">
                      Donnerstag:<br/>
                      Freitag:<br/>
                      Samstag:
                    </p>
                  </td>
                  <td align="left">
                    <p align="left">
                      10:00 - 19:00 Uhr<br/>
                      10:00 - 19:00 Uhr<br/>
                      09:00 - 15:00 Uhr
                    </p>
                  </td>
                </tr>
              </tbody>
              </table>
            </td>
          </tr>
        </tbody>
        </table>            
        </div>
      </Router>
      </div>
    );
  }
}

export default App;

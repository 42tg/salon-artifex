import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom'
import { TransitionGroup, CSSTransition  } from 'react-transition-group'

import logo from './static/Artifex-Logo-Final.png'
import facebookF from './static/fb_48.png'
import faireSalon from './static/derfairesalon.png'
import pomadeshopLogo from './static/pomadeshop_logo.png'
import schwarzkopfLogo from './static/schwarzkopf.svg'
import morganspomadeLogo from './static/morgans-pomade.png'


import Home from './routes/Home'
import Jobs from './routes/Jobs'
import Philosophie from './routes/Philosophie'
import Onlinebuchung from './routes/Onlinebuchung'
import Anfahrt from './routes/Anfahrt'
import Preise from './routes/Preise'
import Video from './routes/Video'
import Impressum from './routes/Impressum'

import TeamStart from './routes/team/Start'
import TeamMember from './routes/team/Member'
import franziImage from './routes/team/franzi.jpg'
import varinaImage from './routes/team/varina.jpg'
import wandaImage from './routes/team/wanda.jpg'
import loraImage from './routes/team/lora.jpg'
import filizImage from './routes/team/filiz.jpg'



import './App.css';
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
        in: false,
        member: [
            {
                name: 'Franzi',
                image: franziImage,
                text: 'Ich bin 1982 in Mettingen geboren und habe meine Jugend in dem wunderschönen, idyllischen Örtchen Recke verbracht, in dem ich auch zur Schule gegangen bin. 2001 habe ich dann das Gymnasium mit Fachabitur verlassen um mich mit Leidenschaft in die Arbeitswelt zu stürzen. In jenem Jahr begann ich meine Ausbildung bei Friseur Tebbe in Mettingen, die ich 2004 mit Auszeichnung bestanden habe. Die folgende Zeit habe ich unter Anderem bei Mod’s Hair in Bremen und Friseur Wesselmann GmbH in Ibbenbüren gearbeitet und war einige Wochen bei Keller the school in Sindelfingen um mein fachliches Wissen weiter auszuweiten. In dieser Zeit habe ich auch an Wettbewerben der HWK teilgenommen und bin dort als Kammersieger Münsterland hervorgegangen(4. Platz landesweit). Im April 2005 habe ich dann endlich den Salon gefunden, der zu mir passte; Unisex. Jung, dynamisch und ich konnte meiner Kreativität freien Lauf lassen. Dort habe ich die folgenden 2 Jahre als Geschäftsführung gearbeitet, Mitarbeiter betreut und Lehrlinge ausgebildet, Frisurenshows geplant und durchgeführt, auf diversen Shows und Fotoshootings als Friseur und Visagist mitgewirkt und natürlich auch als Akteur beim Showschneiden auf der Bühne gestanden. In meiner Freizeit widmete ich meine gesamte Aufmerksameit der Meisterschule, um eine der besten Meisterschulen für Friseure in ganz Deutschland zu besuchen und dort meinen Meisterbrief als Jahrgangsbeste entgegen zu nehmen. Anschließend verließ ich Unisex im Sommer 2007. Seit dem 1. November 2007 besitze ich nun meinen eigenen kleinen Salon und freue mich jeden Tag darauf, neue Herausforderungen im Bereich Schneiden, Färben und Make Up anzunehmen.'
            },
            {
                name: 'Wanda',
                image: wandaImage,
                text: 'ist seit Dezember 2009 nicht mehr aus dem Salon wegzudenken. Es sollte eigentlich nur ein Schulpraktikum werden, aber ihr gefiel das Arbeiten in meinem Salon so gut, dass sie ihren Berufswunsch Polizistin an den Nagel hing und nun fast jedes Wochenende in meinem Salon aushalf. Eigentlich auch nicht sehr verwunderlich, da sie ein helles, kreatives Köpfchen ist, in ihrer Freizeit gern an ihren Freunden neue Frisuren und Make Up austestet und auch sonst ein sehr kommunikatives Wesen besitzt. Nach ihrem Fachabitur absolvierte sie bei mir im Salon ihre Ausbildung, die sie erfolgreich beendet hat.'
            },
            {
                name: 'Varina',
                image: varinaImage,
                text: 'Varina ist seit September 2016 Teil unseres Teams. Sie beendete bereits 2003 ihre Ausbildung, ist als gebürtige Bad Iburgerin dem Landkreis treu geblieben und arbeitete über ein Jahrzehnt in einem renommierten Salon bei uns in der Nähe. Seit Beendigung ihrer Elternzeit unterstützt sie unser Team durch Ihre langjährige Berufserfahrung und Kompetenz, besonders im Bereich Schnitt und Strähnentechniken. Sie liebt ihren Beruf durch und durch, betrachtet ihn eher als Berufung und liebt es, Herausforderungen mit Witz, Fröhlichkeit und Kreativität zu meistern.'
            },
            {
                name: 'Lora',
                image: loraImage,
                text: 'Lora war schon immer sehr kontaktfreudig, pflichtbewusst und liebt den Umgang mit den verschiedensten Menschen, weshalb sie bereits vor ihrer Ausbildung zur Friseurin erfolgreich ihrer Mutter beim Führen einer Gaststätte half. 2008 begann sie ihre Ausbildung zur Friseurin, die sie nach Ihrer Elternzeit fortsetzte. Durch ihren starken Ehrgeiz, Lernbereitschaft und Willensstärke schaffte sie es, als alleinerziehende Mutter die Ausbildung mit Bravur abzuschließen. Nachdem andere Salons ihren Wissensdurst nicht stillen konnten, ist sie nun seit November 2015 ein wertvoller Teil des Teams. Als gebürtige Usbekin spricht sie nicht nur fließend Russisch, sondern begeistert auch durch ihre Herzlichkeit. Dank ihres ruhigen Wesens und Ihre einfühlsame Art sind besonders ängstlichere Kunden gut bei ihr aufgehoben.',
                hint: 'Lora ist aktuell in Elternzeit'
            },
            {
              name: 'Filiz',
              image: filizImage,
              text: 'ist seit 1.September 2011 fester Bestandteil des Teams und jetzt nach langer Krankheit endlich wieder da. Als gebürtige Osnabrückerin arbeitete Filiz bei mehreren namenhaften Friseuren, bis sie auf der Suche nach einem neuen Wirkungskreis bei uns gelandet ist. Sie beendete 2001 erfolgreich ihre Friseurausbildung und glänzt nun mit mehr als 10 Jahren Berufserfahrung. Sie ist ein lebenslustiges, quirliges Mädel, die es versteht, auf Deinen individuellen Charakter und Stil einzugehen und steht Dir mit Rat und Tat bei der Umsetzung Deiner Wünsche zur Seite. Sie ist eine wahre Koryphäe, wenn es um festliche Frisuren geht. Sei es die Steckfrisur für die Hochzeit, das glatte Styling für die Disco oder die Föhnwelle für die Mottoparty; Filiz erfüllt Dir jeden Wunsch. Natürlich verkörpert sie auch in den Bereichen Schnitt und Farbe das Motto „Perfektion hat Stil“. Filiz ist jeden Nachmittag für Euch da.',
            }
        ]
    }
  }

  render() {
    const PUBLIC_URL = process.env.PUBLIC_URL
    const Content = withRouter(({ location }) => (
      <TransitionGroup className="animation-wrapper">
        <CSSTransition key={location.key} classNames="fade" timeout={{enter: 1000, exit: 500}} >
          {(state)=> {
            return (
          <Switch location={location}>
            <Route exact path={`${PUBLIC_URL}/`} component={Home} />
            <Route exact path={`${PUBLIC_URL}/jobs`}  component={Jobs} />
            <Route exact path={`${PUBLIC_URL}/philosophie`}  component={Philosophie} />
            <Route exact path={`${PUBLIC_URL}/online-buchung`}  component={Onlinebuchung} />
            <Route exact path={`${PUBLIC_URL}/anfahrt`}  component={Anfahrt} />
            <Route exact path={`${PUBLIC_URL}/team`}  children={(props) => (<TeamStart {... props}  members={this.state.member}/>)} />
            <Route path={`${PUBLIC_URL}/team/:member`}   children={(props) => (<TeamMember {... props}  members={this.state.member}/>)}></Route>
            <Route exact path={`${PUBLIC_URL}/preise`}  component={Preise} />
            <Route exact path={`${PUBLIC_URL}/video`}  component={Video} />
            <Route exact path={`${PUBLIC_URL}/impressum`}  component={Impressum} />
          </Switch>
          )}}
        </CSSTransition>
      </TransitionGroup>
    ))

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
              <div className="lhead" align="left">

                <Link id="btHome" to={`${PUBLIC_URL}/`}>Home</Link><br/><br/>
                <Link id="btJobs" to={`${PUBLIC_URL}/jobs`}>Jobs</Link><br/><br/>
                <Link id="btPhilosophie" to={`${PUBLIC_URL}/philosophie`}>Philosophie</Link><br/><br/>
                <Link id="btTerminplaner" to={`${PUBLIC_URL}/online-buchung`}>Online-Buchung</Link><br/><br/>
                <Link id="btAnfahrt" to={`${PUBLIC_URL}/anfahrt`}>Anfahrt</Link><br/><br/>
                <Link id="btTeam" to={`${PUBLIC_URL}/team`}>Team</Link><br/><br/>
                <Link id="btPrices" to={`${PUBLIC_URL}/preise`}>Preise</Link><br/><br/>
                <Link id="btPhotos" to={`${PUBLIC_URL}/video`}>Video</Link><br/><br/>
                <Link id="btImpressum" to={`${PUBLIC_URL}/impressum`}>Impressum</Link><br/><br/>

                <a href="https://www.facebook.com/SalonArtifex" rel="noopener noreferrer" target="_blank"><img src={facebookF} alt="Facebook" style={{float: 'left'}} border="0"/>anpage</a>
              </div>

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
            <td className="mr" valign="top" colSpan="2">
                  <div className="tbody" >
                    <Content/>
                  </div>
            </td>

          </tr>
          <tr>
            <td className="lu" width="68" height="178"></td>
            <td className="xn" width="210" valign="bottom">

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
                      09:00 - 13:00 Uhr
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

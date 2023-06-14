import React, { Component } from "react"
import { ErrorBoundary } from "../components/ErrorBoundary"

const style = {
    marginBottom: '15px'
}
class Jobs extends Component {
    render() {
        return (
            <div align="center">
                <ErrorBoundary>
                <h2>Jobs</h2>
                <div>
                    <div style={style}>Du hast Bock auf Veränderung?</div>
                    <div style={style}>Du bist ein Teamplayer?</div>
                    <div style={style}>Du willst Neues lernen?</div>
                    <div style={style}>Du willst bei der Arbeit mal so richtig abrocken?</div>
                    <div style={style}>Dann bewirb dich jetzt bei uns!</div>
                    <div style={style}>wir brauchen sofort Verstärkung, später natürlich auch noch. Du kannst bei uns zwischen 10 und 30 Std/ Woche arbeiten, evtl. auch in Vollzeit.</div>
                    <div style={style}>Du solltest freundlich, ehrlich, teamfähig und begeistert von Deinem Beruf sein. Du darfst gern ein flippiger Typ sein. Deine Hauptaufgaben sind Beratung, Schnitte und moderne Farbbehandlungen.</div>
                    <div style={style}>Du bist auch ein Barber? Super!</div>
                    <div style={style}>Wenn Du Steckfrisuren und Make up sowie Rockabillies umsetzen kannst: Perfekt. Wenn nicht, bringen wir es Dir bei. Natürlich kannst Du Dich auch in weiteren Bereichen spezialisieren, die auch zu Dir passen.</div>
                    <div style={style}>Wir bieten Dir flexible Arbeitszeiten, stressfreies Arbeiten, ein freundschaftliches Betriebsklima, betriebliche Altersvorsorge, faire Bezahlung, Fortbildungen, junge Kundschaft und natürlich ein nettes, kleines Team.</div>
                        <div style={style}>Wir sind auch Mitglied beim <a target="_blank" style={{ color: "#ab0000" }} href="https://www.der-faire-salon.de">fairen Salon</a>.</div>
                    <div style={style}>Schick uns einfach Deine Bewerbung oder schau doch am besten persönlich vorbei,</div>
                    <div style={style}>wir freuen uns auf Dich.</div>
                </div>

                </ErrorBoundary>
            </div>
        )
    }
}

export default Jobs

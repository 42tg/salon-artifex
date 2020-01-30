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
                    <div style={style}>Du willst Dich bei Schnitten, Färbungen und Bräuten kreativ ausleben?</div>
                    <div style={style}>Du hast Bock auf Bärte?</div>
                    <div style={style}>Du willst selbständig in einem witzigen, kleinen Team arbeiten und dabei junge Kunden bedienen? </div>
                    <div style={style}>Du liebst es, etwas neues zu lernen und hast keinen Bock auf Mindestlohn?</div>
                    <div style={style}>Dann bist Du bei uns genau richtig! </div>
                    <div style={style}>Wir suchen einen engagierten Friseur (m/d/w) in Teil- oder Vollzeit, der uns unterstützt.</div>
                    <div style={style}>Melde Dich am persönlich oder postalisch direkt bei uns!</div>
                </div>

                </ErrorBoundary>
            </div>
        )
    }
}

export default Jobs

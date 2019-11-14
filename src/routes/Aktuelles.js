import React, { Component } from "react"
import { ErrorBoundary } from "../components/ErrorBoundary"

class Aktuelles extends Component {
    render() {
        return (
            <div align="center">
                <ErrorBoundary>
                    <div><h1><span role="img" aria-label="Something went wrong">🤕</span></h1><h3>Hier solle eigentlich was anderes stehen.</h3></div>
                    {/* <FacebookProvider wait appId="1305405872926730">
                        <Page
                            href="https://www.facebook.com/SalonArtifex"
                            width={500}
                            height={800}
                            tabs="timeline"
                        />
                    </FacebookProvider> */}
                </ErrorBoundary>
            </div>
        )
    }
}

export default Aktuelles

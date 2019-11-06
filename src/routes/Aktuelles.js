import React, { Component } from "react"
import FacebookProvider, { Page } from "react-facebook"
import { ErrorBoundary } from "../components/ErrorBoundary"

class Aktuelles extends Component {
    render() {
        return (
            <div align="center">
                <ErrorBoundary>

                    <FacebookProvider wait appId="1305405872926730">
                        <Page
                            href="https://www.facebook.com/SalonArtifex"
                            width={500}
                            height={800}
                            tabs="timeline"
                        />
                    </FacebookProvider>
                </ErrorBoundary>
            </div>
        )
    }
}

export default Aktuelles

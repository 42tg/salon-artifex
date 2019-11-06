import React, { Component } from "react"

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log(error)
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error)
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <div><h1><span role="img" aria-label="Something went wrong">🤕</span></h1><h3>Hier solle eigentlich was anderes stehen.</h3></div>
        }

        return this.props.children
    }
}
export default ErrorBoundary
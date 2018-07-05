import React, { Component } from 'react';
import FacebookProvider, { Page } from 'react-facebook';

class Aktuelles extends Component {

    render() {
        return (
            <div align="center">
                 <FacebookProvider appId={process.env.REACT_APP_APP_ID}>
                    <Page href="https://www.facebook.com/SalonArtifex"  width={500} height={800} tabs="timeline" />
                </FacebookProvider>   
            </div>
        )
    }
}

export default Aktuelles
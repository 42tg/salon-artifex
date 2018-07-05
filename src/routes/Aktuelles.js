import React, { Component } from 'react';
import FacebookProvider, { Page } from 'react-facebook';

class Aktuelles extends Component {

    render() {
        return (
            <div align="center">
            { process.env.REACT_APP_APP_ID && 
                (<FacebookProvider appId={process.env.REACT_APP_APP_ID}>
                    <Page href="https://www.facebook.com/SalonArtifex"  width={500} height={800} tabs="timeline" />
                </FacebookProvider>)
              
            }
            { !process.env.REACT_APP_APP_ID && 
                (<h3>Oh, da ist etwas schief gegangen :(</h3>)
            }
            </div>
        )
    }
}

export default Aktuelles
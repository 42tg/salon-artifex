import React, { Component } from 'react';

import moviePlaceholder from './video/movie.jpg'
class Video extends Component {

    render() {
        return (
            <div align="center">
                <h2>Video</h2>

                    <a id="movie" href="http://www.youtube.com/embed/dhUbGzXog1I?autoplay=1" rel="noopener noreferrer" target="_blank"><img alt="" src={moviePlaceholder} border="0"/></a>

            </div>
        )
    }
}

export default Video
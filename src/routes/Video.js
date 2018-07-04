import React, { Component } from 'react';

import moviePlaceholder from './video/movie.jpg'
class Video extends Component {

    render() {
        return (
            <div id="video" align="center">
                <h2>Video</h2>
                <div class="innershadow">
                    <a id="movie" href="http://www.youtube.com/embed/dhUbGzXog1I?autoplay=1"><img alt="" src={moviePlaceholder} border="0"/></a>
                </div>
            </div>
        )
    }
}

export default Video
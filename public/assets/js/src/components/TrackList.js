// /**
//  * Created by ngocsontran on 3/29/17.
//  */
//
// import  React, {Component, PropTypes} from 'react'
//
//
// export default class TrackList extends Component {
//     static propTypes = {
//         tracks: PropTypes.array
//     }
//
//     static defaulProps = {
//         tracks: []
//     }
//
//     render() {
//         return (
//           <div>
//               {
//                   this.props.tracks.map((track) => {
//                       return <div> Track: {track.title}</div>
//                   })
//               }
//           </div>
//         );
//
//     }
//
// }


import React, {Component, PropTypes} from 'react';

export default class TrackList extends Component {
    static propTypes = {
        tracks: PropTypes.array
    }

    static defaultProps = {
        tracks: []
    }

    render() {
        return (
            <div>
                {
                    this.props.tracks.map((track) => {
                        return <div>Track: {track.title}</div>;
                    })
                }
            </div>
        )
    }
}
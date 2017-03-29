/**
 * Created by ngocsontran on 3/29/17.
 */

import React from 'react'
import { render } from 'react-dom'
import  ReactDOM from 'react-dom'
import TrackList from './src/components/TrackList'




const tracks = [
    {
        id: 1,
        title: 'Em cua ngay hom qua'

    },
    {
        id: 2,
        title: 'Con mua ngang qua'
    }
];





// var Test  = React.createClass({
//    render(){
//        return(
//          <div>Traafn Ngocj Sown</div>
//        );
//    }
// });

render(<TrackList tracks={tracks} />, document.getElementById('content2'));
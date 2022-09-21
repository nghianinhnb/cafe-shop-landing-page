import React from 'react';

import './index.scss'


function GgMap(props) {
    return (
        <div className='GgMap py-30'>
            <div className='container' align='center'>
                <h1 className='mb-20'>Get a Coffe !</h1>

                <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=617&amp;height=400&amp;hl=en&amp;q=The Holy Cross Brewing Society, Fahrgasse 7, 60311 Frankfurt am Main, Германия&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
            </div>
        </div>
    )
}


export default GgMap;
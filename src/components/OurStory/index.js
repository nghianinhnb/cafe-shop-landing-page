import React from 'react';


function OurStory(props) {
    const backgroundColor = '#a6b3bc';

    return (
        <div>
            <div className='container py-20'>
                <div className='row align-items-center'>
                    <div className='col-md-7 col-12'>
                        <h1 style={{fontFamily: 'IBM Plex Sans'}}>COFFEGASM</h1>
                        <p>That little rush you feel, after that first sip of a good and tasty coffe</p>
                    </div>

                    <div className='col-md-5 col-12'>
                        <img src='landingImg.png' />
                    </div>
                </div>

            </div>
        </div>
    )
}


export default OurStory;

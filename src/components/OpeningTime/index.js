import React from 'react';

import './index.scss';


function OpeningTime(props) {
    const businessHours = [
        { day: 'Mon - Fri', openingTime: '9:00 - 18:00'},
        { day: 'Saturday', openingTime: '10:00 - 18:00'},
        { day: 'Sunday', openingTime: '10:00 - 18:00'},
    ]


    return (
        <div className='container Open_Time'>
            <div className='row justify-content-center align-items-center pb-md-30 pb-20'>
                <h2 className='col-12 my-md-30 my-12' align='center'>Business Hours</h2>

                {
                    businessHours.map(item => (
                        <div className='col-md-4 col-12'align='center'>
                            <p className='Open_Day'>{item.day}</p>
                            <p className='Open_Hours mb-8'>{item.openingTime}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default OpeningTime;

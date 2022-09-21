import React from 'react';

import './index.scss';


function Carousel(props) {
    const imagesPath = [
        'slice_1.jpg',
        'slice_2.jpg',
        'slice_3.jpg',
        'slice_4.jpg',
    ];

    return (
        <div className='Carousel'>

            <div id="carouselExampleCaptions" className="carousel slide w-100" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {
                        imagesPath.map((item, index) => (
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className={index===1?'active':''} aria-current="true" aria-label={`Slide ${index}`}></button>
                        ))
                    }
                </div>
    
                <div className="carousel-inner h-100">
                    {
                        imagesPath.map((item, index) => (
                            <div className={`carousel-item h-100 ${index===1?' active':''}`}>
                                <img src={item} className="d-block w-100" alt={item}/>

                                
                                {/* <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div> */}
                            </div>
                        ))
                    }
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>

        </div>
    )
}


export default Carousel;

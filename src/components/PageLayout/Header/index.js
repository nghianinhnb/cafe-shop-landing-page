import React from "react";

import './index.scss';


function Header(props) {
    return (
        <div className="py-md-6 Header" >
            <div className="container">
                {/* LOGO and CONTACT  */}
                <div className="d-none d-md-flex flex-row justify-content-between opacity-75 Logo_Contact">
                    <a href="https://www.instagram.com/the_holy_cross_brewing_society/?igshid=YmMyMTA2M2Y%3D" rel="noreferrer" target='_blank'>
                        <div className="d-flex flex-row align-items-center h-100 Logo">
                            <img className="logo h-100" src="logo.png" alt="The Holy Cross Brewing Society"/>
                            <p className="text-white p-2">The Holy Cross Brewing Society</p>
                        </div>
                    </a>

                    <div className="d-flex flex-row justify-content-between align-items-center Contact">
                        <a href="https://www.instagram.com/the_holy_cross_brewing_society/?igshid=YmMyMTA2M2Y%3D" rel="noreferrer" target='_blank'>
                            <img className="opacity-50" src="instagram.svg" alt="facebook" style={{height: 26.5}}/>
                        </a>
                        <a href="https://www.facebook.com/TheHolyCrossBrewingSociety" rel="noreferrer" target='_blank'>
                            <img className="opacity-50" src="facebook.svg" alt="facebook" style={{height: 22, marginLeft:13}}/>
                        </a>
                    </div>
                </div>

                {/* BANNER  */}
                <div className="row justify-content-center Page_Banner">
                    <img className="col-11 col-md-8" src="banner.png" alt="The Holy Cross Brewing Society"/>
                </div>

                {/* NAVIGATION  */}
                <div className="d-flex flex-row justify-content-center justify-content-md-start Top_Nav">
                    <a className="text-white mx-4" href="https://www.facebook.com/TheHolyCrossBrewingSociety" rel="noreferrer" target='_blank'>
                        Contact
                    </a>
                    <a className="text-white mx-4" href="https://maps.google.com/maps/dir//The+Holy+Cross+Brewing+Society+Fahrgasse+7+60311+Frankfurt+am+Main+Germany/@50.1101838,8.6871888,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47bd0ea6b2c92713:0xf3ffca4bcc56c140" rel="noreferrer" target='_blank'>
                        Direction
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Header;

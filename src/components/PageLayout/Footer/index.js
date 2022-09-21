import React from "react";

import './index.scss';


function Footer(props) {
    return (
        <div className="bg-black Footer">
            <div className="container">
                <div className="d-flex flex-row justify-content-between py-8">
                    <div className="d-flex flex-row align-items-center">
                        <p className="text-white opacity-75">
                            © 2022 — 
                        </p>
                        <a className="text-white opacity-75 p-1" href="https://www.instagram.com/the_holy_cross_brewing_society/?igshid=YmMyMTA2M2Y%3D" rel="noreferrer" target='_blank'>
                            The Holy Cross Brewing Society
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Footer;

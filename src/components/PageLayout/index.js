import React from "react";

import Header from "./Header";
import Footer from "./Footer";


function PageLayout(props) {
    return (
        <div className={`d-flex flex-column flex-root`}>
            <div className="d-flex flex-row flex-column-fluid page">
                <div className="d-flex flex-column flex-row-fluid wrapper">

                    <Header />

                    {/* begin::Content */}
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-column-fluid">
                        <div className="w-100">{props.children}</div>
                        </div>
                    </div>
                    {/* end::Content */}

                    <Footer />

                </div>
            </div>

            {/* <ScrollTop /> */}
        </div>
    )
}


export default PageLayout;

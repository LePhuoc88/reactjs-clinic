import React, { useEffect } from 'react';

const FacebookComments = () => {
    useEffect(() => {
        // Khởi tạo Facebook SDK
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '3520966881534142',
                xfbml: true,
                version: 'v20.0',
            });
        };
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }, []);

    return (
        <div>
            <div
                className="fb-comments"
                data-href="https://www.facebook.com/react"
                data-numposts="5"
                data-width="100%"
            ></div>
        </div>
    );
};

export default FacebookComments;

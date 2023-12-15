import React, { useState, useEffect } from 'react';

const Event = () => {
    const [mousePositionX, setMousePositionX] = useState(0);
    const [mousePositionY, setMousePositionY] = useState(0);
    const [windowScrollY, setWindowScrollY] = useState(0);

    const handleOnMouseMove = (e) => {
        console.log(e)
        setMousePositionX(e.nativeEvent.offsetX);
        setMousePositionY(e.nativeEvent.offsetY);
    };

    const handleScroll = () => {
        setWindowScrollY(Math.floor(window.scrollY));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <>
            <section>
                <div onMouseMove={handleOnMouseMove}>
                    <h3>Mouse Position:</h3>
                    <p>x: {mousePositionX}</p>
                    <p>y: {mousePositionY}</p>
                </div>
            </section>

            <section>
                <div>
                    <h3>Window Scroll Position:</h3>
                    <p>y: {windowScrollY}</p>
                </div>
            </section>
        </>
    );
};

export default Event;

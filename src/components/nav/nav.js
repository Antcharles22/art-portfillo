import React, { useEffect } from "react";
import "./nav.css";
import Logo from "../images/logo.png";


export const Nav = () => {
    useEffect(() => {
        const handleScroll = () => {
            const content = document.querySelector('.content');
            const banner = document.querySelector('.banner');
            const bannerHeight = banner.offsetHeight;

            if (window.scrollY > bannerHeight) {
                content.style.position = 'static';
            } else {
                content.style.position = 'fixed';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="nav">
            <div className="content">
                    <p>contact for more info: antcharles22@hotmail.co.uk</p>
            </div>
            
            <img src={Logo} alt="logo" className="logo" />
            <div className="navbar">
                <ol>
                    <li><a href="Home">Home</a></li>
                    <li><a href="About">About</a></li>
                    <li className="dropdown">
                        <a href="collections">Collections</a>
                        <ul className="dropdown-content">
                            <li><a href="collection1">Diamonds</a></li>
                            <li><a href="collection2">landscape</a></li>
                            <li><a href="collection3">The sea</a></li>
                            <li><a href="collection4">Chaos</a></li>
                            <li><a href="collection5">Meditation</a></li>
                        </ul>
                    </li>
                    <li><a href="contact">Contact</a></li>
                </ol>
            </div>
        </div>
    );
}


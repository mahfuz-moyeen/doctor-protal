import React from 'react';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <div style={{ background: `url(${footer})`, backgroundSize: 'cover' }}>
            <footer className="footer p-10 justify-center lg:justify-around my-5" >
                <div>
                    <span className="footer-title">Services</span>
                    <p className="link link-hover">Emergency Checkup</p>
                    <p className="link link-hover">Monthly Checkup</p>
                    <p className="link link-hover">Weekly Checkup</p>
                    <p className="link link-hover">Deep Checkup</p>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <p className="link link-hover">Fluoride Treatment</p>
                    <p className="link link-hover">Cavity Filling</p>
                    <p className="link link-hover">Teath Whitening</p>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <p className="link link-hover">New York - 101010 Hudson</p>
                </div>
            </footer>
            <footer className="footer footer-center p-4 mb-5">
                <div>
                    <p>Copyright 2022 All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
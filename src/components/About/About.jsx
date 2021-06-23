import React from 'react';
import Header from '../Header/Header';
import './About.css';
import aboutVector from '../../assets/about_vector.png';
import aboutAnime from '../../assets/about_anime.gif'
import Footer from '../Footer/Footer';
import Typewriter from 'typewriter-effect';

const About = () => {
    return (
        <div className="section-container">
            <Header heading="About Me."
                details="Programmer | Loves Competetive Programming which i never did."
            />
            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <b><i className='about-sub-head'>Howdy! A bit of me</i></b>
                    <p className='about-details'>
                        I am a Software Engineer who enjoys solving complex problems.<br />
                        I have a keen interest in Competitive Programming using Data Structure and Algorithms.<br /><br /><br />
                        <Typewriter
                            options={{
                                strings: "Curently i'm having 1+ year(s) of development experience in software industry.<br> <br> <h1> #OpenToWork</h1>. ",
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <Footer
                phrase='Check out my '
                link='Skills!'
                toAdress='/skills'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};


export default About;
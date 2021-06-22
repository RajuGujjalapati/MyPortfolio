import React from 'react';
import Header from '../Header/Header';
import './About.css';
import aboutVector from '../../assets/about_vector.png';
import aboutAnime from '../../assets/about_anime.gif'
import Footer from '../Footer/Footer';

const About = () => {
    return ( 
        <div className="section-container">
            <Header heading="About Me."
            details="Not a blogger | Not a Youtuber | A Normal Engineer " 
            />        
            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Teacher</h3>
                    <p className='about-details'>
                        Teaching is my passion, till now, I've taught thousands
                        of students about Programming and Web Development. Check
                        out{' '}
                        <a
                            className='about-link-element'
                            href='http://theleanprogrammer.com/aam'
                        >
                            my free react courses!
                        </a>
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
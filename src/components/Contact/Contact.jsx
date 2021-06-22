import React from 'react';
import './Contact.css';
import Header from '../../components/Header/Header';
import Footer from '../Footer/Footer';
import contactVector from '../../assets/contact_anime.png';
import linkedin from '../../assets/li.png';
import github from '../../assets/gh.png';
import web from '../../assets/web.png';

const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Get in touch.'
                details='Interested to collaborate? Feel free to drop me an email.'
            />

            {/* Form section */}
            <div className='contact-form-container'>
                <form className='contact-form'>
                    {/* Email Id Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='email'
                        className='input-box email-input'
                        autoComplete='off'
                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>

            {/* Social icons */}
            <div className='social-icons-container'>

                <a href="https://github.com/RajuGujjalapati">
                    <img src={github} alt="social" className="social-icon"/>
                </a>
                <a href="https://www.linkedin.com/in/raju-gujjalapati-470a88171">
                    <img src={linkedin} alt="social" className="social-icon" />
                </a>
                <a href="https://github.com/RajuGujjalapati">
                    <img src={web} alt="social" className="social-icon" />
                </a>
        </div>
        <Footer phrase="Read More" toAdress="/about" link="about me" />
        <div className='vector-frame'>
                <img
                    src={contactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
        </div>
   
     );
}
 
export default Contact;
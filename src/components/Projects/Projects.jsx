import React from 'react';
import './Projects.css';
import Header from '../Header/Header';
import Footer from '../../components/Footer/Footer';
const Projects = () => {
    return ( 
        <div className="section-container">
            <Header heading="My Projects."
                details="Here are a few cool things I've worked on, do check them out!" />
            <Footer phrase="contact me" link="Contact" toAdress="/contact" />
        </div>
     );
}
 
export default Projects;
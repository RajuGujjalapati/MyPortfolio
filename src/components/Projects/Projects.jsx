import React from 'react';
import './Projects.css';
import Header from '../Header/Header';
import Footer from '../../components/Footer/Footer';

import {projectsData} from "./../../assets/projectsData"
import ProjectCard from './ProjectCard';
const Projects = () => {
    return ( 
        <div className="section-container">
            <Header heading="My Projects."
                details="Here are a few cool things I've worked on, do check them out!" />
            
            <div className="project-cards-container">
                {projectsData.map(({projectName,
    projectDescription,
    imageUrl,
    codeUrl,
    projectUrl}) => {
                    return <ProjectCard 
                        projectName={projectName}
                        projectDescription={projectDescription}
                        projectUrl={projectUrl}
                        imageUrl = {imageUrl}
                        codeUrl = {codeUrl} />

    })}
            </div>
            
            <Footer  
            phrase="contact me" 
            link="Contact" 
            toAdress="/contact" />
        </div>
     );
}
 
export default Projects;
import React from 'react';
import "./Skills.css";

const SkillCard = ({skillName, skillUrl}) => {
    
    return ( 
        <div className="skill">
            <img src={skillUrl} alt="skill" width="108" 
     height="107" />
     <p>{skillName}</p>
        </div>
     );
}
 
export default SkillCard;
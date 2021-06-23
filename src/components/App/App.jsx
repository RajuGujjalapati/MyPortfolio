import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import NavBar from '../NavBar/NavBar'
import GoHome from '../GoHome/GoHome';
import './App.css';


 

const App = () => {
    return (  
        <div>
           <HashRouter>
           <div>
               <NavBar/>
               <Route path="/" exact component={Home}/>
               <Route path="/about" component={About}/>
               <Route path="/projects" component={Projects}/>
               <Route path="/skills" component={Skills}/>
               <Route path="/contact" component={Contact}/>
                <GoHome/>

           </div>
           </HashRouter>
        </div>
    );
}
 
export default App;
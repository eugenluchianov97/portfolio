// import img from "./../img/projects/02-big.jpg";

import BtnGitHub from "../components/btnGitHub/BtnGitHub.js";
import {useParams} from "react-router-dom";

import {useState} from 'react';

import {projects}  from "../helpers/projectList";

function Project (){
    const {id} = useParams();



    const project = projects.find((el)=> {
         if(parseInt(id) === el.id){
             return el;
         }
    });


     return (
         <main className="section">
             <div className="container">
                 <div className="project-details">

                     <h1 className="title-1">{project.title}</h1>

                     <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

                         <div className="project-details__desc">
                             <p>Skills:{project.skills}</p>
                         </div>
                     {project.gitHubLink && (
                         <BtnGitHub link={project.gitHubLink}/>
                     )}


                 </div>
             </div>
         </main>
     );
}

export default Project;
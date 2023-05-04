
import Project from './../components/project/Project.js';

import {projects} from "../helpers/projectList";

function Projects (){
    return(
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map((project,key) => {
                         return (
                             <Project key={project.id} index={project.id} title={project.title} img={project.img}/>
                         )
                    })}
                </ul>
            </div>
        </main>
    );
}

export default Projects;
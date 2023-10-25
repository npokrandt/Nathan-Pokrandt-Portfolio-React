import Project from "../components/Project"
import projects from '../projects/projects.json'
import aquapocalypsePic from '../images/gameplay.png'

const project = projects[0]
console.log(project)

project.image = aquapocalypsePic

const Portfolio = () => {
    return(
        <div className="container">

            <h2>Check out some of my work:</h2> 
            <div className="row">
                <div className="col-md-6">
                    <Project
                        name={project.name}
                        image={project.image}
                        link={project.link}
                        githubLink={project.githubLink}
                    />
                </div>
                <div className="col-md-6">
                    <Project/>
                </div>
            </div>          
        </div>
    )
}

export default Portfolio
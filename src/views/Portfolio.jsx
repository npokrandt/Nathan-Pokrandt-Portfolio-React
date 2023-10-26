import Project from "../components/Project/Project"
import projects from '../projects/projects.json'
import aquapocalypsePic from '../images/aquapocalypse.png'
import ohSoBoredPic from '../images/ohSo_Bored-pic.png'
import coffeeOrdersPic from '../images/coffee-orders.png'
import theColorGamePic from '../images/the-color-game.png'
import blogHubPic from '../images/bloghub.png'
import scragglePic from '../images/scraggle.png'

const images = [aquapocalypsePic, ohSoBoredPic, coffeeOrdersPic, theColorGamePic, blogHubPic, scragglePic]

const Portfolio = () => {
    return(
        <div className="container">

            <h2>Check out some of my work:</h2> 
            <div className="row">

                {
                    projects.map(project => {
                        return(
                            <div className="col-md-6">
                                <Project
                                    name={project.name}
                                    image={images[project.id]}
                                    link={project.link}
                                    githubLink={project.githubLink}
                                />
                            </div>

                        )
                    })
                }
            </div>          
        </div>
    )
}

export default Portfolio
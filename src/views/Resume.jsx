import resume from './Nathan_Pokrandt_Resume_Programming.pdf'

const Resume = () => {
    return(
        <div className="container">
            <h2>Download my resume below:</h2>
            <div className="d-flex flex-column align-items-center">
                <a href={resume} download="Nathan_Pokrandt_Resume_Programming" target="_blank" className="fs-5 py-4 my-3">Link to download Resume</a>
                <div className="card w-75 mb-4">
                    <div className="card-header">
                        <h3>Proficiencies:</h3>
                    </div>
                    <div className="card-body bg-dark text-light">
                        <h5>General skills:</h5>
                        <ul>
                            <li>Adept at logical analysis</li>
                            <li>Skilled at problem solving</li>
                            <li>Well-versed in several coding concepts</li>
                            <li>Eager and quick learner</li>
                            <li>Git</li>
                        </ul>
                        <h5>Front End:</h5>
                        <ul>    
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Handlebars</li>
                        </ul>
                        <h5>Back End:</h5>
                        <ul>
                            <li>SQL</li>
                            <li>MongoDB</li>
                            <li>Node.js</li>
                            <li>Sequelize</li>
                            <li>Mongoose</li>
                            <li>Express</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
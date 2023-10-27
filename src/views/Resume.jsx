import resume from './Nathan_Pokrandt_Full_Stack_Web_Dev_Resume.pdf'

const Resume = () => {
    return(
        <div className="container">
            <h2>Download my resume below:</h2>
            <div className="d-flex flex-column align-items-center">
                <a href={resume} download="Nathan_Pokrandt_Resume" target="_blank" className="fs-5 py-4 my-3">Link to download Resume</a>
                <div className="card w-75 mb-4">
                    <div className="card-header">
                        <h3>Proficiencies:</h3>
                    </div>
                    <div className="card-body bg-dark text-light">
                        <ul>
                            <li>Adept at logical analysis</li>
                            <li>Skilled at problem solving</li>
                            <li>Well-versed in several coding concepts</li>
                            <li>Eager and quick learner</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
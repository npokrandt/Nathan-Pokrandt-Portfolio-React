import './Project.css'

const Project = props => {
    return (
        <div className="card mb-3">
            <div className='card-header p-0'>
               <img src={props.image} alt='game pic' className='w-100'></img>
            </div>
            <div className='card-body bg-success'>
                <h4>{props.name}</h4>
                <a href={props.link} target='_blank'>Check {props.name} out</a>
                <a href={props.githubLink} target='_blank'>View {props.name}'s Github repo</a>
            </div>
        </div>
    )
} 

export default Project
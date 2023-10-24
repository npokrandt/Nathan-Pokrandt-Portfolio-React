import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='d-flex justify-content-around'>
            <Link to='/'>About Me</Link>
            <Link to='portfolio'>Portfolio</Link>
            <Link to='contact'>Contact</Link>
            <Link to='resume'>Resume</Link>
        </div>
    )
}

export default Navbar
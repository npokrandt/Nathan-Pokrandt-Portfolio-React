import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='d-flex justify-content-around'>
            <Link to='/' className='link'>About Me</Link>
            <Link to='portfolio' className='link'>Portfolio</Link>
            <Link to='contact' className='link'>Contact</Link>
            <Link to='resume' className='link'>Resume</Link>
        </div>
    )
}

export default Navbar
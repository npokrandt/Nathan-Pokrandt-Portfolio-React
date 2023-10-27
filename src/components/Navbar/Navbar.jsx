import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    return (
        <div className='d-flex justify-content-center'>
            <div className='row w-100'>
                <NavLink to='/' className='link col-sm-12 col-md-6 col-lg-3'>About Me</NavLink>
                <NavLink to='portfolio'  className='link col-sm-12 col-md-6 col-lg-3'>Portfolio</NavLink>
                <NavLink to='contact' className='link col-sm-12 col-md-6 col-lg-3'>Contact</NavLink>
                <NavLink to='resume' className='link col-sm-12 col-md-6 col-lg-3'>Resume</NavLink>
            </div>
        </div>
    )
}

export default Navbar
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='px-5'>
                <h1>Nathan Pokrandt</h1>
            </div>
            <div>
                <a href='#' className="mx-5">Portfolio</a>
                <a href='#' className="mx-5">About Me</a>
                <a href='#' className="mx-5">Contact</a>
                <a href='#' className="mx-5">Resume</a>
            </div>
        </>
    )
}

export default Navbar
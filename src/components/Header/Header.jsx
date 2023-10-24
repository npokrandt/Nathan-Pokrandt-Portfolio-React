import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
    return (
        <header className='d-flex py-4 mb-5'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-4'>
                        <h1>Nathan Pokrandt</h1>
                    </div>
                    <div className='col-8'>
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
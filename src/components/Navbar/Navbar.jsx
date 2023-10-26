import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [aboutLink, setAboutLink] = useState('white')
    const [portfolioLink, setPortfolioLink] = useState('black')
    const [contactLink, setContactLink] = useState('black')
    const [resumeLink, setResumeLink] = useState('black')

    const selected = e => {
        const name = e.target.name
        if (name === 'aboutMe'){
            setAboutLink('selected')
            setPortfolioLink('not selected')
            setContactLink('not selected')
            setResumeLink('not selected')
        } else if (name === 'portfolio'){
            setPortfolioLink('selected')
            setAboutLink('not selected')
            setContactLink('not selected')
            setResumeLink('not selected')
        } else if (name === 'contact'){
            setContactLink('selected')
            setAboutLink('not selected')
            setPortfolioLink('not selected')
            setResumeLink('not selected')
        } else {
            setResumeLink('selected')
            setAboutLink('not selected')
            setPortfolioLink('not selected')
            setContactLink('not selected')
        }
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='row w-100'>
                <Link to='/' onClick={selected} name='aboutMe' className='link col-sm-12 col-md-6 col-lg-3' style={{color: 'white'}}>About Me</Link>
                <Link to='portfolio' onClick={selected} name='portfolio' className='link col-sm-12 col-md-6 col-lg-3' style={{color: {portfolioLink}}}>Portfolio</Link>
                <Link to='contact' onClick={selected} name='contact' className='link col-sm-12 col-md-6 col-lg-3' style={{color: {contactLink}}}>Contact</Link>
                <Link to='resume' onClick={selected} name='resume' className='link col-sm-12 col-md-6 col-lg-3' style={{color: {resumeLink}}}>Resume</Link>
            </div>
        </div>
    )
}

export default Navbar
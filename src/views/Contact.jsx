import { useState } from "react"

// TODO: add backend functionality to email me whatever the contact form has
// TODO: add alerts if an input is exited with no input
const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleInputChange = e => {
        const { target } = e
        const inputType = target.name
        const inputValue = target.value

        if (inputType === 'name'){
            setName(inputValue)
        } else if (inputType === 'email'){
            setEmail(inputValue)
        } else {
            setMessage(inputValue)
        }
    }

    const handleSubmit = e => {
        console.log(name, email, message)
        e.preventDefault()

        //as there is no back-end, this function doesn't actually submit the info anywhere - yet
        alert('Message submitted')

        //send me an email from that address with the name and the message

        setName('')
        setEmail('')
        setMessage('')
    }
    
    return(
        <div className="container">
            <h2 className="mb-4">Contact me by filling out these fields:</h2>
            <form className="form p-4 mb-4" onSubmit={handleSubmit}>
                <label className="form-label">Input Name Here:</label>
                <input className='form-control' onChange={handleInputChange} name='name' type="text" placeholder="Name" value={name} required/>
                <label className="form-label">Input Email Here:</label>
                <input className='form-control' onChange={handleInputChange} name='email' type="email" placeholder="Email" value={email} required />
                <label className="form-label">Input Message Here:</label>
                <input className='form-control' onChange={handleInputChange} name='message' type="text" placeholder="Message" value={message} required />
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    )
}

export default Contact
import { useRef } from "react"
import emailjs from '@emailjs/browser'
//import 'dotenv/config'

// TODO: add backend functionality to email me whatever the contact form has
const Contact = () => {

    const form = useRef()

    const sendMessage = e => {
        e.preventDefault()

        alert('Message submitted') 
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text)
            }), (error) => {
                console.log(error.text)
            }

    }
    
    return(
        <div className="container">
            <h2 className="mb-4">Contact me by filling out these fields:</h2>
            <form ref={form} className="form p-4 mb-4" onSubmit={sendMessage}>
                <label className="form-label">Input Name Here:</label>
                <input className='form-control' name='user_name' type="text" placeholder="Name" required/>
                <label className="form-label">Input Email Here:</label>
                <input className='form-control' name='user_email' type="email" placeholder="Email" required />
                <label className="form-label">Input Message Here:</label>
                <input className='form-control' name='message' type="text" placeholder="Message" required />
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    )
}

export default Contact
import { useState } from "react"

const Contact = () => {

    const handleSubmit = () => {

    } 
    
    return(
        <div className="container">
            <h2 className="mb-4">Contact me by filling out these fields:</h2>
            <form className="form p-4 mb-4">
                <label className="form-label">Input Name Here:</label>
                <input className='form-control' type="text" />
                <label className="form-label">Input Email Here:</label>
                <input className='form-control' type="email" />
                <label className="form-label">Input Message Here:</label>
                <input className='form-control' type="text" />
                <button onSubmit={handleSubmit} type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    )
}

export default Contact
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Edit = () => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])

    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((response) => {
            setName(response.data.results[0].name)
            // setLoaded(true);
        })
        .catch((err) => {
            console.log("Them Errors: ", err)
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/update/${id}`, { name })
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <h5 className='text-success'>Edit this author:</h5>
            {
                errors.map((err, i) => {
                    return (
                        <p key={i} className='text-danger'>{err}</p>
                    )
                })
            }
            <form onSubmit={handleSubmit} className='container border border-2 w-25 p-3'>
                <label>Name: </label>
                <br />
                <input className='form-control-sm' type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
                <div className='mt-3'>
                    <Link to={'/'} className='btn btn-outline-primary me-4'>Cancel</Link>
                    <button className='btn btn-outline-dark'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit
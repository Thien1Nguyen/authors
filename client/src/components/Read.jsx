import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Read = () => {
    const [authorList, setAuthorList] = useState([])
    const { id } = useParams

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthorList(res.data.results)
            })
            .catch(err => {
                console.log("Fix This:", err)
            })
    })
    return (
        <div>
            <Link to={"/create"} className='btn btn-primary mb-4'>Add an author</Link>
            <table className='table bg-dark text-white'>
                <thead>
                    <tr>
                        <th className='fw-bolder'>Author</th>
                        <th>Actions avaliable</th>
                    </tr>
                </thead>
                <tbody>
                {
                    authorList.map((author, i) => {
                        return (
                            <tr key={i}>
                                <td style={{color: "plum"}}>{author.name}</td>
                                <td> <Link to={`/${author._id}/edit`} className='btn btn-outline-warning'>Edit</Link>  |  <Link to={`/${author._id}/delete`} className='btn btn-outline-danger'>Delete</Link></td>
                            </tr>
                            
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Read
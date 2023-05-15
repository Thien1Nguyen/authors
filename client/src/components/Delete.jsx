import React, {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const Delete = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
        .then((res) => {
            navigate("/")
        })
        .catch((err) => {
            console.log("Them Errors: ", err)
        })
    }, []);

    return (
        <div>Deleting.....</div>
    )
}

export default Delete
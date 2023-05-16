import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div>
            <div>
                <h1>This isn't the author you're looking for </h1>
                <img src="https://gifdb.com/images/high/obi-wan-kenobi-hello-there-greetings-hdlogoveds6f3h1n.gif" alt="Obi" />
            </div>
            <Link to={"/create"} className='btn btn-primary mb-4'>Let Me Add My Author!</Link>
        </div>
      )
}

export default ErrorPage
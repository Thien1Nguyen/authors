import React from 'react'
import { Routes, Route } from "react-router-dom"
import Create from '../components/Create'
import Read from '../components/Read'
import Edit from '../components/Edit'
import Delete from '../components/Delete'

const Main = () => {
    return (
        <div>
            <h1>Favorite authors</h1>
            <hr/>
            <Routes>
                <Route path="/" element={<Read />} />
                <Route path="/create" element={<Create/>} />
                <Route path="/:id/edit" element={<Edit />} />
                <Route path="/:id/delete" element={<Delete />} />
            </Routes>
        </div>
    )
}

export default Main
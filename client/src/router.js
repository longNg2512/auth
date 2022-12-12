import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as pages from './pages/index'

const Routess = () => (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<pages.Auth />} />
                <Route path="/login" />
            </Routes>
        </BrowserRouter>
    </div>
)
export default Routess

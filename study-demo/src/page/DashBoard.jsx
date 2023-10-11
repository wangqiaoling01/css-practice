import React from 'react'
import { Link } from 'react-router-dom'

const DashBoard = () => {
    return (
        <>
            <div>
                <h1>CSS-background</h1>
                <ul>
                    <li>
                        <Link to="/bg">线性渐变</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default DashBoard

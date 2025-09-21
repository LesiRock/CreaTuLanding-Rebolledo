import React from 'react'
import { Link } from 'react-router-dom'

const ErrorComponent = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 15,
        }}>
            <img
            src="https://i.postimg.cc/PJ2b7CQ1/peakpx.jpg"
            alt="error"
            style={{ width:'70%', marginBottom: 15}}
            />
            <Link style={{ backgroundColor: '#094045', color: 'white', padding:'1rem' }} to="/">Volver al Home</Link>
        </div>
    )
}

export default ErrorComponent
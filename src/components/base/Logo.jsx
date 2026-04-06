import React from 'react'
import logo from '../../assets/Youth-india-logo.png'

const Logo = ({ onClick }) => {
    return (
        <div className='logo-wrap p-2' onClick={onClick}>
            <img src={logo} alt="youth india logo image" />
        </div>
    )
}

export default Logo
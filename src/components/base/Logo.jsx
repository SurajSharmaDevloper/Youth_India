import React from 'react'
import logo from '../../assets/Youth-india-logo.png'
import { NavLink } from 'react-router'

const Logo = ({ onClick }) => {
    return (
        <NavLink to="/">
            <div className='logo-wrap p-2' onClick={onClick}>
                <img src={logo} alt="youth india logo image" />
            </div>
        </NavLink>

    )
}

export default Logo
import React from 'react'
import Button from './Button'

export const Header = () => {
    return (
        <div class="header">
            <h1 style={headingStyle}>Task Tracker</h1>
            <Button/>
        </div>
    )
}

const headingStyle = {
    color: 'Black',
}

export default Header
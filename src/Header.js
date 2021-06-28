import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Avatar } from '@material-ui/core'
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className='header'>
                        <Link to='/'>

            <img className='header_icon'
                src="https://i.pinimg.com/236x/1a/dd/e8/1adde8bf514c8868d662ac5897891417.jpg"
                alt=""
            />
            </Link>
            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header

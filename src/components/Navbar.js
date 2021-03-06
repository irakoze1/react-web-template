import React, {useState, userEffect} from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes} from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import {IconContext } from 'react-icons/lib'

function Navbar() {
    const [click, setClick ] = useState(false)
    const [button, setButton ] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton =  () => {

        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
        userEffect(() =>{
            showButton();
        }, [])

        window.addEventListener('resize', showButton)
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
           <div className="navbar">
            <div className="navbar-container container">
                <Link className="navbar-logo" onClick={closeMobileMenu}>
                    <MdFingerprint className="navabar-icon" />
                    TiTiToF
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                 {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links">
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links">
                            Products
                        </Link>
                    </li>
                    <li className="nav-btn">
                        {button ? (
                            <Link to='/sing-up' className="btn-link">
                                <Button buttonStyle="btn--outline">SING UP</Button>
                            </Link>
                        ) : (
                            <Link to='/sing-up'  className="btn-link"
                            onClick={closeMobileMenu}>
                                <Button buttonStyle="btn--outline" buttonSize='btn--mobile'>SING UP
                                </Button>
                            </Link>
                        )}
                    </li> 
                </ul>
            </div>
          </div>
        </IconContext.Provider> 
        </>
    )
}

export default Navbar

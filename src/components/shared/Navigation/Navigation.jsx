import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
const Navigation = () => {
    const brandStyle = {
        color : '#fff',
        textDecoration : 'none',
        fontWeight: 'bold',
        fontStyle: '22px',
        display: 'flex',
        alignItems:'center'
    }
    const logoStyle = {
        marginLeft : '10px'
    }
  return (
  
    <nav className={`${styles.navbar} container `} >
        <Link style = {brandStyle }to="/">
                <img src="/images/logo.png" alt="logo" />
                <span style={logoStyle}  className='styles'>CodersClub</span>
        </Link>
    </nav>
  )
}

export default Navigation
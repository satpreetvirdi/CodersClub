import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
  const signInLinkStyle = {
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px',
    };
  return (<div className={styles.cardWrapper}>
    <Card title="Welcome to CodersClub !!!" icon="logo">
    <p className={styles.text}>
      Discuss your bugs or help other coders who are stuck by sharing solutions and experiences
    </p>
   <Button text ={"Gert your username"} />
    <div className={styles.signinWrapper}>
      <span className={styles.hasInvite}>Have an invite text ?</span>
      <Link style={signInLinkStyle} to="/login">Sign In</Link>
    </div>
    </Card>
    
    {/* <div className={`${styles.card}`}>
    <div  className={`${styles.headingWrapper}`}>
    <img src="/images/logo.png " alt="" />
    <h1 className={styles.heading}> Welcome to CodersClub!</h1>
    </div>

    <p className={styles.text}>
      Discuss your bugs or help other coders who are stuck by sharing solutions and experiences
    </p>
    <div>
      <button>
        <span>Get your username</span>
        <img src="/images/arrow-forward.png" alt="Get username" />
      </button>
    </div>
    <div>
      <span>Have an invite text ?</span>
      <Link to="/login">Sign In</Link>
    </div>
  </div> */}
  </div>)
};
export default Home
import React from 'react';
import { useHistory } from 'react-router-dom';
import MinecraftLogo from '../../assets/img/logo.png';
import SearchBar from '../Misc/SearchBar';
import {StyleSheet, css} from 'aphrodite'


const HeaderNav = (props) => {
  const history = useHistory();
  const { setRegister, setLogin } = props


  return (
    <div className={css(styles.headerNav)}>
      <img src={MinecraftLogo} className={css(styles.logoStyle)} alt='' />
      <SearchBar />
      <ul className={css(styles.navLink)}>
        <li onClick={() => history.push('/')}>Home</li>
        <li onClick={() => history.push('/marketplace')}>Marketplace</li>
        <li onClick={() => history.push('/stats')}>Stats</li>
        <li onClick={() => history.push('/contact')}>Contact Us</li>
      </ul>
      <ul className={css(styles.navLink)}>
        <li className={css(styles.signIn)} onClick={() => setLogin(true)}>Login</li>
        <li className={css(styles.signUp)} onClick={() => setRegister(true)}>Register</li>
      </ul>
    </div>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    marginLeft: '10px',
    width: '135px',
    height: '40px',
  },
  headerNav: {
    display: 'flex',
    backgroundColor: 'white',
    height: '60px',
    width: '100%',
    position: 'fixed',
    zIndex: '5',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, .3)',
    ':nth-child(1n) > ul': {
      display: 'flex',
      listStyle: 'none',
      justifyContent: 'space-between',
      width: '160px',
      fontWeight: '600',
    },
    ':nth-child(1n) > ul:first-of-type': {
      width: '350px'
    },
  },
  navLink: {
    marginRight: '10px',
    ':nth-child(1n) > li': {
      cursor: 'pointer',
      transition: '.3s'
    },
    ':nth-child(1n) > li:hover': {
      transform: 'scale(1.1)'
    },
  },
  signUp: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
    width: '80px',
    transition: '.3s',
    backgroundColor: 'white',
    cursor: 'pointer',
    marginRight: '5px',
    color: 'rgb(28,157,230)'
  },
  signIn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
    width: '80px',
    transition: '.3s',
    backgroundColor: 'white',
    cursor: 'pointer',
  }
})

export default HeaderNav;

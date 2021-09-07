import React, { useRef, useEffect, useState } from 'react';
import {StyleSheet, css} from 'aphrodite'
import gsap from 'gsap'

const Loader = () => {
  const loader = useRef();

  useEffect(() => {            
    gsap.to(loader.current, {rotate: 360, repeat: -1, duration: 1, ease: 'none'})
    
  });

  return (
    <div>
      <div className={css(styles.loader)} ref={loader}>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  loader: {
    border: '4px solid rgb(109, 169, 29)',
    width: '100px',
    height: '100px',
    borderRadius: '100%',
    ':after': {
      content: '""',
      display: 'block',
      width: '100px',
      height: '100px',
      background: 'white',
      position: 'relative',
      top: '-50px',
      left: '-50px'
    }
  }
})

export default Loader;

import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import Gift from './GetFinder';
import styles from './Header.module.css'

export default function Header() {
  return (
    <header>
        <section>
           <div className={`${styles.container} ${styles.header__parent}`}>
              <Logo/> 
              <Nav/>
              <Gift/>
           </div>
        </section>
    </header>
  )
}

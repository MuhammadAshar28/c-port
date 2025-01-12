"use client"; // Add this line at the very top
import AOS from 'aos';
import 'aos/dist/aos.css';


import {  useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import Wrapper from '../gadgets/Wrapper';

export default function Header() {

useEffect(() => { 
  AOS.init({ }); 
}, []);



  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>

    <header className={styles.header}>
      <div className={styles.logo} data-aos="fade-right">
        <Link href="/">M.A</Link>
      </div>
      <nav  >
        <ul className={`${styles.navlinks} ${isOpen ? styles.active : ''}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button className={styles.menubutton} onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </button>
      </nav>
    </header>
    </Wrapper>
  );
}

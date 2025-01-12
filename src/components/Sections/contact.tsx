"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './contsec.module.css'; // Adjust the path as necessary
import TypedWrapper from '../gadgets/Typed';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import Wrapper from '../gadgets/Wrapper';

const Contact: React.FC = () => {
  useEffect(() => { 
    AOS.init({ }); 
  }, []);
    return (
      <Wrapper>

        <section data-aos="zoom-in-down">

        
        <div className={styles.typedWrapper}>

<TypedWrapper strings={["Hire me", "Lets talk"]} />
</div>
       
        <div className={styles.contactlinkscontainer}>
        <h2>
            CONTACT ME
        </h2>


        <div className={styles.contactlinks}>


        <Link 
        href="https://www.linkedin.com/in/muhammad-ashar-827262320" 
        target="_blank" 
        className={styles.contactlink}
        >
        <FaLinkedin className={styles.contacticon} />
        LinkedIn
      </Link>
      <Link 
        href="mailto:m.ashar2817@gmail.com" 
        className={styles.contactlink}
        >
        <FaEnvelope className={styles.contacticon} />
        m.ashar2817@gmail.com
      </Link>
        </div>
      </div>
      <div
        className="my-16 border-t border-gray-700  py-0">
      </div>
          </section>
          </Wrapper>
    );
};

export default Contact;
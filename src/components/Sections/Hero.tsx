"use client"

import React, { useEffect } from 'react';
import styles from '@/components/Sections/first.module.css';
import Image from "next/image"
import Wrapper from '../gadgets/Wrapper';
import TypedWrapper from '../gadgets/Typed';
import AOS from "aos"


const Hero: React.FC = () => {
useEffect(() => { 
  AOS.init({ }); 
}, []);


  return (
    <Wrapper>

    <section className={styles.hero} data-aos="zoom-in-up">
      <div className={styles.heroContent}>
        <h1>
          hi! I m <br /> Muhammad Ashar
          <div className={styles.typedWrapper}>

        <TypedWrapper strings={["Jam-Stack Developer", "Prompt Engineer"]} />
          </div>
        </h1>
        <p>I am dedicated to making the outdoors more accessible, inspiring individuals to explore the beauty of nature and the excitement of climbing. With expertise and high-quality gear, I empower adventurers of all levels to embark on unforgettable journeys.</p>
        <a href="/contact" className={styles.ctaButton}>Hire Me</a>
      </div>
      <div className={styles.heroImage}>
        <Image src="/herosec.jpeg" alt="Your Face" width={400} height={400} />
      </div>
      
    </section>
    </Wrapper>
  
  );
};

export default Hero;

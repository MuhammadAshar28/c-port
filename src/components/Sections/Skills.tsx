"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaBlogger, } from 'react-icons/fa';
import { SiNextdotjs as FaNext, SiTailwindcss, SiTypescript } from 'react-icons/si';
import styles from './skilsec.module.css';
import Wrapper from '../gadgets/Wrapper';
import TypedWrapper from '../gadgets/Typed';

const Skills: React.FC = () => {
useEffect(() => { 
  AOS.init({ }); 
}, []);

    const skills = [
        { name: 'React', icon: <FaReact className={styles.icon} /> },
        { name: 'Node.js', icon: <FaNodeJs className={styles.icon} /> },
        { name: 'Database', icon: <FaDatabase className={styles.icon} /> },
        { name: 'HTML5', icon: <FaHtml5 className={styles.icon} /> },
        { name: 'CSS', icon: <FaCss3Alt className={styles.icon} /> },
        { name: 'JavaScript', icon: <FaJsSquare className={styles.icon} /> },
        { name: 'Nextjs', icon: <FaNext className={styles.icon} /> },
        { name: 'TypeScript', icon: <SiTypescript className={styles.icon} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className={styles.icon} /> },
        { name: 'Blogger', icon: <FaBlogger className={styles.icon} /> }
    ];



    return (
        <Wrapper>
             <div 
        className="my-16 border-t border-gray-700  py-0">
      </div>

            <section className={styles.skillsSection} data-aos="zoom-in-down">
                <h2 className={styles.title}>
                    <div className={styles.typedWrapper}>

                        <TypedWrapper strings={["Expertise And Skills", "Core Competencies"]} />
                    </div>
                </h2>
                <div className={styles.skillsGrid}>
                    {skills.map((skill, index) => (
                        <div key={index} className={styles.skillCard}>
                            <div className={styles.skillIcon}>{skill.icon}</div>
                            <h3 className={styles.skillName}>{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
                <div
        className="my-16 border-t border-gray-700  py-0">
      </div>
        </Wrapper>
    );
};

export default Skills;

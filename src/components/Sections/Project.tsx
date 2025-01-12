"use client"

import Link from "next/link";
import TypedWrapper from "../gadgets/Typed";
import Wrapper from "../gadgets/Wrapper";
import Styles from "./project.module.css"; // Assuming you have your styles here
import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Define the interface for each box's content
interface BoxContent {
  title: string;
  description: string;
  checkitOut: string;
  imagePath: string;
  altText: string;
  link: string;
}

// Sample data for each box
const boxes: BoxContent[] = [
  {
    title: "Dynamic Resume Builder",
    description: "Make some work winning proficient resume effectively with this resume builder.",
    imagePath: "/resume.png",
    checkitOut: "Check Out",
    altText: "Adventure Awaits",
    link: "https://resume-5-kappa.vercel.app/"
  },
  {
    title: "Furnioweb",
    description: "Find the perfect furniture to elevate your outdoor experience to new heights.",
    imagePath: "/furnio.png",
    checkitOut: "Check Out",
    altText: "furniture",
    link: "https://steady-cassata-f56420.netlify.app/"
  },
  {
    title: "Gbob",
    description: "Connect with like-minded adventurers and share your journey.",
    imagePath: "/gbob.png",
    checkitOut: "Check Out",
    altText: "Join the Community",
    link: "https://gbob-seven.vercel.app/"
  },
];

const Projectsection: React.FC = () => {
useEffect(() => { 
  AOS.init({ }); 
}, []);

  return (
    <Wrapper>
      <section data-aos="zoom-in-left">
        <h1 className={Styles.h1}>
          <TypedWrapper strings={["My Projects", "About My Previous Work"]} />
        </h1>

        <div className={Styles.mainbox}>
          {boxes.map((box, index) => (
            <div key={index} className={Styles.box}>
              <Image
                src={box.imagePath}
                alt={box.altText}
                width={400}
                height={400}
              />
              <h3>{box.title}</h3>
              <p>{box.description}</p>
              
              {/* Link wrapping the button to make it a clickable link */}
              <Link href={box.link} passHref>
                <button className={Styles.buttonStyle}>
                  {Styles.checkitOut}
                  Checkout
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className={Styles.buttonContainerStyle}>
            <Link href="/more" className={Styles.buttonStyle}>
                Show More
            </Link>
        </div>
      </section>
    </Wrapper>
  );
};

export default Projectsection;

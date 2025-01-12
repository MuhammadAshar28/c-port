"use client"
import Image from "next/image"
import styles from "./absec.module.css"
import Wrapper from "../gadgets/Wrapper"
import TypedWrapper from "../gadgets/Typed"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Aboutsection = () => {
  useEffect(() => { 
    AOS.init({ }); 
  }, []);
  
  return (
    <Wrapper>

      <div data-aos="flip-right">
        <div
          className="my-16 border-t border-gray-700  py-0">
        </div>
        <div className={styles.container}>
          <h1 className={styles.h1}>
            <div>
            <TypedWrapper strings={["About Me", "Who I Am"]} />
            </div>
          </h1>
          <div className={styles.box}>
            <div className={styles.text}>

              <p className={styles.p}>
                Im a passionate advocate for making the outdoors more accessible to everyone. My mission is to inspire others to experience the beauty of nature and the thrill of climbing. Whether you re an experienced climber or just starting out, I m here to provide the guidance, gear, and expertise you need to embark on your next adventure.
              </p>
              <p>

                I strive to design and offer products that elevate every outdoor experience, ensuring you re ready for whatever challenges nature throws your way.
              </p>
              <p>

                Join me in pushing the limits of exploration, embracing the challenges of the wild, and building a vibrant community that shares the same passion for climbing and outdoor activities. Together, we can reach new heights.
              </p>

            </div>
            <Image
              src="/herosec.jpeg"
              alt="About Image"
              width={400}
              height={400}
              className={styles.image} />
          </div>
        </div>
      </div>
      <div
        className="my-16 border-t border-gray-700  py-0">
      </div>
    </Wrapper>
  )
}
export default Aboutsection
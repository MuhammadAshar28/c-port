// pages/about.tsx
import Image from "next/image"
import styles from './About.module.css';
import TypedWrapper from "@/components/gadgets/Typed";
import Wrapper from "@/components/gadgets/Wrapper";

const About = () => {
  return (
    <Wrapper>

      <div>
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
                I m a passionate advocate for making the outdoors more accessible to everyone. My mission is to inspire others to experience the beauty of nature and the thrill of climbing. Whether you re an experienced climber or just starting out, I m here to provide the guidance, gear, and expertise you need to embark on your next adventure.
              </p>
              <p className={styles.p}>

                I strive to design and offer products that elevate every outdoor experience, ensuring you re ready for whatever challenges nature throws your way.
              </p>
              <p className={styles.p}>

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
  );
};

export default About;

import Link from "next/link";
import TypedWrapper from "@/components/gadgets/Typed";
import Wrapper from "@/components/gadgets/Wrapper";
import Styles from "./page.module.css";
import Image from "next/image";

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
  return (
    <Wrapper>
      <section>
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
              <Link href={box.link} passHref target="blank">
                <button className={Styles.blurrybutton}>
                  {box.checkitOut}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Projectsection;

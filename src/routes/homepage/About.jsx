import { motion } from "framer-motion";
import AboutImg from "./../../assets/nu.jpg";
import "./../../css/sections/homepage/About.css";

export default function About() {

  return (
    <div className="aboutSection" id="about">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img className="aboutImg" src={AboutImg} alt="Narayan Uncle lawyer" />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="aboutText__section"
      >
        <p className="lawyerAbout">Attorney</p>
        <h2 className="h2About">Narayan P. Bhandari</h2>
        <p className="aboutText">
          I am a lawyer specializing in civil and commercial matters. 
          I help clients resolve difficult legal issues and offer support
           in making key business decisions.
        </p>
        <hr className="hrElement" />
        <h4 className="educationTitle">Experience</h4>
        <p className="educationAbout">
          I have extensive experience working with individual and corporate clients.
           I have participated in negotiating international agreements and handled complex
            court cases that required a precise approach and in-depth legal knowledge.
        </p>
        <h4 className="educationTitle">Education</h4>
        <p className="educationAbout">
          I graduated with a law degree from a renowned university, specializing in civil and commercial law.
           Throughout my career, I have also completed numerous continuing education courses that have allowed
            me to deepen my knowledge in the areas of mediation and arbitration.

 <br />
        </p>
      </motion.div>
    </div>
  );
}

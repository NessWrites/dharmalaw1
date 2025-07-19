import { motion } from "framer-motion";
import "./../../css/sections/homepage/Mission.css";

export default function Mission() {
  return (
    <section
      className="missionSection"
      id="mission"
      aria-labelledby="mission-heading"
      role="region"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        onViewportEnter={() => console.log("Animation triggered!")}
      >
        <h2 id="mission-heading" className="missionTitle subheading">
          We care about <br />
          our customers
        </h2>
      </motion.div>

      <hr className="hrElement" aria-hidden="true" />

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        viewport={{ once: false, amount: 0.1 }}
        className="missionText__section"
      >
        <p className="missionText">
          With over decade of legal experience, our firm is guided by a 
          steadfast commitment to integrity, precision, and client advocacy.
           We strive to provide comprehensive, solution-oriented legal services 
           in the areas of immigration, real estate, civil law, labor law, and
            personal data protection. Our mission is to uphold the rule of law
             while empowering individuals and businesses to navigate complex 
             legal landscapes with confidence. Through unwavering focus,
              personalized attention, and an in-depth understanding of 
              evolving regulations, we aim to deliver outcomes that not only 
              meet legal standards but protect our clients’ long-term interests
               with diligence and discretion.
        </p>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        viewport={{ once: true, amount: 0.4 }}
        className="missionButton__section"
      >
        <button
          className="missionButton"
          onClick={() => {
            const element = document.getElementById("contact");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Przejdź do sekcji kontaktowej"
        >
          <span aria-hidden="true">Contact</span>
        </button>
      </motion.div>
    </section>
  );
}
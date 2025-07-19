import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import civilIcon from "./../../assets/icons/civilIcon.svg";
import economIcon from "./../../assets/icons/economicIcon.svg";
import estateIcon from "./../../assets/icons/estateIcon.svg";
import familyIcon from "./../../assets/icons/familyIcon.svg";
import jobIcon from "./../../assets/icons/jobIcon.svg";
import dataIcon from "./../../assets/icons/personaldataIcon.svg";
import "./../../css/sections/homepage/Expertise.css";

export default function Expertise() {
  return (
    <section
      className="expertiseSection"
      id="expertise"
      aria-labelledby="expertise-heading"
      role="region"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 id="expertise-heading" className="expertiseTitle subheading">
         Our Areas of Expertise
        </h2>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="gridSection">
          {[
            {
              icon: civilIcon,
              alt: "Ikona przedstawiająca prawo cywilne",
              to: "/prawo-cywilne",
              title: "Civil Law",
              description:
                "We handle matters related to contract drafting and negotiation, claim and compensation claims, and the protection of personal rights. I represent clients in civil cases before courts and during mediation.",
            },
            {
              icon: familyIcon,
              alt: "Ikona przedstawiająca prawo rodzinne",
              to: "/prawo-rodzinne",
              title: "Family Law",
              description:
                "We assist clients with divorce matters, child custody, alimony, and property division. I also handle family disputes, providing support during difficult life situations.",
            },
            {
              icon: economIcon,
              alt: "Ikona przedstawiająca prawo gospodarcze",
              to: "/prawo-gospodarcze",
              title: "Commercial Law",
              description:
                "We advise companies on drafting commercial contracts, company transformations, and commercial disputes. I support businesses at every stage of their operations, ensuring compliance with legal regulations.",
            },
            {
              icon: jobIcon,
              alt: "Ikona przedstawiająca prawo pracy",
              to: "/prawo-pracy",
              title: "Labor Law",
              description:
                "We represent both employees and employers in matters relating to employment contracts, dismissals, labor disputes, and mobbing. I also advise on rights and obligations arising from the Labor Code..",
            },
            {
              icon: estateIcon,
              alt: "Ikona przedstawiająca prawo nieruchomości",
              to: "/prawo-nieruchomosci",
              title: "Real estate Law",
              description:
                "I offer comprehensive legal assistance in real estate purchases, sales, and rentals, as well as property disputes. I assist in drafting contracts, negotiating, and handling real estate litigation.",
            },
            {
              icon: dataIcon,
              alt: "Ikona przedstawiająca ochronę danych osobowych",
              to: "/prawo-danych",
              title: "Personal Data Protection Law",
              description:
                "I provide consulting services on personal data protection regulations (GDPR). I help companies comply with legal requirements, develop privacy policies, and protect customer data.",
            },
          ].map((item, index) => (
            <Link className="gridElement" key={index} to={item.to}>
              <img className="gridImg" src={item.icon} alt={item.alt} />
              <h3 className="lawTitle">{item.title}</h3>
              <p className="lawDescription">{item.description}</p>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
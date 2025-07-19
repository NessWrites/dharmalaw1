import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/Error.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./routes/homepage/Home.jsx";
import LoadingPage from "./components/LoadingPage.jsx";
import SubPage from "./routes/subpage/SubPage.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3300);
    console.log.apply(console, [
      "%c Ness",
      "color: white" +
        "; background: padding:5px 0; border-radius: 5px; font-weight: bold; background-color: #897455;",
    ]);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  const pages = [
    {
      path: "/prawo-cywilne",
      title: "Civil Law",
      description:
        "At my law firm, I provide comprehensive civil law services, including drafting and analyzing contracts, pursuing claims, and representing clients in court. I assist in resolving disputes involving obligations, compensation, and the protection of personal rights. My goal is to ensure effective protection of clients' rights and support in negotiations and mediation.",
      subTitle: "My assistance in civil law includes:",
      ulSubpage: [
        "preparing and reviewing civil law contracts",
        "advice on matters relating to property rights and obligations",
        "conducting court cases related to the pursuit of civil claims",
        "representing clients in cases of compensation and redress",
        "assistance in inheritance matters, division of property, and establishing rights to real estate",
        "mediation and negotiations aimed at amicable resolution of disputes",
      ],
    },
    {
      path: "/prawo-rodzinne",
      title: "Family Law",
      description:
        "At my law firm, I handle divorce, separation, and property division cases, ensuring the best interests of my clients at every stage of the proceedings. I provide support in matters related to parental authority, establishing contact with children, and alimony. Additionally, I assist in resolving disputes concerning the establishment or denial of paternity and represent clients in adoption processes.",
      subTitle: "My assistance in family law includes:",
      ulSubpage: [
        "handling divorce, separation, and property division cases",
        "advising and representing in matters concerning parental authority and establishing contact with children",
        "assistance in alimony matters, including pursuing and enforcing alimony",
        "representing clients in cases involving compensation and redress",
        "resolving disputes related to the establishment or denial of paternity",
        "support in adoption processes and foster care",
        "family mediation aimed at amicable conflict resolution",
      ],
    },
    {
      path: "/prawo-gospodarcze",
      title: "Commercial Law",
      description:
        "At my law firm, I provide advisory services for the establishment, transformation, and liquidation of companies, as well as drafting commercial contracts tailored to clients' needs. I represent entrepreneurs in commercial disputes before courts and in negotiations with business partners. Additionally, I support clients in matters related to the liability of board members and the protection of trade secrets.",
      subTitle: "My assistance in commercial law includes:",
      ulSubpage: [
        "advisory services for the establishment, transformation, and liquidation of companies and other business entities",
        "drafting and reviewing commercial contracts, including agreements with business partners",
        "representation in commercial disputes before courts and arbitration",
        "support in negotiations and mediations related to business disputes",
        "assistance in matters concerning the liability of board members and company bodies",
        "advisory services on competition law, protection of trade secrets, and combating unfair competition",
      ],
    },
    {
      path: "/prawo-danych",
      title: "Data Protection Law",
      description:
        "At my law firm, I provide advisory services on compliance with GDPR and national regulations regarding personal data protection. I assist clients in preparing and implementing data protection policies and conducting audits to assess risks related to data processing. I also represent clients in proceedings before supervisory authorities, including the President of the Personal Data Protection Office.",
      subTitle: "My assistance in data protection law includes:",
      ulSubpage: [
        "advisory services on compliance with GDPR and national personal data protection regulations",
        "preparing and implementing personal data protection policies, procedures, and information clauses",
        "conducting internal audits and assessing risks related to data processing",
        "representation before supervisory authorities, including the President of the Personal Data Protection Office (UODO)",
        "support in reporting data protection breaches and managing incidents",
        "training for employees and management on personal data protection",
      ],
    },
    {
      path: "/prawo-pracy",
      title: "Labor Law",
      description:
        "At my law firm, I provide advisory services on matters related to the establishment and termination of employment contracts, including disputes over wrongful terminations. I represent clients in proceedings concerning mobbing, discrimination, and other violations of employee rights. Additionally, I draft and review work regulations and support entrepreneurs in matters related to workplace reorganization and collective redundancies.",
      subTitle: "My assistance in labor law includes:",
      ulSubpage: [
        "advisory services on the establishment, amendment, and termination of employment contracts",
        "representation in labor disputes, including cases for reinstatement and compensation",
        "assistance in disputes concerning mobbing, discrimination, and other violations of employee rights",
        "drafting and reviewing work regulations, remuneration policies, and other internal documents",
        "support in matters related to working hours, remuneration, and leaves",
        "mediation and negotiations aimed at amicable resolution of disputes",
      ],
    },
    {
      path: "/prawo-nieruchomosci",
      title: "Real Estate Law",
      description:
        "At my law firm, I provide legal advisory services for transactions involving the purchase, sale, and lease of real estate, ensuring compliance with legal regulations. I represent clients in disputes concerning property rights, acquisitive prescription, and the abolition of co-ownership. Additionally, I assist in matters related to perpetual usufruct, easements, and claims arising from violations of property rights.",
      subTitle: "My assistance in real estate law includes:",
      ulSubpage: [
        "legal advisory services for the purchase, sale, and lease of real estate",
        "drafting and reviewing developer agreements, sales, and lease contracts",
        "assistance in matters concerning perpetual usufruct, easements, and mortgages",
        "representation in cases related to property rights, acquisitive prescription, and abolition of co-ownership",
        "support in proceedings concerning claims for violation of possession or property rights",
        "handling matters related to construction investments and spatial planning",
      ],
    },
  ];

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {pages.map((page, index) => (
            <Route
              key={index}
              path={page.path}
              element={
                <SubPage
                  title={page.title}
                  description={page.description}
                  subTitle={page.subTitle}
                  items={page.ulSubpage}
                />
              }
            />
          ))}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
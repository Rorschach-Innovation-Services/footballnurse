import { Container } from "@mantine/core";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { Helmet } from "react-helmet";
import LogoIcon from "../assets/images/logo.svg";
import BGBlotch from "../assets/images/bg-blotch.svg";
import NurseBG from "../assets/images/Nurse-bg.png";
import CrossIcon from "../assets/images/cross.svg";
import WhistleIcon from "../assets/images/whistle.svg";
import GraphIcon from "../assets/images/graph.svg";
import PlayerIcon from "../assets/images/players-01.png";
import Player2Icon from "../assets/images/player-02.png";
import NurseIcon from "../assets/images/nurse-01.png";
import MainNurseIcon from "../assets/images/nurse.jpg";
import DoctorIcon from "../assets/images/doctor.jpg";
import RorschachLogo from "../assets/images/rorschach-logo.svg";
import NtombiLogo from "../assets/images/ntombi-logo.svg";
import PhsyioIcon from "../assets/images/physio.jpg";
import KamuzuLogo from "../assets/images/kamuzu-logo.svg";
import "./style.css";
import soccerImage from "../assets/images/soccer-bg.jpg";

export const HomeNavBar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="primary-header flex">
      <div className="logo">
        <img src={LogoIcon} alt="Kamuzu University Logo" height="80px" />
      </div>

      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={() => {
          const primaryNav = document.querySelector(".primary-navigation");
          const navToggle = document.querySelector(".mobile-nav-toggle");
          if (primaryNav && navToggle) {
            const visibility = primaryNav.getAttribute("data-visible");
            if (visibility === "false") {
              primaryNav.setAttribute("data-visible", "true");
              navToggle.setAttribute("aria-expanded", "true");
            } else if (visibility === "true") {
              primaryNav.setAttribute("data-visible", "false");
              navToggle.setAttribute("aria-expanded", "false");
            }
          }
        }}
      >
        <span className="sr-only">Menu</span>
      </button>

      <nav>
        <ul
          id="primary-navigation"
          data-visible="false"
          className="primary-navigation flex"
        >
          <li className="active">
            <a href="#" onClick={() => scrollToSection("home-anchor")}>
              <span aria-hidden="true">Home</span>
            </a>
          </li>

          <li className="active">
            <a href="#" onClick={() => scrollToSection("about-section")}>
              <span aria-hidden="true">Vision</span>
            </a>
          </li>

          <li className="active">
            <a href="#" onClick={() => scrollToSection("feature")}>
              <span aria-hidden="true">Features</span>
            </a>
          </li>

          <li className="active">
            <Link to="/contact-us">
              <span aria-hidden="true">Contact Us</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Helmet>
        <title>HOME | Football Nurse</title>
      </Helmet>
      <article className="homepage" id="top-section">
        <HomeNavBar />
        <section className="hero-background">
          <div className="blob-container">
            <img src={BGBlotch} />
          </div>

          <div className="hero-container">
            <div className="hero-row" id="home-anchor">
              <div
                className="hero-col-2"
                style={{
                  order: matches ? 1 : undefined,
                }}
              >
                <h1>Injury surveillance and coaching nurse platform</h1>
                <p>
                  The platform is designed to empower coaches and nurses to
                  detect, prevent and manage injuries through a season using
                  real-time data. Coaches are are able to plan their practices,
                  select their team sheet, and develop a database of results to
                  improve their performance through the season.{" "}
                </p>
                <Container
                  sx={{
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexWrap: "nowrap",
                    gap: "10px",
                  }}
                >
                  <Link to="/contact-us" className="btn 1">
                    Register
                  </Link>
                  <a href="#" className="btn 2" onClick={() => scrollToSection("about-section")}>
                    Learn more...
                  </a>
                </Container>
              </div>

              <div className="hero-col-2">
                <img src={NurseBG} />
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="text-container" id="our-business">
            <div className="text-wrapper show-on-scroll">
              <div className="icon-left">
                <img src={CrossIcon} width="40px" height="40px" />
              </div>

              <h3>Empowering Clinicians</h3>

              <p>
                {" "}
                The platform allows clinicians (nurses, doctors,
                physiotherapists, biokinetics, etc) to manage a football athlete
                based on clinicial guidelines.
              </p>
            </div>

            <div className="text-wrapper show-on-scroll">
              <div className="icon-left">
                <img
                  src={WhistleIcon}
                  width="40px"
                  height="40px"
                  color="#FD8F05"
                />
              </div>

              <h3>Built for Coaches </h3>

              <p>
                The platform is built for coaches. Their is capabilities to plan
                practices, manage team lists and fixtures, and finally, build a
                data-base of results to improve performance.{" "}
              </p>
            </div>

            <div className="text-wrapper show-on-scroll">
              <div className="icon-left">
                <img src={GraphIcon} width="40px" height="40px" />
              </div>

              <h3>Data Driven Decision-Making</h3>

              <p>
                For the first-time, the clinical, performance, and team
                management data sit in a single database for the management team
                to access.
              </p>
            </div>
          </div>
        </section>

        <section id="about-section">
          <div className="aboutus-container">
            <div className="about-intro">
              <h2>The Vision of the Football Nurse Study</h2>
              <p>
                Women’s football is growing in popularity, talent, and
                participation. Despite the growth, female athlete continues to
                be underserved in terms of resources. Kamuzu University, in
                collaboration with Ntombi Sports and Rorschach Innovation
                services, aims to improve the current sports medicine practices
                in women’s football and innovate to create a sustainable
                solution for the industry. The project aims to evaluate the
                influence of trained nurses as first responders on sports
                injury-related outcomes in women’s football teams.{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="features" id="feature">
          <h2>The result</h2>

          <div className="row">
            <div className="col-2">
              <img src={PlayerIcon} alt="" />
            </div>

            <div className="col-2">
              <h3>
                Simplified player to patient management and injury readiness
                surveillance
              </h3>
              <p>
                By allowing medical professionals the ability to conduct an
                overall readiness report and out side impacts that may impede
                player performance.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-2" style={matches ? { order: 1 } : undefined}>
              <h3>
                Better Understanding of
                <br /> Athlete Care{" "}
              </h3>
              <p>
                The platform allows for a user-friendly data collection platform
                and designed for the African continent by an African university
                and collaborators.
              </p>
            </div>

            <div className="col-2">
              <img src={Player2Icon} alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <img src={NurseIcon} alt="" />
            </div>

            <div className="col-2">
              <h3>Analyse comprehensive accurate athlete data</h3>
              <p>
                The injury surveillance software helps coaches, nurses, and
                administrators manage injuries within their teams. It provides
                real-time data to inform coaches on the status of their
                athletes. The data is exportable to allow teams to generate
                their insights.
              </p>
            </div>
          </div>
        </section>

        <section className="big-container">
          <div
            className="soccer-bg"
            style={{
              backgroundImage: `url(${soccerImage})`,
            }}
          >
            <h4>
              Develop best-in-className injury surveillance and prevention
              program accredited by FIFA
            </h4>
          </div>

          <div className="overlay"></div>
        </section>
        <section className="approach-center">
          <h1 className="platform-heading">What our platform can do</h1>

          <div className="approach-container">
            <div className="approach-wrapper show-on-scroll">
              <div className="image-center">
                <img src={MainNurseIcon} />
              </div>

              <h3>Nurse work management</h3>

              <p>
                The platform allows nurses to act as first responders to female
                football athletes. The platform provides structured screening
                and management tools to improve clinical outcomes.{" "}
              </p>
            </div>

            <div className="approach-wrapper show-on-scroll">
              <div className="image-center">
                <img src={DoctorIcon} />
              </div>

              <h3>Doctor work management</h3>

              <p>
                The platform empowers doctors to access the nurses clinical
                notes digitally, and provide clincal interventions.
              </p>
            </div>

            <div className="approach-wrapper show-on-scroll">
              <div className="image-center">
                <img src={PhsyioIcon} />
              </div>

              <h3>Physiotherapists work management</h3>

              <p>
                The platform allows physiotherapists to integrate into the
                clinical team by capturing clinical management of the athlete
                and seeming less communicating with doctors and nurses.{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="collaborators">
          <h3 className="collab-heading">Collaborators</h3>

          <div className="collab-container">
            <div className="collab-wrapper">
              <div className="collab-image-container">
                <img src={NtombiLogo} />
              </div>
            </div>

            <div className="collab-wrapper">
              <div className="collab-image-container">
                <img src={KamuzuLogo} />
              </div>
            </div>

            <div className="collab-wrapper">
              <div className="collab-image-container">
                <img src={RorschachLogo} />
              </div>
            </div>
          </div>
        </section>
      </article>
      <HomeFooter />
    </>
  );
};

export const HomeFooter = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="footer-container">
        <div className="footer-wrapper">
          <img src={LogoIcon} height="60px" />

          <p>Lets get started!</p>
        </div>
      </section>

      <div className="copyright">
        <p>
          © 2022 All Rights Reseverved. Project Developed and created by:
          Rorschach Innovation Services
        </p>
      </div>

      <a className="gototop" href="#" onClick={() => scrollToSection("home-anchor")}>
        <i className="fas fa-arrow-up" style={{ color: "black" }}></i>
      </a>
    </>
  );
};

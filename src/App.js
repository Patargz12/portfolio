import { useState, useEffect, useRef } from "react";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Education from "./Education";
import Work from "./Work";
import Programming from "./Programming";
import Projects from "./Project";
import Testimonials from "./Testimonial";
import Contact from "./Contact";
import Typed from "typed.js";
import { Helmet } from "react-helmet";

import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

function App() {
  const [education, seteducation] = useState(true);
  const [workhistory, setworkhistory] = useState(false);
  const [programming, setprogramming] = useState(false);
  const [projects, setprojects] = useState(false);
  const [opennav, setopennav] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Enthusiastic Dev", "Full Stack Developer", "PHP Developer"],
      startDelay: 0,
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      autoInsertCss: true,
      cursorChar: "|",
    });
    return () => {
      typed.destroy();
    };
  }, []);
  const el = useRef(null);
  function setAllFalse() {
    seteducation(false);
    setworkhistory(false);
    setprogramming(false);
    setprojects(false);
  }

  function ChangeState(function1, state1) {
    setAllFalse();
    function1(state1);
  }

  // document.addEventListener("DOMContentLoaded", function () {
  //   var nav = document.querySelectorById("#navbar");
  //   var scrollPrev = window.scrollY;

  //   window.addEventListener("scroll", function () {
  //     var scrollCur = window.scrollY;

  //     if (scrollCur > scrollPrev) {
  //       // Scrolling down
  //       nav.classList.add("navbar-collapsed");
  //     } else {
  //       // Scrolling up
  //       nav.classList.remove("navbar-collapsed");
  //     }

  //     scrollPrev = scrollCur;
  //   });
  // });

  // document.addEventListener("DOMContentLoaded", function () {
  //   window.addEventListener("scroll", function () {
  //     // Your scroll detection logic here
  //     console.log("User is scrolling!");
  //   });
  // });

  document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!");
  });

  return (
    <div className="App">
      <div className="navbar-option-mobile bg-new">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex align-items-center justify-content-center">
            <img src="/img/pat_logo.png" />
          </span>
          <div className="bars mx-4" onClick={() => setopennav(!opennav)}></div>{" "}
        </div>
      </div>
      <nav
        className={
          !opennav
            ? "d-flex px-9 navbar-new py-5 flex-rows bg-new transition-all"
            : "d-flex px-9 navbar-fixed-new py-5 flex-rows bg-new transition-all"
        }
      >
        <span class="brand-name ">
          <img src="/img/pat_logo.png" height={"80px"} width={"80px"} />
        </span>
        <div className="d-flex flex-rows justify-content-center align-items-center">
          <a
            href="#home"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Home
          </a>
          <a
            href="#resume"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Resume
          </a>
          <a
            href="#aboutme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            About me
          </a>
          <a
            href="#testimonial"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Testimonial
          </a>
          <a
            href="#contactme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Contact Me
          </a>
        </div>
      </nav>

      <div className="herosection px-10 py-2" id="home">
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section animate__animated animate__fadeInTopLeft">
              <span className="Im-text">
                Hello, I'm <span className="name-Im-text">Patrick Arganza</span>
              </span>
              <span
                className="Im-text-enthusiastic py-2"
                ref={el}
                style={{ minHeight: "79px" }}
              >
                {/* Enthusiastic Dev 😎 */}
              </span>
              <span className="Im-text-subheading ">
                Knack of building applications with front and back end
                operations
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a href="#contactme" className="btn-hire-me">
                  Hire me
                </a>
                <a
                  href="https://asset.cloudinary.com/ddyyun38j/738aa3caad793b1912ef3a38bbcfe857"
                  className="btn-resume-me"
                  target="_blank"
                >
                  Get Resume
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center">
              <img
                className="img-fluid custom-img animate__animated animate__fadeInTopRight"
                alt="heroimage"
                src="img/pat_picture.jpg"
              ></img>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>

      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span
            className="about-me-text animate__animated animate__fadeInDown"
            id="aboutme"
          >
            {" "}
            About me{" "}
          </span>
          <span
            className="why-text-sub animate__animated animate__fadeInDown "
            data-aos="fade-up"
          >
            {" "}
            Why choose me?{" "}
          </span>
          <div className="row justify-content-center shadow-lg my-5 ">
            <div
              className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center "
              data-aos="zoom-in-down"
            >
              {/* <img style={{ width: "500px", height: "500px" }} src = "img/about_animation.gif" alt='about_img'></img>     */}
              <dotlottie-player
                className="lottie-1"
                src="https://lottie.host/0177eb4f-173a-4a16-848d-16d5c8c18676/OcUlM9V0yF.json"
                background="transparent"
                speed="1"
                // style= {{width: '500px', height: '500px'}}
                loop
                autoplay
              ></dotlottie-player>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column"
              data-aos="zoom-in"
              data-aos-delay="10000"
            >
              <br />

              <span className="some-text-about-me mx-5">
                A full stack Web developer with background knowledge in PHP
                frameworks like Laravel, CodeIgniter and other JS Frameworks
                like NextJS and ReactJS. Adequate knowledge in mobile
                development using Flutter and React Native. Also created a
                project with Machine Learning and Artificial Intelligence using
                CNN algorithm.
              </span>
              <span className="few-highlights mt-5 mx-5">
                <span className="few-text">Here are few highlights</span>
                <span className="few-text">
                  <ul>
                    <li>Full Stack Web Development</li>
                    <li>Interactive and Front End as per the design</li>
                    <li>Android Studio, Flutter, React Native</li>
                    <li>Node JS, Express, MongoDB</li>
                    <li>Docker, Vercel, Git</li>
                    <li>MVC Architecture, Object Orieted Programming</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-outer-section d-flex flex-column" id="resume">
        <span className="about-me-text " data-aos="fade-up">
          Resume
        </span>
        <span className="why-text-sub mb-3"> My formal Bio Details</span>
        <div
          className="resume-new-section row "
          style={{ width: "70%", marginInline: "auto" }}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="300"
        >
          <div className="col-lg-4 col-md-4 resume-left-section d-flex flex-row px-0 shadow-lg">
            <div className="d-flex flex-column bg-new text-white">
              <span className="icons-span">
                <i class="fas fa-user-graduate"></i>{" "}
              </span>
              <span className="icons-span">
                <i class="fas fa-briefcase"></i>{" "}
              </span>
              <span className="icons-span">
                <i class="fas fa-code"></i>{" "}
              </span>
              <span className="icons-span">
                <i class="fas fa-tasks"></i>{" "}
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className={
                  education === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(seteducation, true);
                }}
              >
                Education
              </span>
              <span
                className={
                  workhistory === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setworkhistory, true);
                }}
              >
                Work
              </span>
              <span
                className={
                  programming === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprogramming, true);
                }}
              >
                Programming
              </span>
              <span
                className={
                  projects === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprojects, true);
                }}
              >
                Projects
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 resume-right-section">
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programming === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>
      <div id="testimonial"></div>
      <div className="testimonial-part my-5" id="testimonial">
        <div className="testimonials-inner-part d-flex flex-column">
          <span
            className="about-me-text"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Testimonials
          </span>
          <span
            className="why-text-sub mb-5"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            My words of wisdom
          </span>
          <Testimonials />
        </div>
      </div>

      <div className="contact-me-part" id="contactme">
        <div className="relative-bg"></div>
        <div
          className="contact-inner-part d-flex flex-column"
          data-aos="zoom-in-right"
          data-aos-delay="700"
        >
          <span className="about-me-text">Contact Me</span>
          <span className="why-text-sub mb-5">Let's Keep in Touch</span>
          <Contact />
        </div>
      </div>

      <div className="footer">
        <MDBFooter className="footer-icons bg-light text-center text-white">
          <MDBContainer className=" p-4 pb-0">
            <section className="mb-4">
              <MDBBtn
                className="m-1 "
                style={{ backgroundColor: "#3b5998", borderRadius: "50%" }}
                href="https://www.facebook.com/patrick.arganza/"
                target="_blank"
                role="button"
              >
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn
                className="m-1 "
                style={{ backgroundColor: "#55acee", borderRadius: "50%" }}
                href="https://twitter.com/BanzPArganza"
                target="_blank"
                role="button"
              >
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
              <MDBBtn
                className="m-1 "
                style={{ backgroundColor: "#ac2bac", borderRadius: "50%" }}
                href="https://www.instagram.com/pat_argz/"
                target="_blank"
                role="button"
              >
                <MDBIcon fab icon="instagram" />
              </MDBBtn>
              <MDBBtn
                className="m-1 "
                style={{ backgroundColor: "#0082ca", borderRadius: "50%" }}
                href="https://www.linkedin.com/in/patrick-arganza-816331173/"
                target="_blank"
                role="button"
              >
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#333333", borderRadius: "50%" }}
                href="https://github.com/Patargz12"
                target="_blank"
                role="button"
              >
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </section>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              Patrick Arganza
            </a>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
}

export default App;

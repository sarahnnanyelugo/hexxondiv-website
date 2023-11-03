import React from "react";
import "./about-us.scss";
import LandingImg from "../../assets/images/about.png";
import TechHub from "../Home/TechHub/TechHub";
import Switchapp from "../../assets/images/switchapp.svg";
import Silverbird from "../../assets/images/silverbird.png";
import Educare from "../../assets/images/educare.png";
import Powerjet from "../../assets/images/powerjet.png";
import About from "../../assets/images/about.webp";
import Apart from "../../assets/images/apart.jpg";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/tech-hub.png";
import Footer from "../../components/Footer/Footer";
import FAQ from "../../components/FAQ/FAQ";

function AboutUs() {
  return (
    <>
      <div className="col-md-12 left flexy">
        <div className="col-md-4 offset-md-1 mt ">
          <h1>Our passion for technology drives us to shape the future.</h1>
        </div>
        <div className="col-md-4 offset-md-1">
          <img
            className="tech-logo"
            src={LandingImg}
            alt="Scholar"
            width="100%"
          />{" "}
        </div>
      </div>
      <center>
        {" "}
        <div className="col-md-5 mtt about-body">
          <h1>
            Welcome to Hexxondiv Tech Hub
            <span> - Transforming Ideas into Software Excellence</span>
          </h1>
          <p>
            At Hexxondiv Tech Hub, we are more than just a software development
            company. We are your strategic partner in turning visionary ideas
            into cutting-edge software solutions. With a relentless commitment
            to innovation and a team of highly skilled professionals, we bring
            your digital dreams to life.
          </p>
        </div>
      </center>
      <div className="col-md-8 offset-md-2 ">
        <div className="flexy mt">
          <div className="col-md-6">
            <h1>Our Story</h1>
            <p>
              Founded on the belief that technology has the power to reshape
              industries and improve lives, Hexxondiv Tech Hub was born out of a
              passion for coding and a vision for a better digital world. Over
              the years, we've grown into a dynamic hub of tech enthusiasts who
              are dedicated to crafting software that sets new standards and
              drives business success.
            </p>
          </div>
          <div className="col-md-6">
            {" "}
            <img
              className="tech-logo"
              src={About}
              alt="Scholar"
              width="100%"
            />{" "}
          </div>
        </div>
        <div className="flexy mt">
          <div className="col-md-6">
            {" "}
            <img
              className="tech-logo"
              src={Apart}
              alt="Scholar"
              width="100%"
            />{" "}
          </div>
          <div className="col-md-6" style={{ padding: "10px" }}>
            <h1>Our Mission</h1>
            <p>
              The mission of Hexxondiv Tech Hub is to empower businesses and
              individuals with transformative software solutions that enhance
              productivity, drive growth, and create sustainable value. Our
              mission encompasses the following key components: 1. Customer
              Success: Our primary mission is to enable the success of our
              clients. We are dedicated to understanding their unique needs,
              challenges, and objectives. By leveraging our expertise and
              industry knowledge, we strive to develop custom software solutions
              that align with their goals and provide tangible business value.
              2. Innovation and Excellence: We are committed to fostering a
              culture of innovation and excellence within our organization. Our
              mission is to continuously explore new technologies,
              methodologies, and approaches to software development. By
              embracing innovation, we aim to deliver cutting-edge solutions
              that help our clients stay ahead in a rapidly evolving digital
              landscape. 3. Collaboration and Partnership: Collaboration is at
              the heart of our mission. We believe in building strong
              partnerships with our clients, based on trust, transparency, and
              effective communication. By working closely with our clients as
              strategic partners, we can better understand their needs, provide
              tailored solutions, and deliver exceptional results. 4. Quality
              and Reliability: Our mission is to uphold the highest standards of
              quality and reliability in all aspects of our work. We have a
              strong focus on delivering software solutions that are robust,
              scalable, secure, and user-friendly. Through rigorous testing,
              quality assurance processes, and adherence to industry best
              practices, we ensure that our products meet or exceed the
              expectations of our clients. 5. Continuous Learning and Growth: We
              are committed to ongoing learning and professional growth. Our
              mission is to stay at the forefront of technological advancements,
              industry trends, and best practices. By investing in the skills
              development of our team members, we ensure that we can
              consistently deliver innovative and impactful solutions to our
              clients. 6. Social Responsibility: We recognize our responsibility
              to society and strive to make a positive impact beyond our
              immediate business goals. Our mission includes leveraging
              technology to address social and environmental challenges,
              promoting inclusivity, and contributing to sustainable
              development. We actively seek opportunities to support social
              causes and give back to the communities in which we operate. By
              embracing this mission, we aim to be a trusted partner for
              businesses and individuals seeking customized software solutions
              that drive success, foster innovation, and make a positive impact
              on society.
            </p>
          </div>
        </div>
        <div className="flexy mt">
          <div className="col-md-6">
            {" "}
            <img
              className="tech-logo"
              src={Apart}
              alt="Scholar"
              width="100%"
            />{" "}
          </div>
          <div className="col-md-6" style={{ padding: "10px" }}>
            <h1>What Sets Us Apart</h1>
            <p>
              <strong> Expertise: </strong>Our team of developers, designers,
              and project managers are experts in their fields. We continually
              invest in learning the latest technologies and methodologies to
              deliver world-class solutions.
            </p>
            <p>
              <strong> Innovation: </strong>We thrive on innovation. We're not
              just trend followers; we are trendsetters. Our solutions leverage
              the latest trends and technologies, ensuring your project is
              always at the forefront of digital advancement.
            </p>
            <p>
              <strong> Client-Centric Approach:</strong> Your success is our
              success. We work closely with you to understand your unique needs
              and goals. Our agile development approach ensures you're always in
              the loop and can provide feedback throughout the project's
              lifecycle.
            </p>
            <p>
              <strong> Quality Assurance:</strong> We are committed to
              delivering reliable, scalable, and secure software. Rigorous
              quality assurance and testing processes guarantee that your
              product is ready for the market.
            </p>
          </div>
        </div>
      </div>
      <div className="services-div">
        {" "}
        <div className="col-md-10 offset-md-1 ">
          <h1>Our Services</h1>
          <TechHub />
        </div>
      </div>
      <center>
        {" "}
        <div className="col-md-8 mtt">
          <h1>Industries We Serve</h1>
          <p>
            We have worked with a diverse range of industries, including
            healthcare, finance, e-commerce, education, and more. Our ability to
            adapt and cater to specific industry needs is what makes us a
            reliable partner for businesses of all kinds.
          </p>
        </div>
      </center>
      <div className="col-md-10 offset-md-1 flexy mt2 mb5 partners">
        <div className="col-md-3">
          <center>
            {" "}
            <img className="   logo" src={Silverbird} alt="Scholar" />
          </center>
        </div>
        <div className="col-md-3 col-12">
          <center>
            {" "}
            <img className="  mt2" src={Switchapp} alt="Scholar" />
          </center>
        </div>
        <div className="col-md-3">
          <center>
            {" "}
            <img className=" mt1 " src={Powerjet} alt="Scholar" />
          </center>
        </div>
        <div className="col-md-3">
          <center>
            {" "}
            <img className="   logo" src={Educare} alt="Scholar" />
          </center>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 mtt">
        <center>
          {" "}
          <h1 style={{ fontSize: "60px" }}>Frequently asked questions</h1>
        </center>
        <FAQ />
      </div>
      <div className="col-md-5 offset-md-2 mtt">
        <h1>Let's Create the Future Together</h1>
        <p>
          If you're looking for a software development company that combines
          innovation, expertise, and a dedication to your success, Hexxondiv
          Tech Hub is here for you. Let's collaborate, innovate, and create
          software solutions that will drive your business forward.
        </p>
        <p>
          Ready to get started? <Link to={"/contact"}>Contact</Link> us today{" "}
        </p>
      </div>
      <Footer bg="#092540" logo={Logo} />
    </>
  );
}

export default AboutUs;

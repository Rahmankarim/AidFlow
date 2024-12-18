"use client";
import AkpagerAccordion from "@/components/AkpagerAccordion";
import Counter from "@/components/Counter";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Slider from "react-slick";

const accordionItems = [
  {
    id: 10,
    title:
      "What is the Charity Management System for Disaster and Flood Relief?",
    value:
      "The Charity Management System is an online platform designed to efficiently manage and distribute donations for disaster and flood relief efforts. It connects donors with relief organizations, ensures transparency in fund allocation, and helps track the impact of donations on the ground.",
  },
  {
    id: 20,
    title: "Is my donation secure?",
    value:
      "Yes, your donations are processed through a secure payment gateway, ensuring that all financial transactions are encrypted and protected. We prioritize your privacy and security to ensure a safe donation experience.",
  },
  {
    id: 30,
    title: "How do I know where my donation is being used?",
    value:
      "We provide regular updates and reports on how donations are allocated and distributed. Through the platform, you can track the status of campaigns and see how funds are impacting the affected communities.",
  },
  {
    id: 40,
    title: " Can I choose which disaster or cause my donation supports?",
    value:
      "Yes, the platform allows you to select specific disaster campaigns you wish to support. You can donate to ongoing relief efforts in areas affected by floods, earthquakes, and other natural disasters.",
  },
  {
    id: 50,
    title: " How can I volunteer for disaster relief?",
    value:
      "You can sign up to volunteer directly through the website. We offer various opportunities, from distributing supplies to providing on-the-ground support. Volunteers are trained and placed according to their skills and the needs of the affected areas.",
  },
  {
    id: 60,
    title: "Can I organize a fundraising event through this platform?",
    value:
      "Yes, you can organize fundraising events to support disaster relief campaigns. The platform provides tools to set up a personalized fundraising page, share it with your network, and track contributions.",
  },
];

const page = () => {
  const [active, setActive] = useState("collapse1");
  return (
    <AkpagerLayout header={7} footer={7} bodyClass={"home-seven"}>
      <section className="hero-area-seven pt-200 rpt-150 pb-70 rel z-1 bgc-lighter ">
        <div className="container container-1520">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="hero-content style-seven rmb-20"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span
                  className="subtitle-one mb-20"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <i className="fas fa-rocket-launch" /> Awards Winning Agency
                </span>
                <h1
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Your Helping To the World
                </h1>
                <p>
                  Empowering disaster relief through transparency, trust, and
                  timely support.{" "}
                </p>
                <Link href="donate" className="theme-btn mt-30">
                  Donate <i className="far fa-arrow-right" />
                </Link>
                <Link
                  href="Needdonation"
                  className="theme-btn mt-30"
                  style={{ marginLeft: "12px" }}
                >
                  Need Donation <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-7"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="hero-seven-image">
                <img
                  src="assets\images\Charity-Images\dulana-kodithuwakku-0R-rPOSUyxw-unsplash.jpg"
                  alt="Hero"
                  className="imageHeader"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      {/* Hero area End */}
      {/* Client Logos Area Start */}
      <section className="client-logo-area-five pt-100 rel z-1">
        <div className="container">
          <div
            className="section-title text-center mb-50"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <h4>Organizations we collaborate with</h4>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/organizations/dwb.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item style-two"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/organizations/red.webp"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item style-two"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={100}
              >
                <a href="#">
                  <img
                    src="assets/images/organizations/unhcr.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item style-two"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={150}
              >
                <a href="#">
                  <img
                    src="assets/images/organizations/unnicef.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item style-two"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={200}
              >
                <a href="#">
                  <img
                    src="assets/images/organizations/World_Food_Programme-Logo.wine.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item style-two"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={250}
              >
                <a href="#">
                  <img
                    src="assets/images/organizations/images.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Client Logos Area End */}
      {/* About Area Start */}
      <section className="about-area pt-95 rpt-65 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row gap-150 align-items-center">
            <div className="col-lg-6">
              <div
                className="about-seven-images rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/Charity-Images/2.jpg" alt="About" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-content-seven"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Improving Disaster Response</h2>
                </div>
                <p>
                  The system is designed to enhance the efficiency and
                  transparency of disaster response efforts by providing a
                  centralized platform for donors and relief organizations to
                  interact.
                </p>
                <ul className="icon-list style-three mt-35">
                  <li>
                    <i className="fal fa-check" /> Centralized Platform for
                    Coordination
                  </li>
                  <li>
                    <i className="fal fa-check" /> Efficient Allocation of
                    Resources
                  </li>
                  <li>
                    <i className="fal fa-check" /> Enhanced Transparency
                  </li>
                </ul>
                <div className="btns pt-35">
                  <Link href="donate" className="theme-btn mt-10 me-4">
                    Donate <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="pricing-area-seven-one bgc-black rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center text-white mb-60"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>We Are In A Mission To Help The Helpless</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="pricing-item style-six"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-web-browser" />
                </div>
                <h5>Commitment to Compassionate Action</h5>
                <p>
                  The phrase emphasizes the organization's dedication to
                  supporting those who are vulnerable, underserved, or in
                  desperate need, showcasing a mission grounded in empathy and
                  care.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="pricing-item style-six"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-web-content" />
                </div>
                <h5>Providing Practical Assistance</h5>
                <p>
                  The mission focuses on actively providing help, whether
                  through financial support, resources, or services, to improve
                  the lives of those who are unable to help themselves.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="pricing-item style-six"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-optimization" />
                </div>
                <h5>Empowerment Through Support</h5>
                <p>
                  It conveys the goal of not just offering temporary relief, but
                  also empowering individuals or communities by addressing their
                  immediate needs and providing long-term solutions that restore
                  dignity.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-7"
              data-aos="fade-left"
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div
                className="cta-left-content bgc-primary rmb-30"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/cta-left-circle.png)",
                }}
              >
                <div className="section-title mb-15">
                  <span className="subtitle d-block mb-10">Helping Hands</span>
                  <h3>Discover fundraisers inspired by what you care about</h3>
                </div>
                <Link href="contact" className="theme-btn style-four mb-25">
                  Contact Us <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-5"
              data-aos="fade-right"
              data-aos-duration={1000}
            >
              <div
                className="cta-right-image"
                style={{
                  backgroundImage: "url(assets/images/Charity-Images/3.jpg)",
                }}
              />
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      <section className="transform-finance-area bgc-lighter pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Social Impact Funds</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div
                className="feature-image-box-two style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <h5>
                    <Link href="service-details">Social Impact Funds</Link>
                  </h5>
                  <p>
                    We are proud to support these funds — and hope you will
                    consider doing so, too. Donations to these social impact
                    funds go directly to grants to individuals in need, and in
                    some cases, organizations working to provide aid or promote
                    critical social change.
                  </p>
                </div>
                <div className="image">
                  <img
                    src="assets/images/fancy-box/feature-two1.png"
                    alt="Feature"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="feature-image-box-two"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/fancy-box/feature-two2.png"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">The Essentials Fund</Link>
                  </h5>
                  <p>
                    Every day, hundreds of Americans start fundraisers for basic
                    necessities like food, housing, and utilities. The
                    Essentials Fund distributes cash grants to help individuals
                    make ends meet and find paths to stability.
                  </p>
                </div>
              </div>
              <div
                className="feature-image-box-two"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      The Weather Resilience Fund
                    </Link>
                  </h5>
                  <p>
                    The Weather Resilience Fund will support local resilience
                    efforts, ensuring that vulnerable communities are better
                    prepared for, and can adapt to, increasingly intense weather
                    conditions and weather-fueled natural disasters.
                  </p>
                </div>
                <div className="image">
                  <img
                    src="assets/images/fancy-box/feature-two3.png"
                    alt="Feature"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Area End */}
      {/* About Area Start */}
      <section className="about-area-seven pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Disaster and Flood Relief: Key Points to Address</h2>
                </div>
                <p>
                  Disaster relief refers to the immediate response and
                  assistance provided to people affected by natural disasters
                  like floods, earthquakes, and hurricanes. The goal is to
                  alleviate suffering, save lives, and help communities recover
                  as quickly as possible.
                </p>
                <div className="feature-icon-box mt-35">
                  <div className="icon">
                    <i className="far fa-check" />
                  </div>
                  <div className="content">
                    <h5>Scope:</h5>
                    <p>
                      Disaster relief efforts often include providing food,
                      water, medical care, shelter, and essential supplies to
                      those who have lost everything. Relief efforts aim to meet
                      both the immediate needs and the long-term recovery of
                      affected communities.
                    </p>
                  </div>
                </div>
                <div className="feature-icon-box">
                  <div className="icon">
                    <i className="far fa-check" />
                  </div>
                  <div className="content">
                    <h5>Saving Lives:</h5>
                    <p>
                      The primary goal of disaster relief is to save lives by
                      providing immediate assistance to victims in the form of
                      medical care, emergency shelter, and food.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-seven-right-images mb-25 rmb-0 rmt-15"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/Charity-Images/4.jpg" alt="About" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* About Area End */}
      {/* About Area Start */}
      <section className="about-area-seven pt-130 rpt-100 pb-75 rpb-50 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div
                className="about-seven-left-images mb-50"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/Charity-Images/5.jpg" alt="About" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-content-seven"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Flood Relief</h2>
                </div>
                <p>
                  <b> What is Flood Relief?</b> Flood relief is a specific form
                  of disaster relief focused on providing aid to communities
                  affected by floods. Floods often cause extensive damage to
                  homes, infrastructure, and agricultural land, leaving
                  survivors without basic necessities.
                </p>
                <Link href="donate" className="theme-btn mt-25 mb-75">
                  Donate
                  <i className="far fa-arrow-right" />
                </Link>
                <div className="row">
                  <div className="col-6">
                    <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text k-plus"
                        data-speed={3000}
                        data-stop={25}
                      >
                        <Counter end={25} />
                      </span>
                      <div className="text">Donnations</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text k-plus"
                        data-speed={3000}
                        data-stop={38}
                      >
                        <Counter end={38} />
                      </span>
                      <div className="text">Donnations needed </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* About Area End */}
      {/* Numbered box Area Start */}
      <section className="numbered-box-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Three ways to Donate</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="numbered-box">
                <div className="number">1</div>
                <div className="content">
                  <h5>Donate Cash</h5>
                  <p>
                    Cash donations are one of the most efficient ways to
                    contribute. They allow relief organizations to allocate
                    funds where they are most needed, such as purchasing food,
                    medicine, shelter. Donors can make one-time or recurring
                    donations through secure online payment platforms, ensuring
                    timely aid for affected communities.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={200}
              data-aos-offset={50}
            >
              <div className="numbered-box">
                <div className="number">2</div>
                <div className="content">
                  <h5>Volunteer Your Time</h5>
                  <p>
                    Volunteering your time and skills is a valuable way to
                    support disaster relief efforts. Volunteers help distribute
                    aid, provide medical care, assist in cleanup, and offer
                    psychological support to survivors. Whether in-person or
                    virtually, your efforts can make a significant impact in
                    helping those affected by disasters.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={400}
              data-aos-offset={50}
            >
              <div className="numbered-box">
                <div className="number">3</div>
                <div className="content">
                  <h5>Donate Goods or Supplies</h5>
                  <p>
                    In addition to financial donations, donating essential goods
                    like food, clothing, hygiene kits, and medical supplies can
                    directly assist those in need. Donating goods is especially
                    helpful in the immediate aftermath of a disaster, as
                    physical items like water, blankets, and medicine are
                    urgently needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      {/* Pricing Area End */}
      {/* Testimonials Area Start */}
      <section className="testimonials-area-seven pt-120 rpt-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="testimonials-seven-content-part rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-55">
                  <h2>What Our Donors Say About Us</h2>
                </div>
                <Slider
                  {...sliderProps.testiSliderFive}
                  className="testi-slider-five"
                >
                  <div className="testimonial-item style-three">
                    <div className="author">
                      <div className="icon">
                        <i className="flaticon-quotation-mark" />
                      </div>
                      <div className="title">
                        <b>Nicholas S. Moore /</b> CEO &amp; Founder
                      </div>
                    </div>
                    <div className="author-text">
                      I have been donating to disaster relief efforts for years,
                      but I’ve never felt more confident about where my money is
                      going than with this platform. The transparency and easy
                      tracking of donations make it clear that the funds are
                      being used where they’re needed most. It’s comforting to
                      know that my contributions are making a real difference in
                      people’s lives.
                    </div>
                    <div className="testi-footer">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="text">
                        <span>4.7/5</span> on Trustpilot
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-item style-three">
                    <div className="author">
                      <div className="icon">
                        <i className="flaticon-quotation-mark" />
                      </div>
                      <div className="title">
                        <b>Nicholas S. Moore /</b> CEO &amp; Founder
                      </div>
                    </div>
                    <div className="author-text">
                      Volunteering through this site has been such a rewarding
                      experience. The process is simple, and the relief efforts
                      are well-organized. I’ve had the chance to help distribute
                      supplies and provide aid in affected areas, knowing that
                      my time is being used effectively to support those in
                      need. It's inspiring to be part of such a well-coordinated
                      and impactful initiative.
                    </div>
                    <div className="testi-footer">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="text">
                        <span>4.7/5</span> on Trustpilot
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-item style-three">
                    <div className="author">
                      <div className="icon">
                        <i className="flaticon-quotation-mark" />
                      </div>
                      <div className="title">
                        <b>Nicholas S. Moore /</b> CEO &amp; Founder
                      </div>
                    </div>
                    <div className="author-text">
                      As a relief organization, we often face challenges in
                      managing resources and coordinating with donors. This
                      platform has made a huge difference by streamlining
                      donation management and providing real-time updates. It’s
                      easy for us to track campaigns, allocate resources, and
                      reach more people in need. I can’t imagine running
                      disaster relief efforts without it.
                    </div>
                    <div className="testi-footer">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="text">
                        <span>4.7/5</span> on Trustpilot
                      </span>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="testimonials-seven-iamge-part"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="man">
                  <img
                    src="assets/images/Charity-Images/3.jpg"
                    alt="Tesimonials"
                  />
                </div>
                <div className="users">
                  <b className="text">1+ Million Users</b>
                  <img
                    src="assets/images/testimonials/test-seven-author.png"
                    alt="Author"
                  />
                </div>
                <div className="google-ratting">
                  <img src="assets/images/icons/google.png" alt="Google" />
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="text">(4.8) Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Testimonials Area End */}
      {/* FAQs Area Start */}
      <section className="faqs-area-seven pt-125 rpt-95 pb-115 rpb-85 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-7 col-lg-9"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title text-center mb-60">
                <h2>Have Any Question On Mind! Asked Questions</h2>
              </div>
            </div>
            <div className="col-lg-7">
              <Accordion
                defaultActiveKey={active}
                className="accordion"
                data-aos="fade-up"
                data-aow-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                {accordionItems.map((item) => (
                  <AkpagerAccordion
                    key={item.id}
                    title={item.title}
                    value={item.value}
                    event={`collapse${item.id}`}
                    onClick={() =>
                      setActive(
                        active == `collapse${item.id}`
                          ? ""
                          : `collapse${item.id}`
                      )
                    }
                    active={active}
                  />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <div className="faqs-area-seven-shapes">
          <div className="shape one">
            <img
              src="assets/images/Charity-Images/shail-sharma-EGPZ7uvcxZA-unsplash.jpg"
              alt="Shape"
            />
          </div>
          <div className="shape two">
            <img
              src="assets/images/Charity-Images/vikram-aditya-9Awu92Opbco-unsplash.jpg"
              alt="Shape"
            />
          </div>
          <div className="shape three">
            <img src="assets/images/Charity-Images/5.jpg" alt="Shape" />
          </div>
          <div className="shape four">
            <img src="assets/images/Charity-Images/2.jpg" alt="Shape" />
          </div>
          <div className="shape five">
            <img src="assets/images/Charity-Images/4.jpg" alt="Shape" />
          </div>
          <div className="shape six">
            <img src="assets/images/Charity-Images/1.jpg" alt="Shape" />
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* FAQs Area End */}
    </AkpagerLayout>
  );
};
export default page;

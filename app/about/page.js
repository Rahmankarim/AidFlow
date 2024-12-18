"use client";
import Counter from "@/components/Counter";
import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const page = () => {
  return (
    <AkpagerLayout>
      <PageBanner pageName={"About"} />
      {/* About Area Start */}
      <section className="about-area py-90 rpy-60">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div
                className="about-images my-40"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/charity2/old-man-3548098_1280.jpg"
                  alt="About"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-content mt-40 rmt-15"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>About US</h2>
                </div>
                <p>
                  At AIDFLOW, we are dedicated to transforming lives and
                  building a better world through effective disaster and flood
                  relief. Our mission is to bridge the gap between donors,
                  volunteers, and relief organizations, ensuring that aid
                  reaches those in need promptly and efficiently. Our innovative
                  Charity Management System is designed to tackle the most
                  pressing challenges in disaster donation management, including
                  lack of transparency, inefficient resource allocation, and
                  communication gaps. By leveraging cutting-edge technology and
                  a user-friendly platform, we empower individuals and
                  organizations to make a tangible difference during times of
                  crisis.
                </p>
                <div className="row pt-30">
                  <div className="col-sm-6">
                    <div className="counter-item counter-text-wrap counted">
                      <span
                        className="count-text percent"
                        data-speed={3000}
                        data-stop={95}
                      >
                        95
                      </span>
                      <h5 className="counter-title">Transparency and Trust</h5>
                      <div className="text">
                        We ensure every donation is tracked and utilized
                        effectively, fostering trust between donors and
                        beneficiaries.
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item counter-text-wrap counted">
                      <span
                        className="count-text percent"
                        data-speed={3000}
                        data-stop={85}
                      >
                        85
                      </span>
                      <h5 className="counter-title">
                        Efficient Resource Managemen
                      </h5>
                      <div className="text">
                        Our platform simplifies donor management, campaign
                        tracking, and resource allocation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area End */}
      {/* Features Area Start */}
      <section className="about-features-area">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="iconic-box style-seven border">
                <div className="icon-title">
                  <i className="far fa-cloud-upload" />
                  <h5>
                    <Link href="service-details">Multiple Ways to Support</Link>
                  </h5>
                </div>
                <div className="content">
                  <p>
                    We offer several avenues for contribution, including
                    monetary donations, volunteering, and in-kind donations such
                    as food, clothing, and medical supplies.
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg2.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="iconic-box style-seven border">
                <div className="icon-title">
                  <i className="far fa-bullseye-arrow" />
                  <h5>
                    <Link href="service-details">
                      Comprehensive Campaign Tracking
                    </Link>
                  </h5>
                </div>
                <div className="content">
                  <p>
                    Stay informed about ongoing relief campaigns with real-time
                    updates, donation goals, and success stories from affected
                    communities.
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg2.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="iconic-box style-seven border">
                <div className="icon-title">
                  <i className="far fa-layer-group" />
                  <h5>
                    <Link href="service-details">Volunteer Opportunities</Link>
                  </h5>
                </div>
                <div className="content">
                  <p>
                    Our platform connects volunteers with relief organizations,
                    offering opportunities to contribute time and skills during
                    critical moments of need.
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg2.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area End */}
      {/* Data Analytics Area Start */}
      <section className="data-analytics-area pt-60 rpt-30 pb-90 rpb-60">
        <div className="container">
          <div className="row gap-110 align-items-center">
            <div className="col-lg-6">
              <div
                className="data-analytics-content mt-40 rmb-20"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Our Vision</h2>
                </div>
                <p>
                  Our vision goes beyond disaster relief. We aim to create a
                  sustainable model that encourages greater community
                  involvement and fosters long-term recovery for affected areas.
                  With your support, we can respond to disasters faster, rebuild
                  stronger communities, and inspire hope where it’s needed most.
                  Join us in making a difference. Together, we can bring relief,
                  rebuild lives, and create a world that cares.
                </p>
                <ul className="icon-list style-two">
                  <li>
                    <i className="fal fa-check" /> Foster a culture of giving
                    and compassion
                  </li>
                  <li>
                    <i className="fal fa-check" /> Build resilient communities
                    by providing tools for recovery and rebuilding.
                  </li>
                </ul>
                <a href="sign-up" className="theme-btn style-four mt-50">
                  Sign up <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="management-images float-lg-end my-40"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  className="rounded-0"
                  src="assets/images/charity2/boy-60749_1280.jpg"
                  alt="Management"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Data Analytics Area End */}
      {/* CTA Area Start */}
      <section
        className="cta-area bgs-cover py-130 rpy-100"
        style={{
          backgroundImage:
            "url(assets/images/charity2/indian-1717192_1280.jpg)",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-8">
              <div
                className="cta-content text-white rmb-35"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-40">
                  <span className="subtitle d-block mb-10">AIDFLOW</span>
                  <h2>Be the Helping Hand </h2>
                </div>
                <Link legacyBehavior href="donate">
                  <a className="theme-btn">
                    Donate
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Area End */}
      {/* Team Area Start */}
      <section className="team-area pt-130 rpt-100 pb-85 rpb-55">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Our Expert Volunteer</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/team/member1.png" alt="Team" />
                  <div className="social-media">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Jerome C. Ramirez</h5>
                  <span className="designation">CEO &amp; Founder</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/team/member2.png" alt="Team" />
                  <div className="social-media">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Adeem Uddin</h5>
                  <span className="designation">Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/team/member3.png" alt="Team" />
                  <div className="social-media">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Mueed ahmed</h5>
                  <span className="designation">Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-delay={600}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/users/rk.jpg" alt="Team" />
                  <div className="social-media">
                    <a href="https://www.linkedin.com/in/rahman-karim-73a59022a/">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="https://github.com/Rahmankarim">
                      <i className="fab fa-github" />
                    </a>
                    <a href="https://www.instagram.com/rahman_karim_1/">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Rahman Karim</h5>
                  <span className="designation">Volunteer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Area End */}
      {/* Counter Area Start */}
      <div className="counter-area-ten pb-100 rpb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="counter-item style-six counter-text-wrap"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <span
                  className="count-text plus"
                  data-speed={3000}
                  data-stop={1253}
                >
                  <Counter end={1253} />
                </span>
                <hr />
                <span className="counter-title">Communities Helped</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="counter-item style-six counter-text-wrap"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <span
                  className="count-text k-plus"
                  data-speed={3000}
                  data-stop={85}
                >
                  <Counter end={85} />
                </span>
                <hr />
                <span className="counter-title">
                  Worldwide Project Complete
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="counter-item style-six counter-text-wrap"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <span
                  className="count-text m-plus"
                  data-speed={3000}
                  data-stop={3}
                >
                  <Counter end={3} />
                </span>
                <hr />
                <span className="counter-title">Donations Raised </span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="counter-item style-six counter-text-wrap"
                data-aos="fade-up"
                data-aos-delay={600}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <span
                  className="count-text percent"
                  data-speed={3000}
                  data-stop={98}
                >
                  <Counter end={98} />
                </span>
                <hr />
                <span className="counter-title">Positive Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Area End */}
      {/* Client Logos Area Start */}
      <section className="client-logo-area-two pt-130 rpt-100 pb-95 rpb-65 bgc-navyblue">
        <div
          className="section-title text-center text-white mb-40"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h4>Organizations we collaborated with </h4>
        </div>
        <div className="container">
          <div className="row logo-white justify-content-center row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
            <div
              className="col"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two1.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two2.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two3.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two4.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two9.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two5.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two10.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two7.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two6.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two8.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Client Logos Area End */}
      {/* Testimonials Area Start */}
      <section className="testimonials-area-seven pt-120 rpt-100 rel z-1 pb-100">
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
    </AkpagerLayout>
  );
};
export default page;

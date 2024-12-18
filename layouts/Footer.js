import Link from "next/link";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;
    case 5:
      return <Footer5 />;
    case 6:
      return <Footer6 />;
    case 7:
      return <Footer7 />;
    case 8:
      return <Footer8 />;
    case 9:
      return <Footer9 />;

    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const DefaultFooter = () => {
  return (
    <footer className="main-footer footer-one rel z-1 mt-100">
      <div className="container">
        <div className="footer-newsletter text-white">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div
                className="logo-part"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="logo mb-10">
                  <Link href="/">
                    <img src="assets/images/logos/logo-white.png" alt="Logo" />
                  </Link>
                </div>
                <p>Digital Business Consulting Agency</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div
                className="form-part"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h5>Subscribe Our Newsletter</h5>
                <form className="newsletter-form mt-15" action="#">
                  <input type="email" placeholder="Email Address" required="" />
                  <button type="submit">
                    Sign Up <i className="far fa-arrow-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="footer-widget widget-about"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">About Company</h6>
              <p>
                Doloremque laudantium tota aperiam eaque abillo inventore
                architect beatae vitae dicta sunt explicabos
              </p>
              <div className="social-style-one">
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
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 order-xl-2">
            <div
              className="footer-widget widget-contact"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">Contact</h6>
              <ul>
                <li>
                  <i className="fal fa-map-marker-alt" /> 55 Main Street, 2nd
                  block Melbourne, Australia
                </li>
                <li>
                  <i className="fal fa-envelope" />{" "}
                  <a href="mailto:support@gmail.com">support@gmail.com</a>
                </li>
                <li>
                  <i className="fal fa-phone" />{" "}
                  <a href="callto:+0001234455">+000 (123) 44 55</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Resources</h6>
                  <ul>
                    <li>
                      <Link href="shop">Product</Link>
                    </li>
                    <li>
                      <Link href="services">Services</Link>
                    </li>
                    <li>
                      <Link href="about">About Us</Link>
                    </li>
                    <li>
                      <Link href="services">Benefits</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Quick Link</h6>
                  <ul>
                    <li>
                      <Link href="services">Features</Link>
                    </li>
                    <li>
                      <Link href="pricing">Pricing Plan</Link>
                    </li>
                    <li>
                      <Link href="about">Best Program</Link>
                    </li>
                    <li>
                      <Link href="contact">Press Kit</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Company</h6>
                  <ul>
                    <li>
                      <Link href="about">About</Link>
                    </li>
                    <li>
                      <Link href="team">Team Member</Link>
                    </li>
                    <li>
                      <Link href="about">Reviews</Link>
                    </li>
                    <li>
                      <Link href="blog">Latest News</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-30 py-15">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-6">
              <div
                className="copyright-text pt-10 text-lg-start text-center"
                data-aos="fade-left"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <p>
                  Copyright @2024, <Link href="/">Akpager </Link> All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div
                className="footer-bottom-menu text-lg-end text-center"
                data-aos="fade-right"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <ul>
                  <li>
                    <Link href="faqs">Faqs</Link>
                  </li>
                  <li>
                    <Link href="about">Setting</Link>
                  </li>
                  <li>
                    <Link href="about">Privacy</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="far fa-angle-double-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const Footer7 = () => {
  return (
    <footer className="main-footer footer-seven pt-100 rel z-1 bgc-black">
      <div className="container">
        <div className="footer-cta-two bgc-lighter mb-80 rel z-1">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7">
              <div
                className="section-title rmb-25"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Your Helping To the World</h2>
                <p>
                  Empowering disaster relief through transparency, trust, and
                  timely support.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="btn-part text-lg-center ps-xl-5"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <Link href="donate" className="theme-btn mb-10">
                  Donate <i className="far fa-arrow-right" />
                </Link>
                <p>credit card required</p>
              </div>
            </div>
          </div>
          <div className="footer-cta-shape">
            <img src="assets/images/shapes/arrow.png" alt="Shape" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="footer-widget widget-about"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-logo mb-25">
                <Link href="/">
                  <img
                    src="assets/images/charity2/logof.png"
                    alt="Logo"
                    title="Logo"
                    style={{ width: "150px" }}
                  />{" "}
                </Link>
              </div>
              <p>Your Helping To the World</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 order-xl-2">
            <div
              className="footer-widget widget-contact"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">Contact</h6>
              <ul>
                <li>
                  <i className="fal fa-map-marker-alt" />
                  Comsats University Islamabad, Abbottabad Campus
                </li>
                <li>
                  <i className="fal fa-envelope" />{" "}
                  <a href="mailto:support@gmail.com">AIDFLOW@gmail.com</a>
                </li>
                <li>
                  <i className="fal fa-phone" />{" "}
                  <a href="callto:+933 435059 416">+933 435059 416</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row ps-xl-5">
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Resources</h6>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="about">About</Link>
                    </li>
                    <li>
                      <Link href="causes">Causes</Link>
                    </li>
                    <li>
                      <Link href="contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Quick Link</h6>
                  <ul>
                    <li>
                      <Link href="services">Linkedin</Link>
                    </li>
                    <li>
                      <Link href="pricing">Instagram</Link>
                    </li>
                    <li>
                      <Link href="about">facebook</Link>
                    </li>
                    <li>
                      <Link href="contact">Twitter</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Company</h6>
                  <ul>
                    <li>
                      <Link href="about">About</Link>
                    </li>
                    <li>
                      <Link href="causes">Causes</Link>
                    </li>
                    <li>
                      <Link href="contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="">Latest News</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-30 py-15">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-6">
              <div className="copyright-text pt-10 text-lg-start text-center">
                <p>
                  Copyright @2024, <Link href="/">AIDFLOW </Link> All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="far fa-angle-double-up" />
          </button>
        </div>
      </div>
      <div className="bg-lines line-white">
        <span />
        <span />
        <span />
        <span />
      </div>
    </footer>
  );
};

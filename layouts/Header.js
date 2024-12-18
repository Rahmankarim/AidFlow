"use client";

import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";

const Header = ({ header = 1, onePage = false }) => {
  switch (header) {
    case 1:
      return <DefaultHeader onePage={onePage} />;
    case 2:
      return <Header2 onePage={onePage} />;
    case 3:
      return <Header3 onePage={onePage} />;
    case 4:
      return <Header4 onePage={onePage} />;
    case 5:
      return <Header5 onePage={onePage} />;
    case 6:
      return <Header6 onePage={onePage} />;
    case 7:
      return <Header7 onePage={onePage} />;
    case 8:
      return <Header8 onePage={onePage} />;
    case 9:
      return <Header9 onePage={onePage} />;
    case 10:
      return <HeaderNotFound onePage={onePage} />;
    default:
      return <DefaultHeader onePage={onePage} />;
  }
};
export default Header;

const DefaultHeader = ({ onePage }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menus = [
    { id: 1, href: "home", title: "Home" },
    { id: 8, href: "about", title: "about" },
    { id: 3, href: "causes", title: "causes" },
    { id: 2, href: "projects", title: "project" },
    { id: 5, href: "testimonials", title: "testimonials" },
    { id: 6, href: "blog", title: "blog" },
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUsername("John Doe");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <header
      className={`main-header menu-absolute header-white no-border ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="header-upper">
        <div className="container container-1660 clearfix">
          <div className="header-inner py-15 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="/assets/images/charity2/logof.png"
                    alt="Logo"
                    title="Logo"
                    style={{ width: "150px" }}
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              <nav className="main-menu navbar-expand-lg">
                <Nav
                  logo="/assets/images/logos/logo.png"
                  menus={menus}
                  onePage={onePage}
                />
              </nav>
            </div>

            <div className="menu-btns ms-lg-auto">
              {!isLoggedIn ? (
                <>
                  <Link href="/sign-in" className="light-btn loginbtn">
                    Log In
                  </Link>
                  <Link href="/sign-up" className="theme-btn">
                    Sign Up Free <i className="far fa-arrow-right" />
                  </Link>
                </>
              ) : (
                <h3>Welcome, {username}!</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Header7 = ({ onePage }) => {
  const menus = [
    { id: 1, href: "home", title: "Home" },
    { id: 8, href: "about", title: "about" },
    { id: 2, href: "features", title: "features" },
    { id: 3, href: "pricing", title: "pricing" },
    { id: 6, href: "testimonials", title: "testimonials" },
    { id: 5, href: "faqs", title: "FAQs" },
  ];
  return (
    <header className="main-header menu-absolute no-border">
      <div className="header-upper">
        <div className="container container-1660 clearfix">
          <div className="header-inner py-20 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="/assets/images/charity2/logof.png"
                    alt="Logo"
                    title="Logo"
                    style={{ width: "150px" }}
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              <nav className="main-menu navbar-expand-lg">
                <Nav
                  onePage={onePage}
                  logo="/assets/images/logos/logo5.png"
                  menus={menus}
                />
              </nav>
            </div>

            <div className="menu-btns ms-lg-auto">
              <Link href="/sign-in" className="light-btn">
                Log In
              </Link>
              <Link href="/sign-up" className="theme-btn">
                Sign Up Free <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
};

const HeaderNotFound = ({ onePage }) => {
  return (
    <header className="main-header menu-absolute no-border">
      <div className="header-upper">
        <div className="container container-1660 clearfix">
          <div className="header-inner py-15 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="/assets/images/logos/logo6.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              <nav className="main-menu navbar-expand-lg">
                <Nav onePage={onePage} logo="/assets/images/logos/logo6.png" />
              </nav>
            </div>
            <div className="nav-search ms-xl-2 ms-4 py-10">
              <NavSearch />
            </div>
            <div className="menu-btns ms-lg-auto d-none d-xl-flex">
              <Link href="/contact" className="theme-btn">
                Get Started <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Nav = ({
  logo = "/assets/images/charity2/logof.png",
  dark,
  onePage,
  menus = [],
}) => {
  return (
    <Fragment>
      <div className="d-none d-lg-flex desktop-menu">
        <div className="navbar-header py-10">
          <div className="mobile-logo">
            <Link href="/">
              <img
                src="/assets/images/charity2/logof.png"
                alt="Logo"
                title="Logo"
              />
            </Link>
          </div>
          <Accordion.Toggle
            as={"button"}
            className="navbar-toggle"
            eventKey="navbar-collapse"
          >
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
          </Accordion.Toggle>
        </div>
        <div className="navbar-collapse clearfix">
          {onePage ? (
            <ul className="navigation onepage clearfix">
              {menus.map((menu) => (
                <li key={menu.id}>
                  <Link href={`#${menu.href}`}>{menu.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="navigation clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/causes">causes</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <Accordion defaultActiveKey="0" className="d-block d-lg-none mobile-menu">
        <div className="navbar-header py-10">
          <div className="mobile-logo">
            <Link href="/">
              <img
                src="/assets/images/charity2/logof.png"
                alt="Logo"
                title="Logo"
              />
            </Link>
          </div>
          <Accordion.Toggle
            as={"button"}
            className="navbar-toggle"
            eventKey="navbar-collapse"
          >
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="navbar-collapse"
          className="navbar-collapse clearfix"
        >
          <MobileMenu onePage={onePage} menus={menus} />
        </Accordion.Collapse>
      </Accordion>
    </Fragment>
  );
};

const MobileMenu = ({ sidebar, onePage, menus = [] }) => {
  return (
    <Fragment>
      {onePage ? (
        <ul
          className={`${
            sidebar ? "sidebar-menu" : "navigation"
          } onepage clearfix`}
        >
          {menus.map((menu) => (
            <li key={menu.id}>
              <Link href={`#${menu.href}`}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={`${sidebar ? "sidebar-menu" : "navigation"} clearfix`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/causes">causes</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </Fragment>
  );
};

// Placeholder for NavSearch component - you'll need to implement this
const NavSearch = () => null;

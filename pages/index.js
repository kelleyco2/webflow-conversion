import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div className="nav-container w-container">
          <a href="index.html" className="logo-block w-nav-brand">
            <Image
              src="/ images/Logo.svg"
              loading="lazy"
              width={112}
              height={76}
              alt=""
              className="image"
            />
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <a href="about.html" className="nav-link w-nav-link">
              About
            </a>
            <div
              data-hover="false"
              data-delay="0"
              className="dropdown w-dropdown"
            >
              <div className="dropdown-toggle w-dropdown-toggle">
                <div className="w-icon-dropdown-toggle"></div>
                <div>Products</div>
              </div>
              <nav className="dropdown-list w-dropdown-list">
                <a
                  href="prf-insurance.html"
                  className="dropdown-link w-dropdown-link"
                >
                  PRF Insurance
                </a>
                <a
                  href="lrp-insurance.html"
                  className="dropdown-link w-dropdown-link"
                >
                  LRP Insurance
                </a>
                <a
                  href="risk-management.html"
                  className="dropdown-link w-dropdown-link"
                >
                  Risk Management
                </a>
              </nav>
            </div>
            <a href="blog.html" className="nav-link w-nav-link">
              Blog
            </a>
            <a
              href="contact.html"
              aria-current="page"
              className="nav-link w-nav-link w--current"
            >
              Contact
            </a>
            <a href="tel:4356251022" className="nav-link w-nav-link">
              (435) 625-1022
            </a>
            <div className="nav-spacer"></div>
            <a
              href="#"
              target="_blank"
              className="button white-outline margin-right-24 w-button"
            >
              Customer Portal
            </a>
            <a
              href="get-a-quote.html"
              className="button white-outline w-button"
            >
              Get a Quote
            </a>
          </nav>
          <div className="menu-button w-nav-button">
            <div className="w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
      <div className="sub-hero contact-hero wf-section">
        <div className="hero-heading">
          <h1 className="heading h1 smaller white-text sub-hero-heading">
            Contact
          </h1>
        </div>
      </div>
      <div className="contact-content wf-section">
        <div className="contact-content-container">
          <div className="contact-form-block">
            <div className="w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
              >
                <input
                  type="text"
                  className="text-field w-input"
                  maxLength="256"
                  name="First-name"
                  data-name="First name"
                  placeholder="First name"
                  id="First-name"
                  required=""
                />
                <input
                  type="text"
                  className="text-field w-input"
                  maxLength="256"
                  name="Last-name"
                  data-name="Last name"
                  placeholder="Last name"
                  id="Last-name"
                  required=""
                />
                <input
                  type="email"
                  className="text-field w-input"
                  maxLength="256"
                  name="email"
                  data-name="Email"
                  placeholder="Email"
                  id="email"
                  required=""
                />
                <input
                  type="text"
                  className="text-field w-input"
                  maxLength="256"
                  name="Phone"
                  data-name="Phone"
                  placeholder="Phone (optional)"
                  id="Phone"
                />
                <textarea
                  placeholder="Message"
                  maxLength="5000"
                  id="Message-2"
                  name="Message"
                  required=""
                  data-name="field"
                  className="text-field w-input"
                ></textarea>
                <input
                  type="submit"
                  value="Submit"
                  data-wait="Please wait..."
                  className="button full-width w-button"
                />
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div className="contact-info-block">
            <div className="contact-info">
              <h2 className="heading h2 all-caps white-text">Contact Info</h2>
              <div className="margin-top-16">
                <a
                  href="https://g.page/redd-summit-advisors?share"
                  target="_blank"
                  className="contact-info-link"
                  rel="noreferrer"
                >
                  Redd Summit Advisors
                  <br />
                  PO Box 62
                  <br />
                  Spanish Fork, UT 84660
                </a>
              </div>
              <div className="margin-top-16">
                <a href="tel:4356251022" className="contact-info-link">
                  (435) 625-1022
                </a>
              </div>
              <div className="margin-top-16">
                <p className="paragraph white-text">
                  9:00 AM – 5:00 PM on weekdays
                </p>
              </div>
            </div>
            <div className="love-to-see-you">
              <div className="product-summary-content-copy love-to-see-you-content">
                <h2 className="heading h2 all-caps margin-top-16 margin-left-32">
                  We’d love to come see your ranch!
                </h2>
                <div className="product-summary-horizontal-line"></div>
                <p className="paragraph margin-left-32 no-justification">
                  We make regular visits to ranches across the country, we would
                  love to come visit you and show you the benefits of PRF
                  insurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="start-ranching-cta wf-section">
        <div className="container-flex start-ranching-container w-container">
          <h2 className="paragraph bold all-caps white-text">
            Start ranching with security todaY
          </h2>
          <div className="start-ranching-ctas">
            <a href="#" className="link white-text-link margin-right-24">
              (435) 625-1022
            </a>
            <a
              href="https://calendly.com/reddsummitadvisors"
              className="button white-outline w-button"
            >
              Talk to an Agent
            </a>
          </div>
        </div>
      </div>
      <div className="footer wf-section">
        <div className="footer-container">
          <div className="footer-links">
            <a href="about.html" className="footer-link">
              About Us
            </a>
            <a href="agents.html" className="footer-link">
              Agents
            </a>
            <a href="prf-insurance.html" className="footer-link">
              PRF Insurance
            </a>
            <a href="lrp-insurance.html" className="footer-link">
              LRP Insurance
            </a>
            <a href="blog.html" className="footer-link">
              Blog
            </a>
            <a href="#" target="_blank" className="footer-link">
              Jobs
            </a>
            <a
              href="contact.html"
              aria-current="page"
              className="footer-link w--current"
            >
              Contact
            </a>
            <a href="tel:4356251022" className="footer-link">
              (435) 625-1022
            </a>
          </div>
          <div className="footer-graphic">
            <Image
              src="/images/footer-graphic2x.png"
              loading="lazy"
              width={172}
              height={187}
              alt=""
              className="image-2"
            />
          </div>
          <p className="footer-copyright">© 2022 Redd Summit Advisors</p>
          <div className="social-icons">
            <a
              href="https://twitter.com/Redd_Summit"
              target="_blank"
              className="social-icon w-inline-block"
              rel="noreferrer"
            >
              <Image
                src="/images/icon-twitter.svg"
                loading="lazy"
                alt=""
                width={24}
                height={20}
              />
            </a>
            <a
              href="https://www.instagram.com/reddsummitadvisors"
              target="_blank"
              className="social-icon w-inline-block"
              rel="noreferrer"
            >
              <Image
                src="/images/icon-instagram.svg"
                loading="lazy"
                alt=""
                width={24}
                height={20}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCdvsPbGs9cMKElCTe4eQ6-g"
              target="_blank"
              className="social-icon w-inline-block"
              rel="noreferrer"
            >
              <Image
                src="/images/icon-youtube.svg"
                loading="lazy"
                alt=""
                width={24}
                height={20}
              />
            </a>
            <a
              href="https://www.facebook.com/reddsummitadvisors/"
              target="_blank"
              className="social-icon w-inline-block"
              rel="noreferrer"
            >
              <Image
                src="/images/icon-facebook.svg"
                loading="lazy"
                alt=""
                width={24}
                height={20}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/redd-summit-advisors/"
              target="_blank"
              className="social-icon w-inline-block"
              rel="noreferrer"
            >
              <Image
                src="/images/icon-linkedin.svg"
                loading="lazy"
                alt=""
                width={24}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

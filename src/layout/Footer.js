import Link from "next/link";
import Counter from "../components/Counter";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter />;
    case 3:
      return <Footer3 />;

    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const ScrollTopBtn = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      style={{ display: "inline-block" }}
      className="scroll-top scroll-to-target"
      data-target="html"
      onClick={() => scrollTop()}
    >
      <span className="fas fa-angle-double-up" />
    </button>
  );
};

const DefaultFooter = () => (
  <footer className="main-footer bg-green text-white">
    <div className="container">
      <div className="footer-top-newsletter py-80 mb-75">
        <div className="section-title">
          <h2>Newsletter Subscribe</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()} action="#">
          <input type="email" placeholder="Email Address" required="" />
          <button className="theme-btn">
            subscribe now <i className="fas fa-angle-double-right" />
          </button>
        </form>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 order-md-2">
          <div className="footer-widget about-widget text-center">
            <div className="footer-logo mb-30">
              <Link legacyBehavior href="/">
                <a>
                  <img src="assets/images/logos/logo.png" alt="Logo" />
                </a>
              </Link>
            </div>
            <div className="social-style-two pt-10">
              <Link legacyBehavior href="/contact">
                <a>
                  <i className="fab fa-facebook-f" />
                </a>
              </Link>
              <Link legacyBehavior href="/contact">
                <a>
                  <i className="fab fa-twitter" />
                </a>
              </Link>
              <Link legacyBehavior href="/contact">
                <a>
                  <i className="fab fa-linkedin-in" />
                </a>
              </Link>
              <Link legacyBehavior href="/contact">
                <a>
                  <i className="fab fa-youtube" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-1">
          <div className="footer-widget menu-widget two-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li>
                <Link legacyBehavior href="/about">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/contact">
                  Documentation
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/services">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/services">
                  Elements
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/portfolio-grid">
                  <a>Our Projects</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/shop-grid">
                  <a>Best Products</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/farmers">
                  <a>Meet Farmers</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/service-details">
                  <a>Technology</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/blog-grid">
                  <a>Latest News</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/service-details">
                  <a>Vegetables</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/contact">
                  Setting &amp; Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-3">
          <div className="footer-widget contact-widget">
            <h4 className="footer-title">Contact Us</h4>
            <ul>
              <li>
                <i className="fal fa-map-marker-alt" />
                At Movaiya, Beside World Steel, Paddhari - Mitana Road,
                Paddhari, Rajkot - Gujarat.
              </li>
              <li>
                <i className="fas fa-phone-alt" />
                <a href="tel:+91 88 66 908 906"> +91 88 66 908 906</a>
              </li>
              <li>
                <i className="far fa-envelope" />
                <a href="mailto:shasvatcropscience@gmail.com">
                  shasvatcropscience@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-25 pb-10">
        <p>Copyright © 2022 SatvaCare. All Rights Reserved.</p>
        <ul className="footer-menu">
          <li>
            <Link legacyBehavior href="/contact">
              Setting &amp; Privacy
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/faqs">
              <a>Faqs</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/contact">
              Payments
            </Link>
          </li>
        </ul>
        {/* Scroll Top Button */}
        <ScrollTopBtn />
      </div>
    </div>
    <div className="footer-shapes">
      <img
        className="footer-bg"
        src="assets/images/background/footer-bg-shape.png"
        alt="Shape"
      />
      <img
        className="shape-one"
        src="assets/images/shapes/footer1.png"
        alt="Shape"
      />
      <img
        className="shape-two"
        src="assets/images/shapes/footer2.png"
        alt="Shape"
      />
      <img
        className="shape-three"
        src="assets/images/shapes/footer3.png"
        alt="Shape"
      />
      <img
        className="shape-four"
        src="assets/images/shapes/footer4.png"
        alt="Shape"
      />
    </div>
  </footer>
);
const Footer3 = () => (
  <footer className="main-footer footer-black text-white">
    <div className="container-fluid">
      <div className="footer-top-newsletter py-80 mb-75">
        <div className="section-title">
          <h2>Newsletter Subscribe</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()} action="#">
          <input type="email" placeholder="Email Address" required="" />
          <button className="theme-btn">
            subscribe now <i className="fas fa-angle-double-right" />
          </button>
        </form>
        <div className="happy-clients counter-item">
          <i className="flaticon-quote" />
          <b className="count-text" data-speed={3000} data-stop={56384}>
            <Counter end={56384} />
          </b>
          <span>Happy Clients</span>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-xl-5">
          <div className="row justify-content-between">
            <div className="col-sm-7">
              <div className="footer-widget about-widget">
                <div className="footer-logo mb-30">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                        src="assets/images/logos/logo-two-white.png"
                        alt="Logo"
                      />
                    </a>
                  </Link>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  epsa quae abillo inventore veritatis quasi architecto
                </p>
                <div className="social-style-two pt-10">
                  <Link legacyBehavior href="/contact">
                    <a>
                      <i className="fab fa-facebook-f" />
                    </a>
                  </Link>
                  <Link legacyBehavior href="/contact">
                    <a>
                      <i className="fab fa-twitter" />
                    </a>
                  </Link>
                  <Link legacyBehavior href="/contact">
                    <a>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </Link>
                  <Link legacyBehavior href="/contact">
                    <a>
                      <i className="fab fa-youtube" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="footer-widget menu-widget">
                <h4 className="footer-title">Quick Links</h4>
                <ul>
                  <li>
                    <Link legacyBehavior href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/portfolio-grid">
                      <a>Our Projects</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/farmers">
                      <a>Meet Farmers</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/blog-grid">
                      <a>Latest News</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service-details">
                      <a>Vegetables</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-7">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget news-widget">
                <h4 className="footer-title">Recent News</h4>
                <ul>
                  <li>
                    <div className="image">
                      <img
                        src="assets/images/news/news-widget1.jpg"
                        alt="News"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link legacyBehavior href="/blog-details">
                          Universal Principles User Experience
                        </Link>
                      </h6>
                      <span className="name">By Westfield</span>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img
                        src="assets/images/news/news-widget2.jpg"
                        alt="News"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link legacyBehavior href="/blog-details">
                          Roll Out New Featuc Without Hurting
                        </Link>
                      </h6>
                      <span className="name">By Mendonca</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget contact-widget">
                <h4 className="footer-title">Contact Us</h4>
                <p>
                  Quis autem vel eum reprehenderit voluptate velit esse quamnue{" "}
                </p>
                <ul>
                  <li>
                    <i className="fal fa-map-marker-alt" />
                    At Movaiya, Beside World Steel, Paddhari - Mitana Road,
                    Paddhari, Rajkot - Gujarat.
                  </li>
                  <li>
                    <i className="far fa-phone" />
                    <a href="mailto:shasvatcropscience@gmail.com">
                      shasvatcropscience@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="far fa-envelope" />
                    <a href="calto:+012(345)67899"> +91 88 66 908 906</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget gallery-widget">
                <h4 className="footer-title">Gallery</h4>
                <ul>
                  <li>
                    <a href="assets/images/widgets/gallery1.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery1.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="assets/images/widgets/gallery2.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery2.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="assets/images/widgets/gallery3.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery3.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="assets/images/widgets/gallery4.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery4.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="assets/images/widgets/gallery5.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery5.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="assets/images/widgets/gallery6.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery6.jpg"
                      alt="Gallery"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area-wrap">
      <div className="container-fluid">
        <div className="copyright-area pt-25 pb-10">
          <p>Copyright © 2022 Munfirm. All Rights Reserved.</p>
          <ul className="footer-menu">
            <li>
              <Link legacyBehavior href="/contact">
                <a>Setting &amp; Privacy</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/faqs">
                <a>Faqs</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a>Payments</a>
              </Link>
            </li>
          </ul>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="fas fa-angle-double-up" />
          </button>
        </div>
      </div>
    </div>
    <div className="footer-shapes">
      <img
        className="footer-bg"
        src="assets/images/background/footer-bg-shape.png"
        alt="Shape"
      />
      <img
        className="shape-one"
        src="assets/images/shapes/footer1.png"
        alt="Shape"
      />
      <img
        className="shape-two"
        src="assets/images/shapes/footer2.png"
        alt="Shape"
      />
      <img
        className="shape-three"
        src="assets/images/shapes/footer3.png"
        alt="Shape"
      />
      <img
        className="shape-four"
        src="assets/images/shapes/footer4.png"
        alt="Shape"
      />
    </div>
  </footer>
);

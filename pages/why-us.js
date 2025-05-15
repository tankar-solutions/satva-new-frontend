import Link from "next/link";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import FeedbackTwoSlider from "../src/components/FeedbackTwoSlider";
import PageBanner from "../src/components/PageBanner";
import ExperienceTeam from "../src/components/slider/ExperienceTeam";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";

const WhyUs = () => {
  return (
    <Layout>
      <PageBanner pageName={"Why Us"} />
      {/* R&D Hero Section */}
      <section className="about-section-two rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-lg-6">
              <div className="about-two-image not-rounded wow fadeInUp delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-page-left.jpg"
                  alt="R&D"
                />
                <img
                  className="about-over"
                  src="assets/images/about/about-left-over.png"
                  alt="R&D"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-content pt-60 wow fadeInUp delay-0-4s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">Research & Development</span>
                  <h2>Innovation Engine of SatvaCare</h2>
                </div>
                <div className="about-features mt-60">
                  <div className="row">
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-5s">
                        <span className="number">1</span>
                        <div className="icon">
                          <i className="flaticon-offer" />
                        </div>
                        <h4>
                          <Link legacyBehavior href="/service-details">
                            High Rate of New Product Delivery
                          </Link>
                        </h4>
                        <p>Maintaining a high rate of new product delivery to the end of the decade.</p>
                        <img src="assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-6s">
                        <span className="number">2</span>
                        <div className="icon">
                          <i className="flaticon-return-box" />
                        </div>
                        <h4>
                          <Link legacyBehavior href="/service-details">
                            Targeted Early Research
                          </Link>
                        </h4>
                        <p>Investing in targeted early research for breakthrough innovation post-2020.</p>
                        <img src="assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-7s">
                        <span className="number">3</span>
                        <div className="icon">
                          <i className="flaticon-24-hours" />
                        </div>
                        <h4>
                          <Link legacyBehavior href="/service-details">
                            Quality and Yield Improvement
                          </Link>
                        </h4>
                        <p>Searching for new and improved ways of raising the quality and yield of crops worldwide.</p>
                        <img src="assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shapes">
          <img src="assets/images/shapes/about-shape1.png" alt="Shape" />
          <img src="assets/images/shapes/about-shape2.png" alt="Shape" />
        </div>
      </section>
      {/* R&D Hero Section End */}

      {/* R&D Video & Quick Facts */}
      <section className="about-page-section rel z-1 py-100 rpy-80">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-three-content rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title mb-20">Facilities & Expertise</span>
                  <h2>Our R&D Capabilities</h2>
                </div>
                <p>
                  Our R&D team is dedicated to working on various research projects that match our vision to replace chemical inputs with organic alternatives, ensuring lower production costs at the farmer level.
                </p>
                <div className="row mt-30">
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-wheat-sack" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          Analytical Lab
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-fruits" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          Pathology Lab
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-eggs-1" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          Soil Science Lab
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-social-care" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          Entomology Lab
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="about-video wow fadeInRight delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-page.jpg"
                  alt="R&D"
                />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
                <img
                  className="bg-shape"
                  src="assets/images/about/about-bg-shape.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/images/shapes/about-page.png"
          alt="Shape"
          className="shape"
        />
      </section>
      {/* R&D Video & Quick Facts End */}

      {/* Feedback Section */}
      <section className="feedback-section pt-100 rpt-70 pb-130 rpb-100">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">Customer Reviews</span>
            <h2>What Our Customers Say</h2>
          </div>
        </div>
        <FeedbackTwoSlider />
      </section>

      {/* Client Logo Section */}
      <div className="client-logo-section text-center bg-light-green py-60">
        <div className="container">
          <ClientLogoSlider />
        </div>
        <div className="client-logo-shapes">
          <img className="shape-one" src="assets/images/shapes/cl-shape1.png" alt="Shape" />
          <img className="shape-two" src="assets/images/shapes/cl-shape2.png" alt="Shape" />
          <img className="shape-three" src="assets/images/shapes/cl-shape3.png" alt="Shape" />
          <img className="shape-four" src="assets/images/shapes/cl-shape4.png" alt="Shape" />
          <img className="shape-five" src="assets/images/shapes/cl-shape5.png" alt="Shape" />
          <img className="shape-six" src="assets/images/shapes/cl-shape6.png" alt="Shape" />
        </div>
      </div>
    </Layout>
  );
};

export default WhyUs;

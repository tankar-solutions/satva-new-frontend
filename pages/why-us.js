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
      <PageBanner pageName={"why us"} />
      {/* Why Us Hero Section */}
      <section className="about-section-two rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-lg-6">
              <div className="about-two-image not-rounded wow fadeInUp delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-page-left.jpg"
                  alt="Why Us"
                />
                <img
                  className="about-over"
                  src="assets/images/about/about-left-over.png"
                  alt="Why Us"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-content pt-60 wow fadeInUp delay-0-4s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">Why Choose Us</span>
                  <h2>Experience the Difference: Our Promise to You</h2>
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
                            Exclusive Discounts
                          </Link>
                        </h4>
                        <p>Enjoy special offers and savings on healthy, organic products.</p>
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
                            Easy Returns
                          </Link>
                        </h4>
                        <p>Shop confidently with our customer-friendly return policy.</p>
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
                            24/7 Support
                          </Link>
                        </h4>
                        <p>Our team is always here to help you, day or night.</p>
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
      {/* Why Us Hero Section End */}

      {/* Features Section - Horizontal Cards */}
      <section className="feature-section pb-100 rpb-70 rel z-1 bg-light-green">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">Our Strengths</span>
            <h2>What Makes Us Stand Out</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <span className="number">01</span>
                  <div className="image">
                    <img
                      src="assets/images/features/feature1.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>Organic Vegetables</h4>
                  <p>
                    Fresh, healthy, and grown with care - our vegetables are always organic and delicious.
                  </p>
                </div>
                <Link legacyBehavior href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item color-two wow fadeInUp delay-0-4s">
                <div className="content">
                  <span className="number">02</span>
                  <div className="image">
                    <img
                      src="assets/images/features/feature2.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>Organic Fruits</h4>
                  <p>
                    Taste the difference with our hand-picked, naturally ripened fruits.
                  </p>
                </div>
                <Link legacyBehavior href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item color-three wow fadeInUp delay-0-6s">
                <div className="content">
                  <span className="number">03</span>
                  <div className="image">
                    <img
                      src="assets/images/features/feature3.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>Agriculture &amp; Farming</h4>
                  <p>
                    Our sustainable farming practices ensure quality and care from seed to table.
                  </p>
                </div>
                <Link legacyBehavior href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section End */}

      {/* Why Us Video & Quick Facts */}
      <section className="about-page-section rel z-1 py-100 rpy-80">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-three-content rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title mb-20">Trusted by Many</span>
                  <h2>Why Our Customers Love Us</h2>
                </div>
                <p>
                  Our commitment to quality, sustainability, and customer service has earned us the trust of thousands. See why families and businesses choose us for their organic needs.
                </p>
                <div className="row mt-30">
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-wheat-sack" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          Agriculture &amp; Foods
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
                          Vegetables &amp; Fruits
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
                          Farming Products
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
                          Crisp Bread &amp; Cake’s
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
                  alt="Why Us"
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
      {/* Why Us Video & Quick Facts End */}

      {/* Gallery Section */}
      <section className="gallery-area pt-80 pb-80">
        <PhotoGallery noHeader />
      </section>

      {/* Team Section */}
      <section className="team-area pt-50 rpt-20 pb-95 rpb-65 bg-white">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">Meet Our Experts</span>
            <h2>Passionate People Behind Our Quality</h2>
          </div>
          <ExperienceTeam />
        </div>
      </section>

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





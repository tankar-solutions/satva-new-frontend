import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import { productActiveTwo } from "../src/sliderProps";
const ProductDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Product Details"} />
      <section className="product-details-area pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="product-preview-images wow fadeInLeft delay-0-2s">
                <div
                  className="single-product-image"
                  style={{
                    width: "100%",
                    paddingBottom: "100%",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "8px",
                    background: "transparent", 
                    border: "none",
                  }}
                >
                  <a
                    href="assets/images/products/satva-vam.png"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                  >
                    <img
                      src="assets/images/products/satva-vam.png"
                      alt="Preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="product-details-content mb-30 wow fadeInRight delay-0-2s">
                <div className="off-ratting mb-15">
                  <span className="off">20 Off</span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <div className="section-title mb-20">
                  <h2>Satva Vam</h2>
                </div>
                <p>
                Satva vam is a bio formulation based on Vesicular Arbuscular Mycorrhiza (VAM),
                 available in both granular and hyphal powder form. It is a beneficial fungus that forms a
                 symbiotic association with plant roots, enabling better absorption of essential nutrients
                  like phosphorus, nitrogen, and other micronutrients from the soil.
                </p>
                <span className="price mb-20">55.96</span>
                <hr />
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="add-to-cart mt-40 mb-40"
                >
                  <input
                    type="number"
                    defaultValue={2}
                    min={1}
                    max={20}
                    required=""
                  />
                  <button type="submit" className="theme-btn">
                    Add to Cart <i className="fas fa-angle-double-right" />
                  </button>
                </form>
                {/* <ul className="category-tags pt-10">
                  <li>
                    <b>Category</b>
                    <span>:</span>
                    <a href="#">Green</a>
                    <a href="#">Vegetables</a>
                  </li>
                  <li>
                    <b>Tags</b>
                    <span>:</span>
                    <a href="#">Organic</a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"details"}>
            <Nav className="nav nav-tabs product-information-tab pt-35 mb-25">
              <li>
                <Nav.Link
                  eventKey={"details"}
                  href="#details"
                  data-toggle="tab"
                >
                  Description
                </Nav.Link>
              </li>
        
            </Nav>
            <Tab.Content className="tab-content wow fadeInUp delay-0-2s">
              <Tab.Pane className="tab-pane" eventKey="details">
                <p>
                Satva vam is a bio formulation based on Vesicular Arbuscular Mycorrhiza (VAM), available in both granular and hyphal powder form. It is a beneficial fungus that forms a symbiotic association with plant roots, enabling better absorption of essential nutrients like phosphorus, nitrogen, and other micronutrients from the soil.

                </p>
                <ul className="list-style-one">
                  <li>Enhances root development and strengthens the root system.
                  </li>
                  <li>
                  Increases plant resistance to both abiotic stress (drought, cold) and biotic stress (soil-borne pathogens).
                  </li>
                  <li>
                  Improves soil texture and structure, enhancing water retention and uptake by plants.
                  </li>
                  <li>Acts as a natural facilitator for better nutrient availability and plant growth.</li>
                </ul>
              </Tab.Pane>
            
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/* Product Details End */}
      {/* Revidew Form Area Start */}
      <div className="review-form-area pt-65">
        <div className="container">
          <form
            onSubmit={(e) => e.preventDefault()}
            id="review-form"
            className="review-form wow fadeInUp delay-0-2s"
            name="comment-form"
            action="#"
            method="post"
          >
            <div className="section-title mb-15">
              <h3>Leave a Comments</h3>
            </div>
            <div className="ratting mb-40">
              <span>Your Rating</span>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Full Name"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="number"
                    name="number"
                    className="form-control"
                    defaultValue=""
                    placeholder="Phone Number"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    defaultValue=""
                    placeholder="Email Address"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={4}
                    placeholder="Write Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn">
                    Send Reviews
                    <i className="fas fa-angle-double-right" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Revidew Form Area End */}
      {/* Related Products Start */}
      <section className="related-product rel z-1 pt-125 rpt-95 pb-130 rpb-100">
        <div className="container">
          <div className="section-title text-center mb-60">
            <h3>Related Products</h3>
          </div>
          <Slider {...productActiveTwo} className="product-active-two">
            <div className="product-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/products/agro-vam.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link legacyBehavior href="/product-details">
                    Agro Vam
                  </Link>
                </h5>
                <span className="price">
                  <span>85</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-4s">
              <span className="offer">20 Off</span>
              <div className="image">
                <img src="assets/images/products/agni-manthan.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link legacyBehavior href="/product-details">
                    Agni Manthan
                  </Link>
                </h5>
                <span className="price">
                  <del>25</del>
                  <span>18</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/products/bliss.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link legacyBehavior href="/product-details">
                    Bliss
                  </Link>
                </h5>
                <span className="price">
                  <del>55</del>
                  <span>36</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-8s">
              <span className="offer bg-red">sale</span>
              <div className="image">
                <img src="assets/images/products/dhara-manthan.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link legacyBehavior href="/product-details">
                    Dhara Manthan
                  </Link>
                </h5>
                <span className="price">
                  <span>205</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/products/kloris.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link legacyBehavior href="/product-details">
                    Kloris
                  </Link>
                </h5>
                <span className="price">
                  <del>55</del>
                  <span>36</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/products/manglow.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link legacyBehavior href="/product-details">
                    Manglow
                  </Link>
                </h5>
                <span className="price">
                  <del>55</del>
                  <span>36</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/products/mercury.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link legacyBehavior href="/product-details">
                    Mercury
                  </Link>
                </h5>
                <span className="price">
                  <del>55</del>
                  <span>36</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/products/samudra-manthan.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link legacyBehavior href="/product-details">
                    Samudra Manthan
                  </Link>
                </h5>
                <span className="price">
                  <del>55</del>
                  <span>36</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/products/stofi.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link legacyBehavior href="/product-details">
                    Stofi
                  </Link>
                </h5>
                <span className="price">
                  <del>55</del>
                  <span>36</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/products/tejas.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link legacyBehavior href="/product-details">
                    Tejas
                  </Link>
                </h5>
                <span className="price">
                  <del>55</del>
                  <span>36</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/products/vaccin.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link legacyBehavior href="/product-details">
                    Vaccin
                  </Link>
                </h5>
                <span className="price">
                  <del>55</del>
                  <span>36</span>
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </Layout>
  );
};
export default ProductDetails;

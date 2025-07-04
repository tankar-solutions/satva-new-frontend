import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import Slider from "react-slick";
import { productActive } from "../src/sliderProps";


// Product data
const products = [
  {
    id: 1,
    name: "Organic Broccoli",
    image: "assets/images/products/product1.png",
    price: 18,
    oldPrice: 25,
    offer: "53% Off",
    rating: 5,
    link: "/product-details",
  },
  {
    id: 2,
    name: "Fresh Carrots",
    image: "assets/images/products/product2.png",
    price: 49.58,
    rating: 5,
    link: "/product-details",
  },
  {
    id: 3,
    name: "Organic Broccoli",
    image: "assets/images/products/product3.png",
    price: 18,
    oldPrice: 25,
    offer: "Sale",
    offerClass: "bg-red",
    rating: 5,
    link: "/product-details",
  },
  {
    id: 4,
    name: "Fresh Gooseberry",
    image: "assets/images/products/product5.png",
    price: 205,
    rating: 5,
    link: "/product-details",
  },
  {
    id: 5,
    name: "Chicken Egg",
    image: "assets/images/products/product4.png",
    price: 36,
    oldPrice: 55,
    offer: "20% Off",
    rating: 5,
    link: "/product-details",
  },
  {
    id: 6,
    name: "Fresh Croissants",
    image: "assets/images/products/product6.png",
    price: 18,
    oldPrice: 25,
    offer: "53% Off",
    rating: 5,
    link: "/product-details",
  },
  {
    id: 7,
    name: "Chicken Eggs",
    image: "assets/images/products/product7.png",
    price: 205,
    rating: 5,
    link: "/product-details",
  },
  {
    id: 8,
    name: "Organic Orange",
    image: "assets/images/products/product8.png",
    price: 85,
    rating: 5,
    link: "/product-details",
  },
  {
    id: 9,
    name: "Fresh Croissants",
    image: "assets/images/products/product9.png",
    price: 299,
    rating: 5,
    link: "/product-details",
  },
  {
    id: 10,
    name: "Organic Broccoli",
    image: "assets/images/products/product10.png",
    price: 18,
    oldPrice: 25,
    offer: "53% Off",
    rating: 5,
    link: "/product-details",
  },
  {
    id: 11,
    name: "Fresh Carrots",
    image: "assets/images/products/product11.png",
    price: 49.58,
    rating: 5,
    link: "/product-details",
  },
  {
    id: 12,
    name: "Organic Broccoli",
    image: "assets/images/products/product12.png",
    price: 18,
    oldPrice: 25,
    offer: "Sale",
    offerClass: "bg-red",
    rating: 5,
    link: "/product-details",
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Page Banner */}
      <PageBanner pageName={"Products"} />

      {/* Hero/Intro Section */}
      <section className="about-section-two rel z-1 pt-100 pb-60">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-two-image not-rounded wow fadeInUp delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-page-left.jpg"
                  alt="Our Products"
                />
                <img
                  className="about-over"
                  src="assets/images/about/about-left-over.png"
                  alt="Decor"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-content pt-60 wow fadeInUp delay-0-4s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">Our Collection</span>
                  <h2>Fresh. Organic. Delivered.</h2>
                </div>
                <p>
                  Discover our range of handpicked, organic products-grown and harvested with care, and delivered fresh to your door. From vibrant vegetables and fruits to wholesome eggs and bakery, we bring you the best of nature’s bounty.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shapes">
          <img src="assets/images/shapes/about-shape1.png" alt="Shape" />
          <img src="assets/images/shapes/about-shape2.png" alt="Shape" />
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="product-section pt-100 rpt-70 pb-130 rpb-100">
        <div className="container-fluid">
        <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">
            Nourishing Earth, Growing Health
            </span>
            <h2>Our Products</h2>
          </div>
          <Slider {...productActive} className="product-active">
            <div className="product-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/products/satva-vam.png" alt="Product" />
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
                    Satva Vam
                  </Link>
                </h5>
                <span className="price">
                  {/* <del>25</del> */}
                  <span>9999</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-3s">
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
                  <span>9999</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-4s">
              {/* <span className="offer bg-red">sale</span> */}
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
                  {/* <del>25</del> */}
                  <span>9999</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-5s">
              {/* <span className="offer">20 Off</span> */}
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
                  {/* <del>55</del> */}
                  <span>9999</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-6s">
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
                    Agni-Manthan
                  </Link>
                </h5>
                <span className="price">
                  <span>9999</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-7s">
              {/* <span className="offer">53 Off</span> */}
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
                  {/* <del>25</del> */}
                  <span>9999</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-8s">
              {/* <span className="offer">25 Off</span> */}
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
                    Dhara-Manthan
                  </Link>
                </h5>
                <span className="price">
                  {/* <del>25</del> */}
                  <span>9999</span>
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* Products Grid */}
      {/* <section className="shop-page rel z-1 pt-60 pb-100 rpb-80">
        <div className="container">
          <div className="shop-shorter rel z-3 pt-10 mb-40 wow fadeInUp delay-0-2s">
            <div className="products-dropdown">
              <select>
                <option value="default" defaultValue>
                  Best Selling
                </option>
                <option value="new">Latest</option>
                <option value="old">Oldest</option>
                <option value="hight-to-low">High To Low</option>
                <option value="low-to-high">Low To High</option>
              </select>
            </div>
            <ul className="grid-list">
              <li>
                <a href="#">
                  <i className="fas fa-border-all" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-bars" />
                </a>
              </li>
            </ul>
          </div>
          <div className="row show-grid-row">
            {products.map((product, idx) => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={product.id}>
                <div className={`product-item wow fadeInUp delay-0-${(idx % 4 + 2) * 2}s`}>
                  {product.offer && (
                    <span className={`offer ${product.offerClass || ""}`}>{product.offer}</span>
                  )}
                  <div className="image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      {[...Array(product.rating)].map((_, i) => (
                        <i className="fas fa-star" key={i} />
                      ))}
                    </div>
                    <h5>
                      <Link legacyBehavior href={product.link}>
                        <a>{product.name}</a>
                      </Link>
                    </h5>
                    <span className="price">
                      {product.oldPrice && <del>${product.oldPrice}</del>}
                      <span>${product.price}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ul className="pagination flex-wrap justify-content-center pt-10">
            <Pagination
              paginationCls={".show-grid-row .col-xl-3"}
              defaultSort={8}
            />
          </ul>
        </div>
      </section> */}
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

export default Products;




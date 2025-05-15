// import Link from "next/link";
// import { Nav, Tab } from "react-bootstrap";
// import Slider from "react-slick";
// import PageBanner from "../../src/components/PageBanner";
// import Layout from "../../src/layout/Layout.js";
// import { productActiveTwo } from "../../src/sliderProps";
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';

// const ProductDetails = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (id) {
//       // Mock data fetching
//       const products = [
//         {
//           id: 1,
//           name: "Satva Vam",
//           description: "Satva vam is a bio formulation based on Vesicular Arbuscular Mycorrhiza (VAM), available in both granular and hyphal powder form. It is a beneficial fungus that forms a symbiotic association with plant roots, enabling better absorption of essential nutrients like phosphorus, nitrogen, and other micronutrients from the soil.",
//           price: 55.96,
//           image: "/assets/images/products/product1.png"
//         },
//         {
//           id: 2,
//           name: "Agro Vam",
//           description: "Agro Vam is a bio formulation based on Vesicular Arbuscular Mycorrhiza (VAM), available in both granular and hyphal powder form. It is a beneficial fungus that forms a symbiotic association with plant roots, enabling better absorption of essential nutrients like phosphorus, nitrogen, and other micronutrients from the soil.",
//           price: 85,
//           image: "/assets/images/products/product2.png"
//         },
//         {
//           id: 3,
//           name: "Agni Manthan",
//           description: "Agni Manthan is a bio formulation based on Vesicular Arbuscular Mycorrhiza (VAM), available in both granular and hyphal powder form. It is a beneficial fungus that forms a symbiotic association with plant roots, enabling better absorption of essential nutrients like phosphorus, nitrogen, and other micronutrients from the soil.",
//           price: 18,
//           image: "/assets/images/products/product3.png"
//         },
//         {
//           id: 4,
//           name: "Bliss",
//           description: "Bliss is a bio formulation based on Vesicular Arbuscular Mycorrhiza (VAM), available in both granular and hyphal powder form. It is a beneficial fungus that forms a symbiotic association with plant roots, enabling better absorption of essential nutrients like phosphorus, nitrogen, and other micronutrients from the soil.",
//           price: 36,
//           oldPrice: 55,
//           image: "/assets/images/products/product4.png"
//         },
//         {
//           id: 5,
//           name: "Dhara Manthan",
//           description: "Dhara Manthan is a bio formulation based on Vesicular Arbuscular Mycorrhiza (VAM), available in both granular and hyphal powder form. It is a beneficial fungus that forms a symbiotic association with plant roots, enabling better absorption of essential nutrients like phosphorus, nitrogen, and other micronutrients from the soil.",
//           price: 205,
//           image: "/assets/images/products/product5.png"
//         },
//         {
//           id: 6,
//           name: "Kloris",
//           description: "Kloris is a bio formulation based on Vesicular Arbuscular Mycorrhiza (VAM), available in both granular and hyphal powder form. It is a beneficial fungus that forms a symbiotic association with plant roots, enabling better absorption of essential nutrients like phosphorus, nitrogen, and other micronutrients from the soil.",
//           price: 36,
//           oldPrice: 55,
//           image: "/assets/images/products/product6.png"
//         },
//         {
//           id: 7,
//           name: "Manglow",
//           description: "Manglow is a bio formulation based on Vesicular Arbuscular Mycorrhiza (VAM), available in both granular and hyphal powder form. It is a beneficial fungus that forms a symbiotic association with plant roots, enabling better absorption of essential nutrients like phosphorus, nitrogen, and other micronutrients from the soil.",
//           price: 36,
//           oldPrice: 55,
//           image: "/assets/images/products/product7.png"
//         },
//         // Add more products as needed
//       ];

//       const selectedProduct = products.find(p => p.id === parseInt(id));
//       if (selectedProduct) {
//         setProduct(selectedProduct);
//       } else {
//         setError("Product not found");
//       }
//     }
//   }, [id]);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Layout header={1}>
//       <PageBanner pageName={"Product Details"} />
//       <section className="product-details-area pt-130 rpt-100">
//         <div className="container">
//           <div className="row align-items-center justify-content-between">
//             <div className="col-lg-6">
//               <div className="product-preview-images wow fadeInLeft delay-0-2s">
//                 <div
//                   className="single-product-image"
//                   style={{
//                     width: "100%",
//                     paddingBottom: "100%",
//                     position: "relative",
//                     overflow: "hidden",
//                     borderRadius: "8px",
//                     background: "transparent",
//                     border: "none",
//                   }}
//                 >
//                   <a
//                     href={product.image}
//                     style={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       width: "100%",
//                       height: "100%",
//                       display: "block",
//                     }}
//                   >
//                    <div className="single-product-image">
//   <a href={product.image}>
//     <Image
//       src={product.image}
//       alt="Preview"
//       width={500} // Set the appropriate width
//       height={500} // Set the appropriate height
//       objectFit="cover"
//     />
//   </a>
// </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-5 col-lg-6">
//               <div className="product-details-content mb-30 wow fadeInRight delay-0-2s">
//                 <div className="section-title mb-20">
//                   <h2>{product.name}</h2>
//                 </div>
//                 <p>
//                   {product.description}
//                 </p>
//                 <span className="price mb-20">
//                   {product.oldPrice && <del>{product.oldPrice}</del>}
//                   <span>{product.price}</span>
//                 </span>
//                 <hr />
//                 <form
//                   onSubmit={(e) => e.preventDefault()}
//                   action="#"
//                   className="add-to-cart mt-40 mb-40"
//                 >
//                   <input
//                     type="number"
//                     defaultValue={2}
//                     min={1}
//                     max={20}
//                     required=""
//                   />
//                   <button type="submit" className="theme-btn">
//                     Add to Cart <i className="fas fa-angle-double-right" />
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <Tab.Container defaultActiveKey={"details"}>
//             <Nav className="nav nav-tabs product-information-tab pt-35 mb-25">
//               <li>
//                 <Nav.Link
//                   eventKey={"details"}
//                   href="#details"
//                   data-toggle="tab"
//                 >
//                   Description
//                 </Nav.Link>
//               </li>
//             </Nav>
//             <Tab.Content className="tab-content wow fadeInUp delay-0-2s">
//               <Tab.Pane className="tab-pane" eventKey="details">
//                 <p>
//                   {product.description}
//                 </p>
//                 <ul className="list-style-one">
//                   <li>Enhances root development and strengthens the root system.</li>
//                   <li>Increases plant resistance to both abiotic stress (drought, cold) and biotic stress (soil-borne pathogens).</li>
//                   <li>Improves soil texture and structure, enhancing water retention and uptake by plants.</li>
//                   <li>Acts as a natural facilitator for better nutrient availability and plant growth.</li>
//                 </ul>
//               </Tab.Pane>
//             </Tab.Content>
//           </Tab.Container>
//         </div>
//       </section>
//       {/* Review Form Area Start */}
//       <div className="review-form-area pt-65">
//         <div className="container">
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             id="review-form"
//             className="review-form wow fadeInUp delay-0-2s"
//             name="comment-form"
//             action="#"
//             method="post"
//           >
//             <div className="section-title mb-15">
//               <h3>Leave a Comments</h3>
//             </div>
//             <div className="ratting mb-40">
//               <span>Your Rating</span>
//               <i className="fas fa-star" />
//               <i className="fas fa-star" />
//               <i className="fas fa-star" />
//               <i className="fas fa-star" />
//               <i className="fas fa-star" />
//             </div>
//             <div className="row">
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     id="full-name"
//                     name="full-name"
//                     className="form-control"
//                     defaultValue=""
//                     placeholder="Full Name"
//                     required=""
//                   />
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     id="number"
//                     name="number"
//                     className="form-control"
//                     defaultValue=""
//                     placeholder="Phone Number"
//                     required=""
//                   />
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="form-control"
//                     defaultValue=""
//                     placeholder="Email Address"
//                     required=""
//                   />
//                 </div>
//               </div>
//               <div className="col-md-12">
//                 <div className="form-group">
//                   <textarea
//                     name="message"
//                     id="message"
//                     className="form-control"
//                     rows={4}
//                     placeholder="Write Message"
//                     required=""
//                     defaultValue={""}
//                   />
//                 </div>
//               </div>
//               <div className="col-md-12">
//                 <div className="form-group mb-0">
//                   <button type="submit" className="theme-btn">
//                     Send Reviews
//                     <i className="fas fa-angle-double-right" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//       {/* Review Form Area End */}
//       {/* Related Products Start */}
//       <section className="related-product rel z-1 pt-125 rpt-95 pb-130 rpb-100">
//         <div className="container">
//           <div className="section-title text-center mb-60">
//             <h3>Related Products</h3>
//           </div>
//           <Slider {...productActiveTwo} className="product-active-two">
//             <div className="product-item wow fadeInUp delay-0-2s">
//               <div className="image">
//                 <img src="/assets/images/products/agro-vam.png" alt="Product" />
//               </div>
//               <div className="content">
//                 <div className="ratting">
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                 </div>
//                 <h5>
//                   <Link legacyBehavior href="/product-details/2">
//                     Agro Vam
//                   </Link>
//                 </h5>
//                 <span className="price">
//                   <span>85</span>
//                 </span>
//               </div>
//             </div>
//             <div className="product-item wow fadeInUp delay-0-4s">
//               <div className="image">
//                 <img src="/assets/images/products/agni-manthan.png" alt="Product" />
//               </div>
//               <div className="content">
//                 <div className="ratting">
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                 </div>
//                 <h5>
//                   <Link legacyBehavior href="/product-details/3">
//                     Agni Manthan
//                   </Link>
//                 </h5>
//                 <span className="price">
//                   <span>18</span>
//                 </span>
//               </div>
//             </div>
//             <div className="product-item wow fadeInUp delay-0-6s">
//               <div className="image">
//                 <img src="/assets/images/products/bliss.png" alt="Product" />
//               </div>
//               <div className="content">
//                 <div className="ratting">
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                 </div>
//                 <h5>
//                   <Link legacyBehavior href="/product-details/4">
//                     Bliss
//                   </Link>
//                 </h5>
//                 <span className="price">
//                   <del>55</del>
//                   <span>36</span>
//                 </span>
//               </div>
//             </div>
//             <div className="product-item wow fadeInUp delay-0-8s">
//               <div className="image">
//                 <img src="/assets/images/products/dhara-manthan.png" alt="Product" />
//               </div>
//               <div className="content">
//                 <div className="ratting">
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                 </div>
//                 <h5>
//                   <Link legacyBehavior href="/product-details/5">
//                     Dhara Manthan
//                   </Link>
//                 </h5>
//                 <span className="price">
//                   <span>205</span>
//                 </span>
//               </div>
//             </div>
//             <div className="product-item wow fadeInUp delay-0-2s">
//               <div className="image">
//                 <img src="/assets/images/products/kloris.png" alt="Product" />
//               </div>
//               <div className="content">
//                 <div className="ratting">
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                 </div>
//                 <h5>
//                   <Link legacyBehavior href="/product-details/6">
//                     Kloris
//                   </Link>
//                 </h5>
//                 <span className="price">
//                   <del>55</del>
//                   <span>36</span>
//                 </span>
//               </div>
//             </div>
//             <div className="product-item wow fadeInUp delay-0-2s">
//               <div className="image">
//                 <img src="/assets/images/products/manglow.png" alt="Product" />
//               </div>
//               <div className="content">
//                 <div className="ratting">
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                 </div>
//                 <h5>
//                   <Link legacyBehavior href="/product-details/7">
//                     Manglow
//                   </Link>
//                 </h5>
//                 <span className="price">
//                   <del>55</del>
//                   <span>36</span>
//                 </span>
//               </div>
//             </div>
//           </Slider>
//         </div>
//       </section>
//     </Layout>
//   );
// };
// export default ProductDetails;

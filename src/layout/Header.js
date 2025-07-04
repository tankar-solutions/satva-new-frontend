import Link from "next/link";
import { Fragment, useState } from "react";
import { sidebarToggle } from "../utils";
import { Blog, Contact, Home, PagesDasktop, Portfolio, Shop } from "./Menus";
import MobileMenu from "./MobileMenu";

const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header1 />;
    case 2:
      return <Header2 />;
    case 3:
      return <Header3 />;

    default:
      return <DefaultHeader />;
  }
};
export default Header;

const SearchBtn = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <button className="far fa-search" onClick={() => setToggle(!toggle)} />
      <form
        onSubmit={(e) => e.preventDefault()}
        action="#"
        className={`${toggle ? "" : "hide"}`}
      >
        <input
          type="text"
          placeholder="Search"
          className="searchbox"
          required=""
        />
        <button type="submit" className="searchbutton far fa-search" />
      </form>
    </Fragment>
  );
};
const DaskTopMenu = () => (
  <ul className="navigation clearfix d-none d-lg-flex">
    <li className="dropdown">
      <Link legacyBehavior href="/">
        Home
      </Link>
    </li>
    <li className="dropdown">
      <Link legacyBehavior href="/products">
        Products
      </Link>
    </li>
    <li className="dropdown">
       <Link legacyBehavior href="/about-us">
        About us
      </Link>
    </li>
    <li className="dropdown">
      <Link legacyBehavior href="/why-us">
        Why Us
      </Link>
    </li>
    <li className="dropdown">
      <Link legacyBehavior href="/blog">
        Blog
      </Link>
    </li>
    
    <Contact />
  </ul>
);

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="main-menu navbar-expand-lg mobile-nav">
      <div className="navbar-header">
        <div className="mobile-logo my-15">
          <Link legacyBehavior href="/">
            <a>
              <img src="assets/images/logos/logo.png" alt="Logo" title="Logo" />
              <img
                src="assets/images/logos/logo-white.png"
                alt="Logo"
                title="Logo"
              />
            </a>
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          onClick={() => setNav(!nav)}
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className={`navbar-collapse collapse clearfix ${nav ? "show" : ""}`}>
        <DaskTopMenu />
        <MobileMenu />
      </div>
    </nav>
  );
};

const DefaultHeader = () => (
  <header className="main-header">
    <div className="header-top-wrap bg-light-green text-white py-10">
      <div className="container-fluid">
        <div className="header-top">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="top-left">
                <ul>
                  <li>
                    <i className="far fa-envelope" /> <b>Email Us :</b>{" "}
                    <a href="mailto:shasvatcropscience@gmail.com">shasvatcropscience@gmail.com</a>
                  </li>
                  <li>
                    <i className="fas fa-phone-alt" /> <b>Call :</b>{" "}
                    <a href="callto:+91 88 66 908 906"> +91 88 66 908 906</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="top-right text-lg-right">
                <ul>
                 
                  <li>
                    <div className="social-style-one">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Header-Upper*/}
    <div className="header-upper">
      <div className="container-fluid clearfix">
        <div className="header-inner d-flex align-items-center">
          <div className="logo-outer">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a>
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            {/* Main Menu */}
            <Nav />
            {/* Main Menu End*/}
          </div>
          {/* Menu Button */}
          <div className="menu-icons">
            {/* Nav Search */}
            <div className="nav-search py-15">
              <SearchBtn />
            </div>
            <button className="cart">
              <i className="far fa-shopping-basket" />
              <span>5</span>
            </button>
            <button className="user">
              <i className="far fa-user-circle" />
            </button>
            <a className="theme-btn"
              href="assets/SatvaCare_NewProduct_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Catalog <i className="fas fa-angle-double-right" />
            </a>
            {/* menu sidbar */}
           
          </div>
        </div>
      </div>
    </div>
    {/*End Header Upper*/}
  </header>
);
const Header1 = () => (
  <header className="main-header menu-absolute">
    <div className="header-top-wrap bg-light-green text-white py-10">
      <div className="container-fluid">
        <div className="header-top">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="top-left">
                <ul>
                  <li>
                    <i className="far fa-envelope" /> <b>Email Us :</b>{" "}
                    <a href="mailto:shasvatcropscience@gmail.com">shasvatcropscience@gmail.com</a>
                  </li>
                  <li>
                    <i className="fas fa-phone-alt" /> <b>Call :</b>{" "}
                    <a href="callto:+012(345)67899"> +91 88 66 908 906</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="top-right text-lg-right">
                <ul>
                
                  <li>
                    <div className="social-style-one">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Header-Upper*/}
    <div className="header-upper">
      <div className="container-fluid clearfix">
        <div className="header-inner d-flex align-items-center">
          <div className="logo-outer">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a>
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            {/* Main Menu */}
            <Nav />
            {/* Main Menu End*/}
          </div>
          {/* Menu Button */}
          <div className="menu-icons">
            {/* Nav Search */}
            <div className="nav-search py-15">
              <SearchBtn />
            </div>
            <button className="cart">
              <i className="far fa-shopping-basket" />
              <span>5</span>
            </button>
            <button className="user">
              <i className="far fa-user-circle" />
            </button>
            <a className="theme-btn"
              href="assets/SatvaCare_NewProduct_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Catalog <i className="fas fa-angle-double-right" />
            </a>
            {/* menu sidbar */}
          
          </div>
        </div>
      </div>
    </div>
    {/*End Header Upper*/}
  </header>
);
// const Header2 = () => (
//   <header className="main-header header-two">
//     <div className="header-top-wrap">
//       <div className="container">
//         <div className="header-top bg-light-green text-white py-10">
//           <div className="row">
//             <div className="col-xl-7 col-lg-6">
//               <div className="top-left">
//                 <ul>
//                   <li>
//                     <i className="far fa-envelope" /> <b>Email Us :</b>{" "}
//                     <a href="mailto:shasvatcropscience@gmail.com">shasvatcropscience@gmail.com</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-xl-5 col-lg-6">
//               <div className="top-right text-lg-right">
//                 <ul>
//                   <li>
//                     <i className="far fa-phone" /> <b>Call :</b>{" "}
//                     <a href="callto:+012(345)67899"> +91 88 66 908 906</a>
//                   </li>
//                   <li>
//                     <div className="social-style-one">
//                       <a href="#">
//                         <i className="fab fa-facebook-f" />
//                       </a>
//                       <a href="#">
//                         <i className="fab fa-twitter" />
//                       </a>
//                       <a href="#">
//                         <i className="fab fa-youtube" />
//                       </a>
//                       <a href="#">
//                         <i className="fab fa-instagram" />
//                       </a>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/*Header-Upper*/}
//     <div className="header-upper">
//       <div className="container rel clearfix">
//         <div className="header-inner d-flex align-items-center">
//           <div className="logo-outer">
//             <div className="logo">
//               <Link legacyBehavior href="/">
//                 <a>
//                   <img
//                     src="assets/images/logos/logo.png"
//                     alt="Logo"
//                     title="Logo"
//                   />
//                   <img
//                     src="assets/images/logos/logo-white.png"
//                     alt="Logo"
//                     title="Logo"
//                   />
//                 </a>
//               </Link>
//             </div>
//           </div>
//           <div className="nav-outer clearfix">
//             {/* Main Menu */}
//             <Nav />
//             {/* Main Menu End*/}
//           </div>
//           {/* Menu Button */}
//           <div className="menu-icons">
//             {/* Nav Search */}
//             <div className="nav-search py-15">
//               <button className="far fa-search" />
//               <form
//                 onSubmit={(e) => e.preventDefault()}
//                 action="#"
//                 className="hide"
//               >
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="searchbox"
//                   required=""
//                 />
//                 <button type="submit" className="searchbutton far fa-search" />
//               </form>
//             </div>
//             <button className="cart">
//               <i className="far fa-shopping-basket" />
//             </button>
//             {/* menu sidbar */}
//             <div className="menu-sidebar" onClick={() => sidebarToggle()}>
//               <button>
//                 <i className="far fa-ellipsis-h" />
//                 <i className="far fa-ellipsis-h" />
//                 <i className="far fa-ellipsis-h" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/*End Header Upper*/}
//   </header>
// );
// const Header3 = () => (
//   <header className="main-header header-three menu-absolute">
//     <div className="header-top-wrap bgc-primary py-10">
//       <div className="container-fluid">
//         <div className="header-top px-0">
//           <ul>
//             <li>25% OFF Upcoming Product</li>
//             <li>100% Fresh &amp; natural foods</li>
//             <li>free shipping over $99</li>
//             <li>money back guarantee</li>
//             <li>cash on delivery</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <div className="header-middle py-15">
//       <div className="container-fluid">
//         <div className="header-middle-inner">
//           <div className="menu-middle-left">
//             <select name="currentcy" id="currentcy">
//               <option value="USD">USD</option>
//               <option value="BDT">BDT</option>
//               <option value="EURO">EURO</option>
//             </select>

//             <select name="language" id="language">
//               <option value="English">English</option>
//               <option value="Bengali">Bengali</option>
//               <option value="Arabic">Arabic</option>
//             </select>

//             <div className="follower">
//               <i className="fab fa-facebook" />
//               <a href="#">250k+ Followers</a>
//             </div>
//           </div>
//           <div className="logo-outer">
//             <div className="logo">
//               <Link legacyBehavior href="/">
//                 <a>
//                   <img
//                     src="assets/images/logos/logo-two.png"
//                     alt="Logo"
//                     title="Logo"
//                   />
//                 </a>
//               </Link>
//             </div>
//           </div>
//           {/* Menu Button */}
//           <div className="menu-icons">
//             {/* Nav Search */}
//             <form
//               onSubmit={(e) => e.preventDefault()}
//               action="#"
//               className="nav-search"
//             >
//               <input
//                 type="text"
//                 placeholder="Search here"
//                 className="searchbox"
//                 required=""
//               />
//               <button type="submit" className="searchbutton far fa-search" />
//             </form>
//             <button className="cart">
//               <i className="far fa-shopping-basket" />
//               <span>5</span>
//             </button>
//             <button className="user">
//               <i className="far fa-user-circle" />
//             </button>
//             <button className="heart">
//               <i className="far fa-heart" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/*Header-Upper*/}
//     <div className="header-upper px-0">
//       <div className="container-fluid clearfix">
//         <div className="header-inner d-flex align-items-center">
//           <div className="nav-outer clearfix">
//             {/* Main Menu */}
//             <Nav />
//             {/* Main Menu End*/}
//           </div>
//           {/* menu sidbar */}
//           <div className="menu-sidebar" onClick={() => sidebarToggle()}>
//             <button>
//               <i className="far fa-ellipsis-h" />
//               <i className="far fa-ellipsis-h" />
//               <i className="far fa-ellipsis-h" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/*End Header Upper*/}
//   </header>
// );

import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/artistacon-logo-dark.svg";
import iInstagram from "../assets/images/i-instagram-primary.svg";
import iTwitter from "../assets/images/i-twitter-primary.svg";

const noFooterRoutes = ["/cadastro", "/login", "/cadastro/artista"];

export function Footer() {

   const { pathname } = useLocation();

   if (noFooterRoutes.some((item) => pathname.includes(item))) return null;

   return (
      <footer className="footer">
         <div className="container footer__container">

            <div className="row justify-content-between">
               <div className="col col-md-4 d-flex flex-column mb-5 mb-md-0">
                  <Link className="mb-4" to="/">
                     <img src={logo} alt="Artista Con" />
                  </Link>
                  <p className="fs-5 mb-0">A gente se vê no Artista Con!</p>
               </div>

               <div className="col col-md-4 d-flex flex-column align-items-md-center">
                  <h4 className="footer__title fw-bold">Segue a gente!</h4>
                  <div className="footer__social d-flex text-end">
                     <Link to="https://twitter.com/artista_con">
                        <img src={iTwitter} alt="Artista Con" />
                        @artista_con
                     </Link>
                     <Link to="https://www.instagram.com/artista_con/">
                        <img src={iInstagram} alt="Artista Con" />
                        @artistacon
                     </Link>
                  </div>
               </div>
            </div>
         </div>

         <hr />

         <div className="container py-4 d-flex flex-column flex-md-row justify-content-between">
            <span className="mb-3 mb-lg-0 col-md-0">Artista Con © 2023. All Rights Reserved.</span>
            <div className="footer__legal__links d-flex">
               <Link to="/">Terms of Use</Link>
               <Link to="/">Privacy Policy</Link>
            </div>
         </div>
      </footer>
   );
}
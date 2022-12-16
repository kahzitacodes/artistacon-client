import style from "./style.module.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/artistacon-logo-dark.svg";
import iInstagram from "../../assets/images/i-instagram-primary.svg";
import iTwitter from "../../assets/images/i-twitter-primary.svg";

const noFooterRoutes = ["/cadastro", "/login", "/cadastro/artista"];

export function Footer() {

   const { pathname } = useLocation();

   if (noFooterRoutes.some((item) => pathname.includes(item))) return null;

   return (
      <footer className={style.footer}>
         <div className={`container ${style.footer__content}`}>

            <div className={style.footer__column1}>
               <Link to="/">
                  <img src={logo} alt="Artista Con" />
               </Link>
               <p>A gente se vê no Artista Con!</p>
            </div>

            <div className={style.footer__column1}>
               <h4 className={style.footer__title}>Segue a gente!</h4>
               <div className={style.footer__social}>
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

         <hr className={style.footer__divider} />

         <div className={`container ${style.footer__footer}`}>
            <span>Artista Con © 2023. All Rights Reserved.</span>
            <div className={style.footer__legal__links}>
               <Link to="/">Terms of Use</Link>
               <Link to="/">Privacy Policy</Link>
            </div>
         </div>
      </footer>
   );
}
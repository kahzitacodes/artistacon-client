import style from "./style.module.css";
import logo from "../../assets/images/artistacon-logo-light.svg";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";

const noNavibarRoutes = ["/cadastro", "/login", "/cadastro/artista"];

export function Header(props) {

   const { pathname } = useLocation();
   const { loggedInUser } = useContext(AuthContext);

   if (noNavibarRoutes.some((item) => pathname.includes(item))) return null;

   return (
      <header className={style.header}>
         <div className={`container ${style.header__container}`}>

            <Link to="/" className={style.header__logo}>
               <img src={logo} alt="Artista Con" />
            </Link>


            <ul className={style.navbar__menu}>
               <li><Link to="/artistas">Artistas</Link></li>
               <li><Link to="/programacao">Programação</Link></li>
               <li><Link to="/sobre">Sobre</Link></li>
            </ul>

            <ul className={style.navbar__links}>
               {loggedInUser ?
                  <li><Link to="/minha-conta/perfil">Olá {loggedInUser.user.name}</Link></li>
                  : (
                     <>
                        <li><Link to="/login">Entre</Link></li>
                        <li><Link to="/cadastro">Crie sua conta</Link></li>
                     </>
                  )
               }

               <li><Link className={style.navbar__icon} to="minha-conta/favoritos">Favoritos</Link></li>
            </ul>


         </div>
      </header>
   );
}
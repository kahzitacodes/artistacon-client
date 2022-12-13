import style from "./style.module.css";
import logo from "../../assets/images/artistacon-logo-light.svg";
import iconHeart from "../../assets/images/i-heart900.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";

export function Header(props) {

   const { loggedInUser } = useContext(AuthContext);

   return (
      <header className={style.header}>
         <div className={`container ${style.header__container}`}>

            <Link to="/" className={style.header__logo}>
               <img src={logo} alt="Artista Con" />
            </Link>


            <ul className={style.navbar__menu}>
               <li><Link to="/artistas">Artist's Alley</Link></li>
               <li><Link to="/programacao">Programação</Link></li>
               <li><Link to="/sobre">Sobre</Link></li>
            </ul>

            <ul className={style.navbar__links}>
               {loggedInUser ?
                  <li><Link to="/perfil">Olá {loggedInUser.user.name}</Link></li>
                  : (
                     <>
                        <li><Link to="/login">Entre</Link></li>
                        <li><Link to="/cadastro">Crie sua conta</Link></li>
                     </>
                  )
               }

               <li><Link className={style.linkIcon} to="/perfil/meus-favoritos">Favoritos<img src={iconHeart} alt="heart" /></Link></li>
            </ul>


         </div>
      </header>
   );
}
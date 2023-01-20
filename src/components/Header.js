import logo from "../assets/images/artistacon-logo-light.svg";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";

const noNavibarRoutes = ["/cadastro", "/login", "/cadastro/artista"];

export function Header() {

   const { pathname } = useLocation();
   const { loggedInUser } = useContext(AuthContext);

   if (noNavibarRoutes.some((item) => pathname.includes(item))) return null;

   return (
      <nav className="navbar navbar-expand-lg header">
         <div className="container header__container justify-content-between">

            <Link to="/" className="navbar-brand header__logo">
               <img src={logo} alt="Artista Con" />
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
               <ul className="navbar__menu navbar-nav d-flex">
                  <li className="nav-item"><Link to="/artistas">Artistas</Link></li>
                  <li className="nav-item"><Link to="/programacao">Programação</Link></li>
                  <li className="nav-item"><Link to="/sobre">Sobre</Link></li>
               </ul>
            </div>

            <div className="collapse navbar-collapse flex-grow-0 flex-shrink-0" id="navbarTogglerDemo01">

               <ul className="navbar__links navbar-nav d-flex align-items-center">
                  {loggedInUser ?

                     <li className="nav-item"><Link to="/minha-conta/perfil">Olá {loggedInUser.user.name}</Link></li>
                     : (
                        <>
                           <li className="nav-item"><Link to="/login">Entre</Link></li>
                           <li className="nav-item"><Link to="/cadastro">Crie sua conta</Link></li>
                        </>
                     )
                  }

                  <li><Link className="navbar__icon" to="minha-conta/favoritos">Favoritos</Link></li>
               </ul>

            </div>
         </div>
      </nav>
   );
}
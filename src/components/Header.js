import logo from "../assets/images/artistacon-logo-light.svg";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { useContext, useState } from "react";
import { Menu } from "react-feather";
import { Heart } from "react-feather";

const noNavibarRoutes = ["/cadastro", "/login", "/cadastro/artista"];

export function Header() {

   const { pathname } = useLocation();
   const { loggedInUser } = useContext(AuthContext);
   const [showMenu, setShowMenu] = useState(false);

   function handleMenu() {
      setShowMenu(!showMenu);
   }

   if (noNavibarRoutes.some((item) => pathname.includes(item))) return null;

   return (
      <nav className="navbar navbar-expand-lg header">
         <div className="container header__container d-flex">

            <div className="flex-fill d-flex justify-content-between">
               <Link to="/" className=" header__logo">
                  <img className="img-fluid" src={logo} alt="Artista Con" />
               </Link>

               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={handleMenu} aria-label="Toggle navigation">
                  <Menu />
               </button>
            </div>

            <div className={`${showMenu ? 'show' : ''} flex-lg-fill collapse navbar-collapse justify-content-between`}>

               <ul className="navbar__menu navbar-nav d-flex mb-4 mb-lg-0">
                  <li className="nav-item"><Link to="/artistas">Artistas</Link></li>
                  <li className="nav-item"><Link to="/programacao">Programação</Link></li>
                  <li className="nav-item"><Link to="/sobre">Sobre</Link></li>
               </ul>

               <ul className="navbar__links navbar-nav d-flex align-items-lg-center">
                  {loggedInUser ?
                     <li className="nav-item"><Link to="/minha-conta/perfil">Olá {loggedInUser.user.name}</Link></li>
                     : (
                        <>
                           <li className="nav-item"><Link to="/login">Entre</Link></li>
                           <li className="nav-item"><Link to="/cadastro">Crie sua conta</Link></li>
                        </>
                     )
                  }
                  <li>
                     <Link className="navbar__favorites" to="minha-conta/favoritos">
                        <Heart />
                        <span className="d-lg-none">Meus Favoritos</span>
                     </Link>
                  </li>
               </ul>
            </div>

         </div>

      </nav>
   );
}
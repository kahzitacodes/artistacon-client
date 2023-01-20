import { NavLink } from "react-router-dom";
import iLogout from "../assets/images/i-logout300.svg";
import iUser from "../assets/images/i-user300.svg";
import iPack from "../assets/images/i-package300.svg";
import iTool from "../assets/images/i-tool300.svg";
import iHeart from "../assets/images/i-heart300.svg";
import iCalendar from "../assets/images/i-calendar300.svg";


export function Sidebar(props) {

   const { logout, name, email, role, id } = props;

   const isArtist = role === "ARTIST";
   const isAdmin = role === "ADMIN";

   const domain = window.origin;

   return (
      <div className="sidebar">
         <div className="sidebar__user d-flex flex-column text-center">
            <h5>{name}</h5>
            <span className="user-name">{email}</span>

            {
               isArtist ?
                  <a className="btn btn-outline-primary mt-3" href={`${domain}/artistas/${id}/produtos`} target="_blank" rel="noopener noreferrer">
                     Ver minha página
                  </a>

                  : null
            }

         </div>
         <hr />
         <nav className="sidebar__nav">
            <ul>
               {isArtist ?
                  <>
                     <li>
                        <NavLink
                           className={`sidebar__link ${({ isActive }) => (isActive ? "active" : "")}`}
                           to="/minha-conta/perfil"
                        >
                           <img src={iUser} alt="Perfil público" />
                           Perfil
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           className={`sidebar__link ${({ isActive }) => (isActive ? "active" : "")}`}
                           to="/minha-conta/produtos"
                        >
                           <img src={iPack} alt="Produtos" />
                           Produtos
                        </NavLink>
                     </li>
                  </>
                  : null}

               {isAdmin ?
                  <>
                     <li>
                        <NavLink
                           className={`sidebar__link ${({ isActive }) => (isActive ? "active" : "")}`}
                           to="/minha-conta/programacao"
                        >
                           <img src={iCalendar} alt="Programação" />
                           Programação
                        </NavLink>
                     </li>
                  </>
                  : null}
               <>
                  <li>
                     <NavLink
                        className={`sidebar__link ${({ isActive }) => (isActive ? "active" : "")}`}
                        to="/minha-conta/favoritos"
                     >
                        <img src={iHeart} alt="Favoritos" />
                        Favoritos
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        className={`sidebar__link ${({ isActive }) => (isActive ? "active" : "")}`}
                        to="/minha-conta/configuracoes"
                     >
                        <img src={iTool} alt="Minha conta" />
                        Minha conta
                     </NavLink>
                  </li>
               </>
            </ul>

         </nav>
         <hr />
         <nav className="sidebar__nav">
            <ul>
               <li>
                  <button className="sidebar__link w-100" onClick={logout}>
                     <img src={iLogout} alt="Sair" />
                     Sair
                  </button>
               </li>

            </ul>
         </nav>
      </div>
   );
}
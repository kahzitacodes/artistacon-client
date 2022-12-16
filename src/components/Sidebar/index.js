import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import iLogout from "../../assets/images/i-logout300.svg";
import iUser from "../../assets/images/i-user300.svg";
import iPack from "../../assets/images/i-package300.svg";
import iImage from "../../assets/images/i-image300.svg";
import iTool from "../../assets/images/i-tool300.svg";
import iHeart from "../../assets/images/i-heart300.svg";
import iCalendar from "../../assets/images/i-calendar300.svg";
import iBook from "../../assets/images/i-book-open300.svg";
import iKey from "../../assets/images/i-key300.svg";


export function Sidebar(props) {

   const { logout, name, email, role } = props;

   return (
      <div className={style.sidebar}>
         <div className={style.sidebar__user}>
            <h5>{name}</h5>
            <span>{email}</span>
         </div>
         <hr />
         <nav className={style.sidebar__nav}>
            <ul>
               {role === "ARTIST" &&
                  <>
                     <li>
                        <NavLink className={style.sidebar__link} to="/minha-conta/perfil">
                           <img src={iUser} alt="Perfil público" />
                           Perfil público
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className={style.sidebar__link} to="/minha-conta/produtos">
                           <img src={iPack} alt="Produtos" />
                           Produtos
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className={style.sidebar__link} to="/minha-conta/galeria">
                           <img src={iImage} alt="Galeria" />
                           Galeria
                        </NavLink>
                     </li>
                  </>
               }

               {role === "ADMIN" &&
                  <>
                     <li>
                        <NavLink className={style.sidebar__link} to="/minha-conta/programacao">
                           <img src={iCalendar} alt="Programação" />
                           Programação
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className={style.sidebar__link} to="/minha-conta/faq">
                           <img src={iBook} alt="FAQ" />
                           FAQ
                        </NavLink>
                     </li>
                  </>
               }
               <>
                  <li>
                     <NavLink className={style.sidebar__link} to="/minha-conta/favoritos">
                        <img src={iHeart} alt="Favoritos" />
                        Favoritos
                     </NavLink>
                  </li>
                  <li>
                     <NavLink className={style.sidebar__link} to="/minha-conta/configuracoes">
                        <img src={iTool} alt="Minha conta" />
                        Minha conta
                     </NavLink>
                  </li>
                  <li>
                     <NavLink className={style.sidebar__link} to="/perfil">
                        <img src={iKey} alt="senha" />
                        Alterar senha
                     </NavLink>
                  </li>
               </>
            </ul>

         </nav>
         <hr />
         <nav className={style.sidebar__nav}>
            <ul>
               <li>
                  <button className={style.sidebar__link} onClick={logout}>
                     <img src={iLogout} alt="Sair" />
                     Sair
                  </button>
               </li>

            </ul>
         </nav>
      </div>
   );
}
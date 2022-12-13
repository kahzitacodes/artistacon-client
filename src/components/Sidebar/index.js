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

import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";


export function Sidebar(props) {

   const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

   const [user, setUser] = useState({ name: "", email: "" });
   const navigate = useNavigate();

   useEffect(() => {
      async function fetchUser() {
         const response = await api.get("/user/account");
         setUser(response.data);
      }

      fetchUser();
   }, []);


   function handleLogOut() {
      localStorage.removeItem("loggedInUser");
      setLoggedInUser(null);
   }

   useEffect(() => {
      if (!loggedInUser) {
         navigate("/login");
      }
   }, [loggedInUser, navigate]);

   //const { logout, name, email, role } = props;

   return (
      <div className={style.sidebar}>
         <div className={style.sidebar__wrap}>
            <h4>{user.name}</h4>
            <span>{user.email}</span>
         </div>
         <hr />
         <nav className={style.sidebar__nav}>
            <ul>
               {user.role === "ARTIST" &&
                  <>
                     <li>
                        <NavLink className={style.sidebar__link} to="/perfil">
                           <img src={iUser} alt="Perfil público" />
                           Perfil público
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className={style.sidebar__link} to="/perfil">
                           <img src={iPack} alt="Produtos" />
                           Produtos
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className={style.sidebar__link} to="/perfil">
                           <img src={iImage} alt="Galeria" />
                           Galeria
                        </NavLink>
                     </li>
                  </>
               }

               {user.role === "ADMIN" &&
                  <>
                     <li>
                        <NavLink className={style.sidebar__link} to="/perfil">
                           <img src={iCalendar} alt="Programação" />
                           Programação
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className={style.sidebar__link} to="/perfil">
                           <img src={iBook} alt="FAQ" />
                           FAQ
                        </NavLink>
                     </li>
                  </>
               }
               <>
                  {user.role !== "ADMIN" &&
                     <li>
                        <NavLink className={style.sidebar__link} to="/perfil">
                           <img src={iHeart} alt="Favoritos" />
                           Favoritos
                        </NavLink>
                     </li>
                  }
                  <li>
                     <NavLink className={style.sidebar__link} to="/perfil">
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
                  <button className={style.sidebar__link} onClick={handleLogOut}>
                     <img src={iLogout} alt="Sair" />
                     Sair
                  </button>
               </li>

            </ul>
         </nav>
      </div>
   );
}
import { useEffect, useState, useContext } from "react";
import { api } from "../../api/api";

import { AuthContext } from "../../contexts/authContext";

export function ProfileBio(props) {

   const { loggedInUser } = useContext(AuthContext);

   const [form, setForm] = useState({});

   function handleChange(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
   }

   console.log(form);

   useEffect(() => {
      async function fetchUserBio() {
         const response = await api.get(`/user/bio`);
         setForm(response.data);
      }

      fetchUserBio();
   }, [loggedInUser]);

   return (
      <>
         <h3>Perfil</h3>
         <form className="form">
            <div className="form-wrap">
               <label>Nome artístico</label>
               <input
                  className="form-control"
                  type="text"
                  name="artistic_name"
                  onChange={handleChange}
               />
            </div>

            <div className="form-wrap">
               <label>Biografia</label>
               <textarea
                  rows="6"
                  className="form-control"
                  type="text"
                  name="text"
               />
            </div>
            <div className="form-wrap">
               <label>Biografia</label>
               <input
                  className="form-control"
                  type="text"
                  name="text"
               />
            </div>
            <div className="form-wrap">
               <label>Biografia</label>
               <input
                  className="form-control"
                  type="text"
                  name="text"
               />
            </div>
         </form>
      </>
   );
}
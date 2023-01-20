import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { api } from "../../api/api";

export function AccountConfig() {

   const [updated, setUpdated] = useState(false);
   const [form, setForm] = useState({
      name: "",
      email: ""
   });

   function handleChange(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
   }

   useEffect(() => {
      async function fetchUser() {
         try {

            const response = await api.get("/user/account");
            setForm(response.data);

         } catch (error) {
            console.log(error);
         }
      }

      fetchUser();
   }, [updated]);

   async function handleUpdate(e) {
      e.preventDefault();

      try {

         await api.patch("/user/account", { ...form });
         setUpdated(true);
         toast.success('Suas informações foram atualizadas com sucesso!');

      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      setUpdated(false);
   }, [form]);

   return (
      <>
         <h3 className="mb-4">Minha conta</h3>
         <form className="form" onSubmit={handleUpdate}>

            <div className="form-group">

               <div className="form-wrap">
                  <label htmlFor="input-name" className="form__label">Nome</label>
                  <input
                     id="input-name"
                     className="form-control"
                     type="text"
                     name="name"
                     value={form.name}
                     onChange={handleChange}
                  />
               </div>

               <div className="form-wrap">
                  <label htmlFor="input-email" className="form__label">Email</label>
                  <input
                     id="input-email"
                     className="form-control"
                     type="email"
                     name="name"
                     value={form.email}
                     onChange={handleChange}
                  />
               </div>

               <div className="d-flex justify-content-end mt-5">
                  <button className="btn btn-lg btn-primary">Salvar alterações</button>
               </div>
            </div>

         </form>
      </>
   );
}
import { useState } from "react";
import { api } from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/images/artistacon-logo-light.svg";
import "../assets/css/forms.css";

export function SignUpArtist() {
   const navigate = useNavigate();
   const [form, setForm] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
   });

   function handleChange(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
   }


   async function handleSubmit(e) {
      e.preventDefault();

      try {
         await api.post("/user/signup", { ...form, role: "ARTIST" });

         navigate("/login");
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <main className="form-signin">
         <Link to="/">
            <img className="form-signin-logo" src={logo} alt="Logo Artista Con" />
         </Link>
         <h2 className="text-center">Entrar</h2>

         <form className="form" onSubmit={handleSubmit}>
            <div className="form-wrap">
               <label htmlFor="formName">Nome</label>
               <input
                  className="form-control"
                  id="formName"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
               />
            </div>

            {/* <div className="form-wrap">
          <label htmlFor="formImg">Sua foto de perfil:</label>
          <input
            className="form-control"
            type="file"
            id="formImg"
            onChange={handleImage} />
        </div> */}

            <div className="form-wrap">
               <label htmlFor="formEmail">E-mail</label>
               <input
                  className="form-control"
                  id="formEmail"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
               />
            </div>
            <div className="form-wrap">
               <label htmlFor="formPassword">Senha</label>
               <input
                  className="form-control"
                  id="formPassword"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
               />
            </div>
            <div className="form-wrap">
               <label htmlFor="formConfirmPassword">Confirmação de senha</label>
               <input
                  className="form-control"
                  id="formConfirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
               />
            </div>
            <button className="btn btn-lg btn-primary" type="submit">Cadastrar</button>
         </form>
         <p className="text-center form-line">Já possui uma conta? <Link to="/login">Login</Link></p>
      </main>
   );
}

import { useState } from "react";
import { api } from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/images/artistacon-logo-light.svg";
import "../assets/css/forms.css";
import { toast } from "react-hot-toast";

export function Signup() {
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
      await api.post("/user/signup", { ...form });

      navigate("/login");
    } catch (error) {
      toast.error("Não deu certo");
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
            required
            className="form-control"
            id="formName"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-wrap">
          <label htmlFor="formEmail">E-mail</label>
          <input
            required
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
            required
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
            required
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

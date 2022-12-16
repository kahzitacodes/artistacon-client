import { useState, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { api } from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/images/artistacon-logo-light.svg";
import "../assets/css/forms.css";

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/minha-conta");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="form-signin">
      <Link to="/">
        <img className="form-signin-logo" src={logo} alt="Logo Artista Con" />
      </Link>
      <h2 className="text-center">Login</h2>
      <form className="form" onSubmit={handleSumit}>
        <div className="form-wrap">
          <label>Email:</label>
          <input
            required
            className="form-control"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-wrap">
          <label>Senha:</label>
          <input
            required
            className="form-control"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-lg btn-primary">Entrar</button>
      </form>
      <p className="text-center form-line">Não possui conta? <Link to="/cadastro">Cadastre-se</Link></p>
    </main>
  );
}

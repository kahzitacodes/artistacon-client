import { useState, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { api } from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/images/artistacon-logo-light.svg";
import { toast } from "react-hot-toast";

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
      navigate("/minha-conta/configuracoes");

    } catch (error) {

      console.log(error);
      toast.error(error.response.data.msg);

    }
  }

  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5 col-xl-4 d-flex flex-column gap-4 vh-100 justify-content-center">

          <Link className="form-signin-logo d-flex justify-content-center" to="/">
            <img src={logo} alt="Logo Artista Con" />
          </Link>

          <h2 className="text-center">Login</h2>

          <form className="d-flex flex-column" onSubmit={handleSumit}>
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
          <p className="text-center">Não possui conta? <Link to="/cadastro">Cadastre-se</Link></p>
        </div>
      </div>
    </main>
  );
}

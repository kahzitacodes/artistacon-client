import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";

import { ProtectedRoute } from "./components/ProtectedRoute";
import { ProtectedArtistRoute } from "./components/ProtectedArtistRoute";

import { Header } from "./components/Header";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/perfil" element={<ProtectedRoute component={Profile} />} />

          <Route path="/artista/perfil" element={<ProtectedArtistRoute component={Profile} />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;

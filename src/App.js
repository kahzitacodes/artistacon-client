import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { Account } from "./pages/Account";
import { SignUpArtist } from "./pages/SignUpArtist";
import { ErrorPage } from "./pages/ErrorPage";
import { AccountProfile } from "./pages/AccountProfile";
import { AccountProducts } from "./pages/AccountProducts";
import { AccountNewProduct } from "./pages/AccountNewProduct";
import { AccountEditProduct } from "./pages/AccountEditProduct";
import { AccountProduct } from "./pages/AccountProduct";
import { ArtistAlley } from "./pages/ArtistAlley";
import { ArtistPage } from "./pages/ArtistPage";
import { ArtistProducts } from "./pages/ArtistProducts";

import { ProtectedRoute } from "./components/ProtectedRoute";

import { Header } from "./components/Header";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artistas" element={<ArtistAlley />} />
          <Route path="/artistas/:artistId" element={<ArtistPage />} >

            <Route path="/artistas/:artistId/produtos" element={<ArtistProducts />} />

          </Route>


          <Route path="/cadastro" element={<Signup />} />
          <Route path="/cadastro/artista" element={<SignUpArtist />} />
          <Route path="/login" element={<Login />} />

          <Route path="minha-conta" element={<ProtectedRoute component={Account} />} >

            <Route path="perfil" element={<AccountProfile />} />
            <Route path="produtos" element={<AccountProducts />} />
            <Route path="produtos/novo-produto" element={<AccountNewProduct />} />
            <Route path="produtos/:productId" element={<AccountProduct />} />
            <Route path="produtos/editar/:productId" element={<AccountEditProduct />} />

          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;

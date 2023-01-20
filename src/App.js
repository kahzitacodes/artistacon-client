import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { SignUpArtist } from "./pages/SignUpArtist";
import { Home } from "./pages/site/Home";
import { About } from "./pages/site/About";
import { Schedule } from "./pages/site/Schedule";
import { ErrorPage } from "./pages/ErrorPage";

import { ArtistAlley } from "./pages/site/ArtistAlley";
import { ArtistPage } from "./pages/site/ArtistPage";
import { ArtistProducts } from "./pages/site/ArtistProducts";
import { ArtistAbout } from "./pages/site/ArtistAbout";

import { Account } from "./pages/account/Account";
import { AccountProfile } from "./pages/account/AccountProfile";
import { AccountProducts } from "./pages/account/AccountProducts";
import { AccountNewProduct } from "./pages/account/AccountNewProduct";
import { AccountEditProduct } from "./pages/account/AccountEditProduct";
import { AccountProduct } from "./pages/account/AccountProduct";
import { AccountSchedule } from "./pages/account/AccountSchedule";
import { ScheduleNew } from "./pages/account/AccountScheduleNew";
import { ScheduleEdit } from "./pages/account/AccountScheduleEdit";
import { AccountFavorites } from "./pages/account/AccountFavorites";
import { AccountConfig } from "./pages/account/AccountConfig";

import { AuthContextComponent } from "./contexts/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ProtectedAdminRoute } from "./components/ProtectedAdminRoute";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Toaster />
        <Header />
        <div className="middle">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artistas" element={<ArtistAlley />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/programacao" element={<Schedule />} />


            <Route path="/artistas/:artistId" element={<ArtistPage />} >

              <Route path="/artistas/:artistId/produtos" element={<ArtistProducts />} />
              <Route path="/artistas/:artistId/sobre" element={<ArtistAbout />} />

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

              <Route path="favoritos" element={<AccountFavorites />} />

              <Route path="configuracoes" element={<AccountConfig />} />

              <Route path="programacao" element={<ProtectedAdminRoute component={AccountSchedule} />} />
              <Route path="programacao/nova-atividade" element={<ProtectedAdminRoute component={ScheduleNew} />} />
              <Route path="programacao/editar/:activityId" element={<ProtectedAdminRoute component={ScheduleEdit} />} />

            </Route>

            <Route path="*" element={<ErrorPage />} />
          </Routes>

        </div>
        <Footer />
      </AuthContextComponent>
    </>
  );
}

export default App;

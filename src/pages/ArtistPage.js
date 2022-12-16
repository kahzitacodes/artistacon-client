import { useEffect, useState } from "react";
import { Outlet, useParams, NavLink } from "react-router-dom";
import { api } from "../api/api";
import iconStore from "../assets/images/i-store-fff.svg";
import iconShare from "../assets/images/i-share900.svg";

export function ArtistPage(props) {

   const [artist, setArtist] = useState({});
   const [loading, setLoading] = useState(true);
   const params = useParams();

   const artistId = params.artistId;

   useEffect(() => {
      async function fetchArtist() {
         try {

            const response = await api.get(`/artists/${params.artistId}`);
            setArtist(response.data);
            setLoading(false);

         } catch (error) {
            console.log(error);
         }
      }

      fetchArtist();

   }, []);

   return (
      <main className="main-divider">

         {loading ? (<p>Loading...</p>) :

            (
               <div className="container">
                  <div className="headline__user">
                     <div className="headline__infos">
                        <img className="infos__image" src={artist.bio.avatar} alt={artist.name} />
                        <h1 className="infos__title heading__h4">{artist.name}</h1>
                     </div>
                     <div className="headline__actions">
                        <button className="btn btn-md btn-outline-secondary  btn-icon" to="/">
                           <img src={iconShare} alt="Share" />
                           Compartilhar
                        </button>

                        <button className="btn btn-md btn-primary btn-icon" onClick={() => window.open(artist.bio.store_URL, '_blank')}>
                           <img src={iconStore} alt="store" />
                           Visitar loja
                        </button>
                     </div>
                  </div>


                  <div className="tabs">
                     <NavLink
                        className={`tabs__button ${({ isActive }) => (isActive ? "active" : "")}`}
                        to={`/artistas/${artistId}/produtos`}
                     >
                        Produtos
                     </NavLink>
                     <NavLink
                        className={`tabs__button ${({ isActive }) => (isActive ? "active" : "")}`}
                        to={`/artistas/${artistId}/sobre`}
                     >
                        Sobre
                     </NavLink>
                  </div>

                  <div className="tabs__content">

                     <Outlet context={[artist]} />

                  </div>
               </div>
            )

         }
      </main>
   );
}
import { useEffect, useState } from "react";
import { Outlet, useParams, NavLink } from "react-router-dom";
import { api } from "../../api/api";
import iconStore from "../../assets/images/i-store-fff.svg";
import iconShare from "../../assets/images/i-share900.svg";
import { FeatureDiscord } from "../../components/FeatureDiscord";
import copy from "copy-to-clipboard";
import { toast } from "react-hot-toast";

export function ArtistPage() {

   const [artist, setArtist] = useState({});
   const [loading, setLoading] = useState(true);

   const params = useParams();

   const artistId = params.artistId;

   const url = window.location.href;
   const copyToClipboard = () => {
      copy(url);
      toast.success("Endereço copiado pra você compartilhar");
   };

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

   }, [params.artistId]);

   return (
      <main className="main-divider-top">
         <div className="container mb-5">
            <div className="row">

               {loading ? (<p>Loading...</p>) :

                  (
                     <div className="col offset-xxl-1 col-xxl-10">
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-4">
                           <div className="d-flex align-items-center gap-3 mb-4 mb-md-0">
                              {artist.bio.avatar ?
                                 <img className="rounded-circle artist__avatar" src={artist.bio.avatar} alt={artist.name} />
                                 : null
                              }
                              <h2 className="artist__name">{artist.bio.artistic_name}</h2>
                           </div>

                           <div className="d-flex gap-4 align-items-center">
                              <button className="btn btn-light" onClick={copyToClipboard}>
                                 <img src={iconShare} alt="Share" />
                                 Compartilhar
                              </button>

                              <button className="btn btn-primary" onClick={() => window.open(artist.bio.store_URL, '_blank')}>
                                 <img src={iconStore} alt="store" />
                                 Visitar loja
                              </button>
                           </div>
                        </div>


                        <div className="tabs d-flex justify-content-center">
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

                        <Outlet context={[artist]} />

                     </div>
                  )

               }
            </div>
         </div>

         <FeatureDiscord />
      </main>
   );
}
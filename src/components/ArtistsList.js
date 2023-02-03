import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/api";
import { ArtistCard } from "./ArtistCard";
import BounceLoader from "react-spinners/BounceLoader";

export function ArtistsList() {

   const [artists, setArtists] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      async function fetchArtists() {
         try {

            const response = await api.get("/artists/");
            setArtists(response.data);
            setLoading(false);

         } catch (error) {
            console.log(error);
         }
      }
      fetchArtists();
   }, []);

   return (
      <div className="artists-list">
         <div className="container">
            <div className="feature__headline">
               <p className="pre-title fw-bold mb-3">Beco dos artistas</p>
               <h2 className="mb-5">Conheça artistas incríveis</h2>
            </div>

            {loading ? (
               <div className="d-flex gap-3 py-5 flex-column align-items-center">
                  <BounceLoader color="#887EF9" />
                  <p>Carregando artistas...</p>
               </div>
            ) : (
               <>
                  <div className="grid mb-5">

                     {artists && artists.map((currentArtist) => {
                        return (
                           <div
                              key={currentArtist._id}
                              className="g-col-6 g-col-md-4 g-col-lg-3"
                           >

                              <ArtistCard
                                 linkTo={`/artistas/${currentArtist._id}/produtos`}
                                 avatar={currentArtist.bio.avatar}
                                 name={currentArtist.bio.artistic_name}
                              />

                           </div>
                        );
                     })}

                  </div>

                  <div className="d-flex justify-content-center">
                     <Link className="btn btn-lg btn-outline-secondary" to="/programacao">Veja a lista completa</Link>
                  </div>

               </>
            )}
         </div>
      </div>
   );
}
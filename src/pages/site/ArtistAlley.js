import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { ArtistCard } from "../../components/ArtistCard";

export function ArtistAlley() {

   const [artists, setArtists] = useState([]);
   const [featching, setFeaching] = useState(true);

   useEffect(() => {
      async function fetchArtists() {
         try {

            const response = await api.get("/artists/");
            setArtists(response.data);
            setFeaching(false);

         } catch (error) {
            console.log(error);
         }
      }
      fetchArtists();
   }, []);

   return (
      <main className="main-divider">
         <div className="container">
            <div className="headline">
               <p className="pre-title">Artist's Alley</p>
               <h2>
                  Conheça artistas incríveis
               </h2>
            </div>

            <div className="grid ">

               {featching && <p>carregando...</p>}

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
         </div>
      </main>
   );
}
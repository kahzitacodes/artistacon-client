import { useState, useEffect } from "react";
import { api } from "../api/api";
import { ArtistCard } from "../components/ArtistCard";

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
            <div className="main__headline">
               <p className="pre-title">Artist's Alley</p>
               <h2>
                  Conheça artistas incríveis
               </h2>
            </div>

            <div className="grid__cards">

               {featching && <p>carregando...</p>}

               {artists && artists.map((currentArtist) => {
                  return (
                     <ArtistCard
                        key={currentArtist._id}
                        linkTo={`/artistas/${currentArtist._id}/produtos`}
                        avatar={currentArtist.bio.avatar}
                        name={currentArtist.name}
                     />
                  );
               })}
            </div>
         </div>
      </main>
   );
}
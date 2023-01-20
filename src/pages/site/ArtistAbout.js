import { useOutletContext } from "react-router-dom";
import iconStore from "../../assets/images/i-store-fff.svg";

export function ArtistAbout(props) {

   const [artist] = useOutletContext();

   return (
      <div className="row">
         <div className="col-12 col-lg-7 mb-3 mb-lg-0">
            <div className="mb-4">
               <h4 className="mb-3">Sobre o artista</h4>
               <p>{artist.bio.bio}</p>
            </div>

            {artist.bio.categories.length === 0 ? (
               <div className="mb-3">
                  <h4 className="mb-3">Categorias</h4>
                  {/* to-do */}
               </div>
            ) : null}

         </div>

         <div className="col-12 offset-lg-1 col-lg-4">
            <div className="mb-4">
               <h4 className="mb-3">Onde encontrar</h4>

               {artist.bio.twitter_URL ?
                  <a className="artist__link" target="_blank" rel="noopener noreferrer" href={artist.bio.twitter_URL}>
                     Twitter
                  </a> : null}

               {artist.bio.instagram_URL ?
                  <a className="artist__link" target="_blank" rel="noopener noreferrer" href={artist.bio.instagram_URL}>
                     Instagram
                  </a> : null}

               {artist.bio.facebook_URL ?
                  <a className="artist__link" target="_blank" rel="noopener noreferrer" href={artist.bio.facebook_URL}>
                     Facebook
                  </a> : null}

               {artist.bio.twitch_URL ?
                  <a className="artist__link" target="_blank" rel="noopener noreferrer" href={artist.bio.twitch_URL}>
                     Twitch
                  </a> : null}

               {artist.bio.tiktok_URL ?
                  <a className="artist__link" target="_blank" rel="noopener noreferrer" href={artist.bio.tiktok_URL}>
                     Ticktok
                  </a> : null}

               {artist.bio.youtube_URL ?
                  <a className="artist__link" target="_blank" rel="noopener noreferrer" href={artist.bio.youtube_URL}>
                     Youtube
                  </a> : null}

            </div>

            <button onClick={() => window.open(artist.bio.store_URL, '_blank')} target="_blank" className="btn btn-lg btn-primary">
               <img src={iconStore} alt="store" />Visitar loja
            </button>
         </div>
      </div>
   );
}
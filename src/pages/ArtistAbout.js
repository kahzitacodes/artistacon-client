import { useOutletContext } from "react-router-dom";
import iconStore from "../assets/images/i-store-fff.svg";

export function ArtistAbout(props) {

   const [artist] = useOutletContext();

   return (
      <div className="about__container">
         <div className="about__colunm1">
            <div className="about__group">
               <h4>Sobre o artista</h4>
               <p>{artist.bio.bio}</p>
            </div>

            {artist.bio.categories.length === 0 ? (
               <div className="about__group">
                  <h4>Categorias</h4>
                  <div className="about__categories">

                  </div>
               </div>
            ) : null}

         </div>

         <div className="about__colunm2">
            <div className="about__group">
               <h4>Onde me achar</h4>

               {artist.bio.twitter_URL ?
                  <a className="about__link" target="_blank" rel="noopener noreferrer" href={artist.bio.twitter_URL}>
                     Twitter
                  </a> : null}

               {artist.bio.instagram_URL ?
                  <a className="about__link" target="_blank" rel="noopener noreferrer" href={artist.bio.instagram_URL}>
                     Instagram
                  </a> : null}

               {artist.bio.facebook_URL ?
                  <a className="about__link" target="_blank" rel="noopener noreferrer" href={artist.bio.facebook_URL}>
                     Facebook
                  </a> : null}

               {artist.bio.twitch_URL ?
                  <a className="about__link" target="_blank" rel="noopener noreferrer" href={artist.bio.twitch_URL}>
                     Twitch
                  </a> : null}

               {artist.bio.tiktok_URL ?
                  <a className="about__link" target="_blank" rel="noopener noreferrer" href={artist.bio.tiktok_URL}>
                     Ticktok
                  </a> : null}

               {artist.bio.youtube_URL ?
                  <a className="about__link" target="_blank" rel="noopener noreferrer" href={artist.bio.youtube_URL}>
                     Youtube
                  </a> : null}

            </div>

            <div className="about__group">
               <button onClick={() => window.open(artist.bio.store_URL, '_blank')} target="_blank" className="btn btn-lg btn-primary btn-icon">
                  <img src={iconStore} alt="store" />Visitar loja
               </button>
            </div>
         </div>
      </div>
   );
}
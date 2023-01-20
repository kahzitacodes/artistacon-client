import discordIlustration from "../assets/images/serverIlustration.png";

export function FeatureDiscord() {

   return (
      <div className="feature feature-discord">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6 d-flex flex-column gap-4 align-items-start feature__content">
                  <div className="feature__headline">
                     <p className="pre-title fw-bold mb-3">Discord</p>
                     <h2>Vem interagir!</h2>
                  </div>

                  <p className="feature__text">No nosso servidor do Discord você pode interagir com este artista e outros. Vem ver nossa programação de bate-papos e lives sobre todo tipo de arte. Vista seu cosplay e poste fotos, surte sobre seu fandom favorito e compartilhe suas artes com outros visitantes! É só acessar o link!</p>

                  <button className="btn btn-lg btn-primary">Entrar no discord</button>

               </div>
               <div className="col-lg-6 feature__image">
                  <img src={discordIlustration} alt="Servidor do discord" />
               </div>
            </div>
         </div>
      </div>
   );
}
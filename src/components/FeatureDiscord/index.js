import style from "./style.module.css";
import discordIlustration from "../../assets/images/serverIlustration.png";

export function FeatureDiscord(props) {

   return (
      <div className={style.feature__discord}>
         <div className={`container ${style.container}`}>

            <div className={style.text__container}>
               <div className={style.text__head}>
                  <p className="pre-title">Discord</p>
                  <h2>Vem interagir!</h2>
               </div>

               <p className={style.text}>No nosso servidor do Discord você pode interagir com este artista e outros. Vem ver nossa programação de bate-papos e lives sobre todo tipo de arte. Vista seu cosplay e poste fotos, surte sobre seu fandom favorito e compartilhe suas artes com outros visitantes! É só acessar o link!</p>

               <button className="btn btn-lg btn-primary">Entrar no discord</button>

            </div>
            <div className={style.image__container}>
               <img src={discordIlustration} alt="Servidor do discord" />
            </div>
         </div>
      </div>
   );
}
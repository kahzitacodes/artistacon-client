import style from "./style.module.css";
import { Link } from "react-router-dom";
import heroImge from "../../assets/images/hero-image.svg";

export function Hero() {
   return (
      <div className={style.hero}>
         <div className={`container ${style.hero__container}`}>

            <div className={style.hero__content}>
               <div className={style.hero__text}>
                  <p className="pre-title">3, 4 e 5 de Setembro de 2023</p>
                  <h1 className="headline__h1">
                     Seu beco dos artistas online
                  </h1>

                  <p className={style.hero__sub}>Sentindo falta de feirinhas pra jogar dinheiro nos artistas incríveis do Beco dos Artistas? A gente também!</p>
               </div>

               <Link to="/" className="btn btn-lg btn-primary">Saiba mais</Link>
            </div>

            <div className={style.hero__image}>
               <img src={heroImge} alt="" />
            </div>
         </div>
      </div>
   );
}
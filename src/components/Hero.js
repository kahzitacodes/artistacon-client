import { Link } from "react-router-dom";
import heroImge from "../assets/images/hero-image.svg";

export function Hero() {
   return (
      <div className="hero">
         <div className="container">
            <div className="row align-items-center">

               <div className="col-lg-6 d-flex flex-column gap-2 gap-lg-4 w-lg-50 align-items-start mb-4 mb-lg-0">
                  <div className="hero__text">
                     <p className="pre-title fw-bold mb-3">3, 4 e 5 de Setembro de 2023</p>
                     <h1 className="display-1 fw-bold mb-3">
                        Seu beco dos artistas online
                     </h1>

                     <p className="hero__subtitle fs-5">Sentindo falta de feirinhas pra jogar dinheiro nos artistas incríveis do Beco dos Artistas? A gente também!</p>
                  </div>

                  <Link to="/" className="btn btn-lg btn-primary">Saiba mais</Link>
               </div>

               <div className="col-lg-6 hero__image">
                  <img src={heroImge} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
}
import { Link } from "react-router-dom";

export function Banner(props) {

   const { preTitle, title, cta, image, imageAlt } = props;

   return (
      <div className="container">
         <div className="banner">
            <div className=" d-flex flex-column-reverse flex-md-row align-items-start align-items-md-center gap-5">
               <div className="d-flex flex-column align-items-start">

                  <div className="d-flex flex-column flex-lg-row align-items-md-end mb-3">
                     <div className="banner__headline ">
                        <p className="banner__pre-title fw-bolder">
                           {preTitle}
                        </p>
                        <h2 className="banner__title fw-bold">{title}</h2>
                     </div>

                     <div className="banner__text">
                        {props.children}
                     </div>
                  </div>

                  <Link className="btn btn-lg btn-light" to="/artistas">
                     {cta}
                  </Link>

               </div>

               <div className="banner__image">
                  <img className="img-fluid w-100" src={image} alt={imageAlt} />
               </div>
            </div>
         </div>
      </div>
   );
}
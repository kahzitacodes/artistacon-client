import style from "./style.module.css";
import { Link } from "react-router-dom";

export function Banner(props) {

   const { preTitle, title, cta, image, imageAlt } = props;

   return (
      <div className="container">
         <div className={style.banner}>
            <div className={style.container}>
               <div className={style.content}>

                  <div className={style.content__middle}>
                     <div className={style.col__titles}>
                        <p className={style.pre_title}>
                           {preTitle}
                        </p>
                        <h2>{title}</h2>
                     </div>

                     <div className={style.col__text}>
                        {props.children}
                     </div>
                  </div>

                  <Link
                     className="btn btn-lg btn-mono"
                     to="/artistas"
                  >
                     {cta}
                  </Link>

               </div>

               <div className={style.image}>
                  <img src={image} alt={imageAlt} />
               </div>
            </div>
         </div>
      </div>
   );
}
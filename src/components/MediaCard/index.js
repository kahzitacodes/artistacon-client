import style from "./style.module.css";
import { Link } from "react-router-dom";

export function MediaCard(props) {

   const { type, img, name, title, infos, price, time, deleteFunction, id } = props;

   return (
      <div className={style.card__wrapper}>
         <div className={style.card__image}>
            <img src={img} alt={name} />
         </div>
         <div className={style.card__content}>

            <div className={style.card__infos}>
               <div className={style.card__col}>
                  <h5 className={style.card__title}>{title}</h5>
                  {type === "schedule" && <p className={style.card__infos}>{infos}</p>}
               </div>

               <div className={style.card__col}>
                  {type === "schedule" && <span className={style.card__time}>{time}</span>}
                  {type === "product" && <span className={style.card__price}>R${price}</span>}
               </div>
            </div>


            <div className={style.card__actions}>
               {type === "product" &&
                  <Link
                     className="link__default link-details"
                     to={`/minha-conta/produtos/${id}`}>
                     Ver
                  </Link>
               }
               <Link
                  className="link__default link-edit"
                  to={`/minha-conta/produtos/editar/${id}`}>
                  Editar
               </Link>
               <button className="link__danger link-delete" onClick={deleteFunction}>Deletar</button>
            </div>
         </div>

      </div>
   );
}
import style from "./style.module.css";
import { Link } from "react-router-dom";

export function MediaCard(props) {

   const { type, img, name, title, infos, price, date, time, deleteFunction, id } = props;

   const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Set', 'Out', 'Nov', 'Dez'];

   const dateNew = new Date(date);
   const day = dateNew.getDate();
   const monthNumber = dateNew.getMonth();
   const monthName = months.filter((month, i) => i === monthNumber);

   return (
      <div className={style.card__wrapper}>
         <div className={style.card__image}>
            <img src={img} alt={name} />
         </div>
         <div className={style.card__content}>

            <div className={style.card__infos}>
               <div className={style.card__col1}>
                  <h6 className={style.card__title}>{title}</h6>
                  {type === "schedule" ? <p className={style.card__infos}>{infos}</p> : null}
               </div>

               <div className={style.card__col2}>

                  {type === "schedule" && (
                     <>
                        <span className={style.card__date}>{day} {monthName}</span>
                        <span className={style.card__time}>{time}</span>
                     </>
                  )}
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

                  to={`/minha-conta/${(type === 'product' ? 'produtos' : 'programacao')}/editar/${id}`}
               >
                  Editar
               </Link>
               <button className="link__danger link-delete" onClick={deleteFunction}>Deletar</button>
            </div>
         </div>

      </div>
   );
}
import style from "./style.module.css";

export function ProductCard(props) {

   const { favFunction, showFunction, image, name, price } = props;

   return (
      <div
         onClick={showFunction}
         className={style.card__wrapper}
      >

         <div className={style.card__image}>

            <button onClick={favFunction} className={`btn-fav btn ${style.card__fav}`}>Favorite</button>
            <img src={image} alt={name} />

         </div>

         <div className={style.card__info}>
            <h5 className={style.card__name}>{name}</h5>
            <span className={style.card__price}>R$ {price}</span>
         </div>
      </div>
   );

}
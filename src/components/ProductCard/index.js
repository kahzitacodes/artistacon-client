import style from "./style.module.css";

export function ProductCard(props) {

   const { saved, showDetails, handleSave, handleRemove, product, image, name, price } = props;

   return (
      <div className={style.card__wrapper}>
         <div className={style.card__image}>

            <button
               className={`btn-fav btn ${style.card__fav} ${saved === true ? 'active' : ''}`}

               onClick={() => saved === true ? handleRemove(product) : handleSave(product)}
            >
               Salvar
            </button>

            <img
               src={image}
               alt={name}
               onClick={() => showDetails(product)}
            />

         </div>

         <div className={style.card__info}>
            <h5 className={style.card__name}>{name}</h5>
            <span className={style.card__price}>R$ {price}</span>
         </div>
      </div>
   );

}
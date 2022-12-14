import style from "./style.module.css";
import iconHeart from "../../assets/images/i-heart900.svg";

export function Modal(props) {

   const { showFunction, show, storeURL, saveFunction, image, price, title, text } = props;

   return (
      <div className={`${style.modal} ${show ? style.show : ''}`}>

         <div className={style.modal__header}>
            <button
               onClick={showFunction}
               className="btn btn-back-round">Fechar
            </button>
            <button
               onClick={saveFunction}
               className="btn btn-md btn-outline-secondary btn-icon"
            >
               <img src={iconHeart} alt="salvar" />
               Salvar
            </button>
         </div>

         <div className={style.modal__body}>
            <div className="container">
               <img src={image} alt={title} />
               <div className={style.modal__content}>

                  <h3 className={style.modal__title}>{title}</h3>
                  <p><strong className={style.modal__high}>R$ {price}</strong></p>
                  <p className={style.modal__text}>{text}</p>
               </div>

               <button onClick={storeURL} className="btn btn-lg btn-primary">
                  Comprar na loja do artista
               </button>
            </div>
         </div>

      </div>
   );

}
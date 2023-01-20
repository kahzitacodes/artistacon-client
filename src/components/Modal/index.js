import style from "./style.module.css";
import iconHeart from "../../assets/images/i-heart900.svg";

export function Modal(props) {

   const { hideModal, show, saveFunction } = props;

   return (
      <div className={`${style.modal} ${show ? style.show : ''}`}>

         <div className={style.modal__header}>
            <button
               onClick={() => hideModal()}
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
               {props.children}
            </div>
         </div>

      </div>
   );

}
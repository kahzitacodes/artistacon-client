import style from "./style.module.css";
import { Heart, X } from "react-feather";

export function Modal(props) {

   return (
      <div className={`${style.modal} ${props.show ? style.show : null}`}>

         <div className={style.modal__header}>
            <button onClick={props.handleClose} className="link link-secondary">
               <X />Fechar
            </button>
            <button
               className="btn btn-md btn-outline-primary"
            >
               <Heart />
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
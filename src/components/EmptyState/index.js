import style from "./style.module.css";
import emptyList from "../../assets/images/empty-list-1.png";
import { Link } from "react-router-dom";

export function EmptyState(props) {

   const { element, linkTo } = props;

   return (
      <div className={style.container}>

         <img className={style.empty__img} src={emptyList} alt="Empty list" />

         {element === "Favorito" ?
            <p>Você ainda não tem {element}s.</p>

            :

            <p>Você ainda não tem {element}s. Adicione através do botão abaixo </p>

         }


         {linkTo ?
            <Link
               to={linkTo}
               className="btn btn-lg btn-primary"
            >
               Adicionar {element}
            </Link>
            : null}
      </div>
   );
}
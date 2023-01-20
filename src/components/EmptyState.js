import emptyList from "../assets/images/empty-list-1.png";
import { Link } from "react-router-dom";

export function EmptyState(props) {

   const { element, linkTo } = props;

   return (
      <div className="container">
         <div className="d-flex flex-column align-items-center gap-4">
            <img className="w-50" src={emptyList} alt="Empty list" />

            <div className="d-flex flex-column gap-2">
               {element === "Favorito" ?
                  <p>Você ainda não tem {element}s.</p>

                  :

                  <p className="text-center">
                     Você ainda não tem {element}s. <br />
                     Adicione através do botão abaixo :)
                  </p>

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
         </div>
      </div>
   );
}
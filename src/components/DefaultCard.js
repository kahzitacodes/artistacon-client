import { Link } from "react-router-dom";

export function MediaCard(props) {

   const { type, img, name, title, infos, price, date, time, deleteFunction, id } = props;

   const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Set', 'Out', 'Nov', 'Dez'];

   const dateNew = new Date(date);
   const day = dateNew.getDate();
   const monthNumber = dateNew.getMonth();
   const monthName = months.filter((month, i) => i === monthNumber);

   return (
      <div className="card d-card">
         <div className="row g-0">
            <div className="col-md-2 d-card__image">
               <img src={img} alt={name} />
            </div>

            <div className="col-md-8 d-flex flex-column d-card__content">
               <div className="card-body d-flex flex-column gap-3 justify-content-center">
                  <div className="d-flex gap-5">
                     <div className="flex-grow-1 flex-shrink-1">
                        <h5 className="d-card__title">{title}</h5>
                        {type === "schedule" ? <p className="mt-2 card__infos">{infos}</p> : null}
                     </div>

                     <div className="flex-grow-0 flex-shrink-0">

                        {type === "schedule" && (
                           <>
                              <span className="card__date mb-2">{day} {monthName}</span>
                              <span className="card__time">{time}</span>
                           </>
                        )}
                        {type === "product" && <span className="card__price">R${price}</span>}

                     </div>
                  </div>

                  <div className="d-flex gap-3">
                     {type === "product" &&
                        <Link
                           className="link link-secondary"
                           to={`/minha-conta/produtos/${id}`}>
                           Ver
                        </Link>
                     }
                     <Link
                        className="link link-secondary"

                        to={`/minha-conta/${(type === 'product'
                           ? 'produtos'
                           : 'programacao')}/editar/${id}`}
                     >
                        Editar
                     </Link>
                     <button className="link link-danger" onClick={deleteFunction}>Deletar</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
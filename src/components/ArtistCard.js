import { Link } from "react-router-dom";

export function ArtistCard(props) {

   const { name, avatar, linkTo } = props;

   return (
      <Link to={linkTo} className="card__wrapper card">

         <img src={avatar} alt={name} className="card-img" />

         <div className="card-img-overlay d-flex align-items-end">

            <div className="card__info flex-grow-1 text-center">
               <span className="card__name fw-bold">{name}</span>
            </div>

         </div>

      </Link>
   );
}
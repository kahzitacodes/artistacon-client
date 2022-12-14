import style from "./style.module.css";
import { Link } from "react-router-dom";

export function ArtistCard(props) {

   const { name, avatar, linkTo } = props;

   return (
      <Link
         to={linkTo}
         className={style.card__wrapper}
         style={{ backgroundImage: `url(${avatar})` }}
      >
         <div className={style.card__info}>
            <span className={style.card__name}>{name}</span>
         </div>
      </Link>
   );
}
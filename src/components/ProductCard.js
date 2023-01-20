import { Link } from "react-router-dom";

export function ProductCard(props) {

   const {
      saved,
      showDetails,
      handleSave,
      handleRemove,
      product,
      image,
      name,
      price,
      artist,
      artistAvatar,
      artistId
   } = props;

   return (
      <div className="card product-card position-relative">

         <button
            className={`btn-save position-absolute ${saved === true ? 'active' : ''}`}

            onClick={() => saved === true ? handleRemove(product) : handleSave(product)}
         >
            Salvar
         </button>

         <div
            onClick={() => showDetails(product)}
            className="card-img-top rounded-4 mb-4 product-card__img"
         >
            <img src={image} alt={name} />
         </div>

         <div className="card-body p-0 d-flex align-items-start gap-2">
            {artistAvatar ?

               <Link to={`/artistas/${artistId}/produtos`}><img className="rounded-circle artist-img" src={artistAvatar} alt={artist} />
               </Link>
               : null

            }
            <div className="d-flex flex-column gap-2">
               {artist ?
                  <Link to={`/artistas/${artistId}/produtos`} className="artist-name">{artist}</Link> : null
               }
               <h5 onClick={() => showDetails(product)} className="name">{name}</h5>
               <span className="price">R$ {price}</span>
            </div>

         </div>
      </div>
   );

}
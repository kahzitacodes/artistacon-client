import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { api } from "../../api/api";
import { EmptyState } from "../../components/EmptyState";
import { ProductCard } from "../../components/ProductCard";

export function AccountFavorites() {

   const [favorites, setFavorites] = useState([]);
   const [loading, setLoading] = useState(false);
   const [removed, setRemoved] = useState(false);

   useEffect(() => {
      async function fetchFavorites() {
         try {

            const response = await api.get("/user/favorites");
            setFavorites(response.data[0].favorites);
            setLoading(false);

         } catch (error) {
            console.log(error);
         }
      }

      fetchFavorites();
   }, [removed]);

   async function handleRemove(productId) {
      try {

         await api.delete(`/user/favorites/${productId}`);
         toast.success('Produto removido dos seus favoritos');
         setRemoved(true);

      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      setRemoved(false);
   }, [favorites]);

   const saved = true;


   return (
      <>
         {loading && (<p className="text-center set__loading">Loading...</p>)}

         {favorites.length === 0 ?

            <>
               <h3 className="mb-4 text-center">Favoritos</h3>
               <EmptyState element="Favorito" />
            </> :

            <>


               <h3 className="mb-4">Favoritos</h3>

               <div className="grid">

                  {favorites.map(currentProduct => {
                     return (
                        <div key={currentProduct._id} className="g-col-4">
                           <ProductCard
                              saved={saved}
                              handleRemove={() => (handleRemove(currentProduct._id))}
                              product={currentProduct}
                              image={currentProduct.image}
                              name={currentProduct.name}
                              price={currentProduct.price}
                              artistId={currentProduct.owner._id}
                              artist={currentProduct.owner.bio.artistic_name}
                              artistAvatar={currentProduct.owner.bio.avatar}
                           />
                        </div>
                     );
                  })}

               </div>
            </>
         }
      </>
   );
}
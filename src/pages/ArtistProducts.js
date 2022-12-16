import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { api } from "../api/api";
import { ProductCard } from "../components/ProductCard";
import { Modal } from "../components/Modal";
import { toast } from "react-hot-toast";

export function ArtistProducts(props) {

   const [show, setShow] = useState(false);
   const [artist] = useOutletContext();
   const [loading, setLoading] = useState(true);
   const [products, setProducts] = useState({});
   const [productShow, setProductShow] = useState({});
   const [userFavorites, setUserFavorites] = useState([]);

   const showDetails = (product) => {
      setShow(true);
      setProductShow({ ...product });
   };

   function hideModal() {
      setShow(false);
   }

   useEffect(() => {
      async function fetchFavorites() {
         try {

            const response = await api.get("/user/account");
            setUserFavorites(response.data.favorites);

         } catch (error) {
            console.log(error);
         }
      }
      fetchFavorites();
   }, []);

   async function handleSave(product) {

      try {
         await api.post(`/user/favorites/${product}`);
         toast.success("Produto salvo!");

      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      async function fetchProducts() {
         try {

            const response = await api.get(`/artists/${artist._id}/products`);
            setProducts(response.data);
            setLoading(false);

         } catch (error) {
            console.log(error);
         }
      }
      fetchProducts();
   }, []);

   return (
      <>
         <Modal show={show} hideModal={hideModal}>
            <div className="modal__product">
               <img className="modal__image" src={productShow.image} alt={productShow.name} />

               <div className="modal__content">

                  <h3 className="modal__title">{productShow.name}</h3>
                  <h5><strong className="modal__price">R$ {productShow.price}</strong></h5>
                  <p className="modal__text">{productShow.description}</p>

                  <button onClick={productShow.url} className="btn btn-lg btn-primary">
                     Comprar na loja do artista
                  </button>

               </div>

            </div>
         </Modal>

         {loading ? (<p className="text-center set__loading">Loading...</p>) :
            (
               <div className="grid__cards">
                  {products.map((currentProduct) => {
                     return (
                        <ProductCard
                           saved={userFavorites.includes(currentProduct._id)}
                           handleSave={handleSave}
                           showDetails={showDetails}
                           key={currentProduct._id}
                           product={currentProduct}
                           image={currentProduct.image}
                           name={currentProduct.name}
                           price={currentProduct.price}
                        />
                     );
                  })}
               </div>
            )}
      </>
   );
}
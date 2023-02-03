import { useEffect, useState, useContext } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { api } from "../../api/api";
import { ProductCard } from "../../components/ProductCard";
import { AuthContext } from "../../contexts/authContext";
import { Modal } from "../../components/Modal";
import { toast } from "react-hot-toast";
import { BounceLoader } from "react-spinners";

export function ArtistProducts() {

   const { loggedInUser } = useContext(AuthContext);
   const navigate = useNavigate();

   const [show, setShow] = useState(false);
   const [artist] = useOutletContext();
   const [loading, setLoading] = useState(true);
   const [products, setProducts] = useState({});
   const [productShow, setProductShow] = useState({});
   const [userFavorites, setUserFavorites] = useState([]);
   const [updateFavorites, setUpdateFavorites] = useState(false);

   useEffect(() => {

      if (Object.keys(productShow).length === 0) {
         return;
      }

      setShow(true);

   }, [productShow]);

   const handleClose = () => {
      setShow(false);
      setProductShow({});
   };

   useEffect(() => {
      async function fetchFavorites() {
         try {
            if (!loggedInUser) {
               return;
            }
            const response = await api.get("/user/account");
            setUserFavorites(response.data.favorites);

         } catch (error) {
            console.log(error);
         }
      }
      fetchFavorites();
   }, [navigate, updateFavorites, loggedInUser]);

   async function handleSave(product) {

      try {
         console.log(loggedInUser);
         if (!loggedInUser) {
            navigate("/login");
            return;
         }
         await api.post(`/user/favorites/${product}`);
         toast.success("Produto salvo nos seus favoritos");
         setUpdateFavorites(true);

      } catch (error) {
         console.log(error);
      }

   }

   async function handleRemove(product) {
      try {
         if (!loggedInUser) {
            navigate("/login");
         }
         await api.delete(`/user/favorites/${product}`);
         toast.success('Produto removido dos seus favoritos');
         setUpdateFavorites(true);

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
   }, [artist._id, updateFavorites]);

   useEffect(() => {
      setUpdateFavorites(false);
   }, [userFavorites]);

   return (
      <>
         <Modal
            show={show}
            handleClose={handleClose}
            productShow={productShow}
         />

         {loading ? (

            <div className="d-flex gap-3 py-5 flex-column align-items-center">
               <BounceLoader color="#887EF9" />
               <p>Carregando produtos...</p>
            </div>

         ) :

            products.length === 0 ? "Este artista ainda não postou produtos." :
               (
                  <div className="grid">
                     {products.map((currentProduct) => {
                        return (
                           <div key={currentProduct._id} className="g-col-6 g-col-md-4 g-col-lg-3">
                              <ProductCard
                                 saved={userFavorites.includes(currentProduct._id)}
                                 handleSave={() => (handleSave(currentProduct._id))}
                                 handleRemove={() => (handleRemove(currentProduct._id))}
                                 showDetails={() => setProductShow(currentProduct)}
                                 product={currentProduct}
                                 image={currentProduct.image}
                                 name={currentProduct.name}
                                 price={currentProduct.price}
                              />
                           </div>
                        );
                     })}
                  </div>
               )}
      </>
   );
}
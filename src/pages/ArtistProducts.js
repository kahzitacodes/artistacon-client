import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { api } from "../api/api";
import { ProductCard } from "../components/ProductCard";
import { Modal } from "../components/Modal";

export function ArtistProducts(props) {

   const [show, setShow] = useState(false);
   const [artistId] = useOutletContext();
   const [loading, setLoading] = useState(true);
   const [products, setProducts] = useState({});

   function handleShow() {
      setShow(!show);
   }

   useEffect(() => {
      async function fetchProducts() {
         try {

            const response = await api.get(`/artists/${artistId}/products`);
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
         <Modal show={show} showFunction={() => handleShow()} />

         {loading ? (<p className="text-center set__loading">Loading...</p>) :
            (
               <div className="grid__cards">
                  {products.map((currentProduct) => {
                     return (
                        <ProductCard
                           key={currentProduct._id}
                           showFunction={() => handleShow()}
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
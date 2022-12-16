import { useEffect, useState } from "react";
import { api } from "../api/api";
import { MediaCard } from "../components/MediaCard";
import toast from "react-hot-toast";
import iconTrash from '../assets/images/i-trash-danger.svg';
import { EmptyState } from "../components/EmptyState";
import { Link, useNavigate } from "react-router-dom";

export function AccountProducts(props) {

   const [products, setProducts] = useState([]);
   const navigate = useNavigate();

   async function deleteProduct(productId, toastId) {

      try {

         await api.delete(`/user/products/${productId}`);

         toast.dismiss(toastId);
         toast.success('Produto deletado com sucesso!');
         navigate("/minha-conta/produtos");

      } catch (error) {
         console.log(error);
      }
   }

   async function handleDelete(productId) {
      toast((t) => {
         return (
            <div className="toast__content--vertical">
               <div className="toast__head">
                  <img src={iconTrash} alt="lixeira"></img>
                  <h5>Excluir produto?</h5>
               </div>
               <p className="toast__text">O produto será deletado de forma permanente.</p>
               <div className="toast__footer">
                  <button className="btn btn-sm btn-link" onClick={() => toast.dismiss(t.id)}>
                     Cancelar
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteProduct(productId, t.id)}>
                     Excluir
                  </button>
               </div>
            </div>
         );
      }, {
         duration: Infinity,
      });
   }

   useEffect(() => {
      async function fetchProducts() {
         try {

            const response = await api.get("/user/products");
            setProducts(response.data);

         } catch (error) {
            console.log(error);
         }
      }
      fetchProducts();
   }, []);

   return (
      <>

         {products.length === 0 ?
            <>
               <h3 className="form__title text-center">Produtos</h3>
               <EmptyState element="Produto" linkTo="/produtos/novo-produto" />
            </> :

            <div className="heading__wrapper">
               <h3 className="heading__title">Produtos</h3>
               <Link className="btn btn-md btn-primary" to="/minha-conta/produtos/novo-produto">Novo produto</Link>
            </div>
         }

         <div className="account__wrap-cards">
            {products.map((currentProduct) => {
               return (
                  <>
                     <MediaCard
                        type="product"
                        key={currentProduct._id}
                        id={currentProduct._id}
                        title={currentProduct.name}
                        price={currentProduct.price}
                        img={currentProduct.image}
                        deleteFunction={() => handleDelete(currentProduct._id)}
                     />
                  </>
               );
            })}
         </div>
      </>
   );
}
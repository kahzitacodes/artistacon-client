import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { MediaCard } from "../../components/DefaultCard";
import toast from "react-hot-toast";
import iconTrash from '../../assets/images/i-trash-danger.svg';
import { EmptyState } from "../../components/EmptyState";
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
            <div className="d-flex flex-column gap-3 py-1 px-1">
               <div className="d-flex align-items-center gap-2">
                  <img src={iconTrash} alt="lixeira"></img>
                  <h5>Excluir produto?</h5>
               </div>
               <p className="text-body">O produto será deletado de forma permanente.</p>
               <div className="d-flex gap-4 justify-content-end">
                  <button className="link link-secondary" onClick={() => toast.dismiss(t.id)}>
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
               <h3 className="mb-4 text-center">Produtos</h3>
               <EmptyState element="Produto" linkTo="/minha-conta/produtos/novo-produto" />
            </> :

            <div className="d-flex justify-content-between align-items-center mb-4">
               <h3>Produtos</h3>
               <Link className="btn btn-primary" to="/minha-conta/produtos/novo-produto">Novo produto</Link>
            </div>
         }

         <div className="gap-4 d-flex flex-column">
            {products.map((currentProduct) => {
               return (
                  <div key={currentProduct._id}>
                     <MediaCard
                        type="product"
                        id={currentProduct._id}
                        title={currentProduct.name}
                        price={currentProduct.price}
                        img={currentProduct.image}
                        deleteFunction={() => handleDelete(currentProduct._id)}
                     />
                  </div>
               );
            })}
         </div>
      </>
   );
}
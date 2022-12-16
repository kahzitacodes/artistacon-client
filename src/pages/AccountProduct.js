import { useState, useEffect } from "react";
import { api } from "../api/api";
import { useParams, Link, useNavigate } from "react-router-dom";
import iconTrash from '../assets/images/i-trash-danger.svg';
import iconPencil from '../assets/images/i-pencil900.svg';
import { toast } from "react-hot-toast";


export function AccountProduct() {

   const params = useParams();
   const [product, setProduct] = useState();

   const navigate = useNavigate();

   async function deletProduct(productId, toastId) {

      try {

         await api.delete(`/user/products/${productId}`);

         toast.dismiss(toastId);
         toast.success('Produto deletada com sucesso!');
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
                  <h5>Excluir Produto?</h5>
               </div>
               <p className="toast__text">O produto será deletado de forma permanente.</p>
               <div className="toast__footer">
                  <button className="btn btn-sm btn-link" onClick={() => toast.dismiss(t.id)}>
                     Cancelar
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => deletProduct(productId, t.id)}>
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
      async function fetchProduct() {
         try {

            const response = await api.get(`/user/products/${params.productId}`);
            setProduct(response.data);
         } catch (error) {
            console.log(error);
         }
      }

      fetchProduct();
   }, []);


   return (
      <>
         <div className="heading__wrapper">
            <Link
               className="link__default link-back"
               to="/minha-conta/produtos">
               Voltar para produtos
            </Link>
         </div>
         {product &&

            <div className="read__wrapper">
               <div className="read__middle">
                  <div className="read__image">
                     <img src={product.image} alt={product.name} />
                  </div>

                  <div className="read__content">
                     <h3>{product.name}</h3>
                     <h5 className="read__price">R$ {product.price}</h5>
                     <p className="read__description">{product.description}</p>
                  </div>
               </div>
               <div className="read__actions">
                  <button
                     className="btn btn-md btn-outline-danger btn-icon"

                     onClick={() => handleDelete(product._id)}
                  >
                     <img src={iconTrash} alt="lixeira" />
                     Deletar
                  </button>

                  <Link
                     className="btn btn-md btn-outline-secondary btn-icon"
                     to={`/minha-conta/produtos/editar/${params.productId}`}
                  >
                     <img src={iconPencil} alt="lápis" />
                     Editar
                  </Link>
               </div>
            </div>
         }
      </>
   );
};
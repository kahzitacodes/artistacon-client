import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ArrowLeft } from 'react-feather';
import { Trash2 } from 'react-feather';
import { Edit2 } from 'react-feather';


export function AccountProduct() {

   const params = useParams();
   const [product, setProduct] = useState();

   const navigate = useNavigate();

   async function deletProduct(productId, toastId) {

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
                  <Trash2 />
                  <h5>Excluir Produto?</h5>
               </div>
               <p className="text-body">O produto será deletado de forma permanente.</p>
               <div className="d-flex gap-4 justify-content-end">
                  <button className="link link-secondary" onClick={() => toast.dismiss(t.id)}>
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
   }, [params.productId]);


   return (
      <>
         <div className="mb-5">
            <Link
               className="link link-secondary gap-1 d-flex"
               to="/minha-conta/produtos">
               <ArrowLeft />
               Voltar para produtos
            </Link>
         </div>

         {product &&

            <div className="d-flex flex-column gap-5">
               <div className="row">
                  <div className="col-4">
                     <img className="img-fluid rounded" src={product.image} alt={product.name} />
                  </div>

                  <div className="col-8 d-flex flex-column gap-3">
                     <h3>{product.name}</h3>
                     <h5 className="read__price">R$ {product.price}</h5>
                     <p className="read__description">{product.description}</p>
                  </div>
               </div>

               <div className="d-flex justify-content-between mt-5">
                  <button
                     className="btn btn-outline-danger"
                     onClick={() => handleDelete(product._id)}
                  >
                     <Trash2 />
                     Deletar
                  </button>

                  <Link
                     className="btn btn-md btn-outline-secondary"
                     to={`/minha-conta/produtos/editar/${params.productId}`}
                  >
                     <Edit2 />
                     Editar
                  </Link>
               </div>
            </div>
         }
      </>
   );
};
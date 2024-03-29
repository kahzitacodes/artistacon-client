import { useState, useEffect } from "react";
import { api } from "../../api/api";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";

export function AccountEditProduct() {

   const params = useParams();
   const navigate = useNavigate();

   const [form, setForm] = useState({
      name: "",
      price: 0,
      description: "",
      url: ""
   });

   const [image, setImage] = useState("");

   function handleChange(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
   }

   function handleImage(e) {
      setImage(e.target.files[0]);
   }

   async function handleUpload() {
      try {

         const uploadData = new FormData();
         uploadData.append("picture", image);

         const response = await api.post("/uploadImage", uploadData);

         return response.data.url;

      } catch (error) {
         console.log(error);
      }
   }

   async function handleSubmit(e) {
      e.preventDefault();

      try {

         const imageURL = await handleUpload();
         await api.put(`/user/products/${params.productId}`, { ...form, image: imageURL });

         toast.success('Produto alterado com sucesso!');

         navigate(`/minha-conta/produtos/${params.productId}`);

      } catch (error) {
         toast.error('Alguma coisa deu errado');
         console.log();
      }
   }

   useEffect(() => {
      async function fetchProduct() {
         try {

            const response = await api.get(`/user/products/${params.productId}`);
            setForm(response.data);
         } catch (error) {
            console.log(error);
         }
      }

      fetchProduct();
   }, [params.productId]);


   return (
      <>
         <h3 className="mb-4">Editar produto</h3>
         <form className="form" onSubmit={handleSubmit}>

            <div className="form-group">
               <div className="form-wrap">
                  <label className="form__label" htmlFor="input-image">Imagem do produto</label>
                  <div className="form-wrap-upload">
                     <div className="form__image">
                        <img src={form.image} alt={form.name} />
                     </div>
                     <label htmlFor="input-image" className="custom-file-upload">Escolher imagem</label>
                     <span>{image.name}</span>
                     <input
                        id="input-image"
                        className="form-control"
                        type="file"
                        onChange={handleImage}
                     />
                  </div>
               </div>

               <div className="form-wrap">
                  <label htmlFor="input-name" className="form__label">Nome</label>
                  <input
                     required
                     id="input-name"
                     className="form-control"
                     type="text"
                     name="name"
                     value={form.name}
                     onChange={handleChange}
                  />
               </div>

               <div className="form-wrap">
                  <label htmlFor="input-price" className="form__label">Preço</label>
                  <input
                     required
                     id="input-price"
                     className="form-control"
                     type="number"
                     name="price"
                     value={form.price}
                     onChange={handleChange}
                  />
               </div>

               <div className="form-wrap">
                  <label className="form__label" htmlFor="input-description">Descrição</label>
                  <textarea
                     required
                     id="input-description"
                     rows="6"
                     className="form-control"
                     name="description"
                     value={form.description}
                     onChange={handleChange}
                  />
               </div>

               <div className="form-wrap">
                  <label htmlFor="input-url" className="form__label">URL para compra</label>
                  <input
                     required
                     id="input-url"
                     className="form-control"
                     type="text"
                     name="url"
                     value={form.url}
                     onChange={handleChange}
                  />
               </div>

               <div className="d-flex justify-content-end mt-5">
                  <button className="btn btn-lg btn-primary">Salvar alterações</button>
               </div>
            </div>
         </form>
      </>
   );
};
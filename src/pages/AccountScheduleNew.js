import { useNavigate, Link } from "react-router-dom";
import { api } from "../api/api";
import toast from "react-hot-toast";
import { useState } from "react";

export function ScheduleNew() {

   const navigate = useNavigate();

   const [form, setForm] = useState({
      title: "",
      participants: "",
      date: "",
      time: "",
      status: "Confirmado"
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
         await api.post("/schedule/new-activity", { ...form, image: imageURL });

         toast.success('Atividade criada com sucesso!');
         navigate("/minha-conta/programacao");

      } catch (error) {
         toast.error('Alguma coisa deu errado');
         console.log(error);
      }
   }

   return (
      <>
         <h3 className="form__title">Criar atividade</h3>
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
                  <label htmlFor="input-title" className="form__label">Título</label>
                  <input
                     required
                     id="input-title"
                     className="form-control"
                     type="text"
                     name="title"
                     value={form.title}
                     onChange={handleChange}
                  />
               </div>

               <div className="form-wrap">
                  <label htmlFor="input-participants" className="form__label">Convidados</label>
                  <input
                     required
                     id="input-participants"
                     className="form-control"
                     type="text"
                     name="participants"
                     value={form.participants}
                     onChange={handleChange}
                  />
               </div>

               <div className="form-row">
                  <div className="form-wrap">
                     <label htmlFor="input-date" className="form__label">Data</label>
                     <input
                        placeholder="DD-MM-AAAA"
                        required
                        id="input-date"
                        className="form-control"
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                     />
                  </div>

                  <div className="form-wrap">
                     <label htmlFor="input-time" className="form__label">Horário</label>
                     <input
                        required
                        id="input-time"
                        className="form-control"
                        type="time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                     />
                  </div>
               </div>

               <div className="form-wrap ">
                  <label htmlFor="input-status" className="form__label">Status</label>
                  <select
                     required
                     id="input-status"
                     className="form-control"
                     name="status"
                     value={form.status}
                     onChange={handleChange}
                  >
                     <option>Confirmado</option>
                     <option>Pendente</option>
                     <option>Cancelado</option>
                  </select>
               </div>

               <div className="form__actions">
                  <Link
                     className="link__default link-back"
                     to="/minha-conta/programacao">
                     Voltar para programação
                  </Link>
                  <button className="btn btn-lg btn-primary">Salvar</button>
               </div>

            </div>
         </form>
      </>
   );
}
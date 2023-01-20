import { useEffect, useState } from "react";
import { api } from "../../api/api";
import toast from "react-hot-toast";

export function AccountProfile() {

   const [user, setUser] = useState({});

   useEffect(() => {
      async function fetchUser() {
         try {

            const response = await api.get("/user/account");
            setUser(response.data);

         } catch (error) {
            console.log(error);
         }
      }
      fetchUser();
   }, []);


   const hasBio = user.bio;

   const [form, setForm] = useState({
      artistic_name: "",
      bio: "",
      key_words: "",
      store_URL: "",
      twitter_URL: "",
      instagram_URL: "",
      facebook_URL: "",
      twitch_URL: "",
      tiktok_URL: "",
      youtube_URL: ""
   });

   const [avatar, setAvatar] = useState("");

   function handleChange(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
   }

   function handleAvatar(e) {
      setAvatar(e.target.files[0]);
   }

   async function handleUpload() {
      try {

         const uploadData = new FormData();
         uploadData.append("picture", avatar);

         const response = await api.post("/uploadImage", uploadData);

         return response.data.url;

      } catch (error) {
         console.log(error);
      }
   }

   async function handleSubmit(e) {
      e.preventDefault();

      try {

         const avatarURL = await handleUpload();

         if (!hasBio) {
            await api.post("/user/bio", { ...form, avatar: avatarURL });
         }

         await api.put("/user/bio", { ...form, avatar: avatarURL });

         toast.success('Seu perfil foi salvo com sucesso!');

      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      async function fetchUserBio() {
         try {

            if (hasBio) {
               const response = await api.get(`/user/bio`);
               setForm(response.data);
            }

            return null;

         } catch (error) {
            console.log(error);
         }
      }

      fetchUserBio();
   }, [hasBio]);

   return (
      <>
         <h3 className="mb-4">Perfil</h3>
         <form className="form" onSubmit={handleSubmit}>

            <div className="mb-5">
               <div className="form-wrap">
                  <label className="form__label" htmlFor="input-avatar">Foto do perfil</label>
                  <div className="form-wrap-upload">
                     <div className="form__avatar">
                        <img src={form.avatar} alt={form.artistic_name} />
                     </div>
                     <label htmlFor="input-avatar" className="custom-file-upload">Escolher foto</label>
                     <span>{avatar.name}</span>
                     <input
                        id="input-avatar"
                        className="form-control"
                        type="file"
                        onChange={handleAvatar}
                     />
                  </div>

               </div>
               <div className="form-wrap">
                  <label className="form__label">Nome artístico</label>
                  <input
                     className="form-control"
                     type="text"
                     name="artistic_name"
                     value={form.artistic_name}
                     onChange={handleChange}
                  />
               </div>

               <div className="form-wrap">
                  <label className="form__label" htmlFor="input-bio">Biografia</label>
                  <textarea
                     id="input-bio"
                     rows="6"
                     className="form-control"
                     type="text"
                     name="bio"
                     value={form.bio}
                     onChange={handleChange}
                  />

               </div>

               <div className="form-wrap">
                  <label className="form__label" htmlFor="input-key-words">Palavras chave</label>
                  <input
                     id="input-key-words"
                     className="form-control"
                     type="text"
                     value={form.key_words}
                     name="key_words"
                     onChange={handleChange}
                  />
                  <span className="form__helper">
                     Insira palavras relacionadas aos temas do seu trabalho separadas por vírgula. Exemplo: OCs, Aquarela, Harry Potter, Zelda, Fantasia, Turma da Mônica.
                  </span>
               </div>
            </div>

            <div className="mb-5">
               <h4 className="mb-4">Link da loja online</h4>
               <div className="form-wrap">
                  <label className="form__label" htmlFor="input-store">URL da Loja</label>
                  <input
                     id="input-store"
                     className="form-control"
                     type="text"
                     value={form.store_URL}
                     name="store_URL"
                     onChange={handleChange}
                  />
               </div>
            </div>

            <div className="mb-5">
               <h4 className="mb-4">Redes sociais</h4>
               <div className="form-wrap">
                  <label className="form__label" htmlFor="input-twitter">Twitter</label>
                  <input
                     id="input-twitter"
                     className="form-control"
                     type="text"
                     value={form.twitter_URL}
                     name="twitter_URL"
                     onChange={handleChange}
                  />
               </div>

               <div className="form-wrap">
                  <label className="form__label" htmlFor="input-instagram">Instagram</label>
                  <input
                     id="input-instagram"
                     className="form-control"
                     type="text"
                     value={form.instagram_URL}
                     name="instagram_URL"
                     onChange={handleChange}
                  />
               </div>

               <div className="form-wrap">
                  <label className="form__label" htmlFor="input-facebook">Facebook</label>
                  <input
                     id="input-facebook"
                     className="form-control"
                     type="text"
                     value={form.facebook_URL}
                     name="facebook_URL"
                     onChange={handleChange}
                  />
               </div>

               <div className="form-wrap">
                  <label className="form__label" htmlFor="input-twitch">Twitch</label>
                  <input
                     id="input-twitch"
                     className="form-control"
                     type="text"
                     value={form.twitch_URL}
                     name="twitch_URL"
                     onChange={handleChange}
                  />
               </div>

               <div className="form-wrap">
                  <label className="form__label" htmlFor="input-tiktok">Tiktok</label>
                  <input
                     id="input-tiktok"
                     className="form-control"
                     type="text"
                     value={form.tiktok_URL}
                     name="tiktok_URL"
                     onChange={handleChange}
                  />
               </div>

               <div className="form-wrap">
                  <label className="form__label" htmlFor="input-youtube">Youtube</label>
                  <input
                     id="input-youtube"
                     className="form-control"
                     type="text"
                     value={form.youtube_URL}
                     name="youtube_URL"
                     onChange={handleChange}
                  />
               </div>
            </div>

            <div className="d-flex justify-content-end mt-5">
               <button className="btn btn-lg btn-primary">Salvar alterações</button>
            </div>

         </form>
      </>
   );
}
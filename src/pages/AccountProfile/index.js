import { useEffect, useState } from "react";
import { api } from "../../api/api";


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

   console.log(form);

   return (
      <>
         <h3 className="form__title">Perfil</h3>
         <form className="form" onSubmit={handleSubmit}>

            <div className="form-group">
               <div className="form-wrap">

                  <label className="form__label" htmlFor="input-avatar">Foto do perfil</label>
                  <div className="form-wrap-upload">
                     <div className="form__avatar">
                        <img src={form.avatar} alt={form.artistic_name} />
                     </div>
                     <label htmlFor="input-avatar" className="custom-file-upload">Foto do perfil</label>
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

            <div className="form-group">
               <h4>Link da loja online</h4>
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

            <div className="form-group">
               <h4>Redes sociais</h4>
               <div className="form-wrap">
                  <label className="form__label" htmlFor="input-store">Twitter</label>
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
                  <label className="form__label" htmlFor="input-store">Instagram</label>
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
                  <label className="form__label" htmlFor="input-store">Facebook</label>
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
                  <label className="form__label" htmlFor="input-store">Twitch</label>
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
                  <label className="form__label" htmlFor="input-store">Tiktok</label>
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
                  <label className="form__label" htmlFor="input-store">Youtube</label>
                  <input
                     id="input-youtube"
                     className="form-control"
                     type="text"
                     value={form.youtube_URL}
                     name="youtube_URL"
                     onChange={handleChange}
                  />
               </div>

               <div className="form__actions">
                  <button className="btn btn-lg btn-primary">Salvar alterações</button>
               </div>

            </div>

         </form>
      </>
   );
}
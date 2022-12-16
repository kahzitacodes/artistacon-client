import { Link } from "react-router-dom";
import { api } from "../api/api";
import { useState, useEffect } from "react";
import { EmptyState } from "../components/EmptyState";
import { MediaCard } from "../components/MediaCard";
import { toast } from "react-hot-toast";
import iconTrash from '../assets/images/i-trash-danger.svg';

export function AccountSchedule() {

   const [schedule, setSchedule] = useState([]);
   const [loading, setLoading] = useState(true);
   const [isDeleted, setIsDeleted] = useState(false);

   async function deleteActivity(activityId, toastId) {

      try {

         await api.delete(`/schedule/${activityId}`);

         toast.dismiss(toastId);
         toast.success('Atividade deletada com sucesso!');
         setIsDeleted(true);

      } catch (error) {
         console.log(error);
      }
   }

   async function handleDelete(activityId) {
      toast((t) => {
         return (
            <div className="toast__content--vertical">
               <div className="toast__head">
                  <img src={iconTrash} alt="lixeira"></img>
                  <h5>Excluir atividade?</h5>
               </div>
               <p className="toast__text">A atividade será deletada de forma permanente.</p>
               <div className="toast__footer">
                  <button className="btn btn-sm btn-link" onClick={() => toast.dismiss(t.id)}>
                     Cancelar
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteActivity(activityId, t.id)}>
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
      async function fetchSchedule() {
         try {

            const response = await api.get("/schedule/");
            setSchedule(response.data);
            setLoading(false);

         } catch (error) {
            console.log(error);
         }
      }
      fetchSchedule();
   }, [isDeleted]);

   useEffect(() => {
      setIsDeleted(false);
   }, [schedule]);

   return (
      <>

         {loading && (<p className="text-center set__loading">Loading...</p>)}

         {schedule.length === 0 ?
            <>
               <h3 className="form__title text-center">Programação</h3>
               <EmptyState element="Atividade" linkTo="/minha-conta/programacao/nova-atividade" />
            </> :

            <>
               <div className="heading__wrapper">
                  <h3 className="heading__title">Programação</h3>
                  <Link className="btn btn-md btn-primary" to="/minha-conta/programacao/nova-atividade">Nova atividade</Link>
               </div>

               <div className="account__wrap-cards">
                  {schedule.map((currentElement) => {

                     return (
                        <MediaCard
                           type="schedule"
                           key={currentElement._id}
                           id={currentElement._id}
                           date={currentElement.date}
                           img={currentElement.image}
                           title={currentElement.title}
                           infos={currentElement.participants}
                           time={currentElement.time}
                           deleteFunction={() => (handleDelete(currentElement._id))}
                        />
                     );
                  })}
               </div>
            </>
         }
      </>
   );
};
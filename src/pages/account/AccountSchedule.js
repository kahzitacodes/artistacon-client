import { Link } from "react-router-dom";
import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { EmptyState } from "../../components/EmptyState";
import { MediaCard } from "../../components/DefaultCard";
import { toast } from "react-hot-toast";
import iconTrash from '../../assets/images/i-trash-danger.svg';

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
            <div className="d-flex flex-column gap-3 py-1 px-1">
               <div className="d-flex align-items-center gap-2">
                  <img src={iconTrash} alt="lixeira"></img>
                  <h5>Excluir atividade?</h5>
               </div>
               <p className="text-body">A atividade será deletada de forma permanente.</p>
               <div className="d-flex gap-4 justify-content-end">
                  <button className="link link-secondary" onClick={() => toast.dismiss(t.id)}>
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
               <h3 className="mb-4 text-center">Programação</h3>
               <EmptyState element="Atividade" linkTo="/minha-conta/programacao/nova-atividade" />
            </> :

            <>
               <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3>Programação</h3>
                  <Link className="btn btn-primary" to="/minha-conta/programacao/nova-atividade">Nova atividade</Link>
               </div>

               <div className="gap-4 d-flex flex-column">
                  {schedule.map((currentElement) => {

                     return (

                        <div key={currentElement._id}>
                           <MediaCard
                              type="schedule"
                              id={currentElement._id}
                              date={currentElement.date}
                              img={currentElement.image}
                              title={currentElement.title}
                              infos={currentElement.participants}
                              time={currentElement.time}
                              deleteFunction={() => (handleDelete(currentElement._id))}
                           />
                        </div>
                     );
                  })}
               </div>
            </>
         }
      </>
   );
};
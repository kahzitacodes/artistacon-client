import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/api";
import { ScheduleCard } from "./ScheduleCard";

export function ScheduleList() {

   const [schedule, setSchedule] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      async function fetchSchedule() {
         try {

            const response = await api.get("/schedule/recent");
            setSchedule(response.data);
            setLoading(false);

         } catch (error) {
            console.log(error);
         }
      }

      fetchSchedule();
   }, []);

   const scheduleRightTime = schedule.map(currentElement => {
      const dateStr = `${currentElement.date} ${currentElement.time}`;
      return {
         dateComplete: new Date(dateStr),
         ...currentElement
      };
   }).sort((date1, date2) => date1.dateComplete - date2.dateComplete);

   return (
      <div className="schedule-list">
         <div className="container">
            <div className="feature__headline">
               <p className="pre-title fw-bold mb-3">Lives</p>
               <h2 className="mb-5">Fique por dentro das próximas atividades</h2>
            </div>

            <div className="grid mb-5">
               {loading ? (
                  <p className="text-center set__loading">Loading...</p>
               ) : (
                  <>

                     {scheduleRightTime.map(currentElement => {

                        return (
                           <div className="g-col-12 g-col-md-6 g-col-lg-3" key={currentElement._id}>
                              <ScheduleCard
                                 type="vertical"
                                 title={currentElement.title}
                                 participants={currentElement.participants}
                                 time={currentElement.time}
                                 image={currentElement.image}
                                 date={currentElement.dateComplete}
                              />
                           </div>

                        );

                     })}

                  </>
               )}

            </div>

            <div className="d-flex justify-content-center">
               <Link className="btn btn-lg btn-outline-secondary" to="/programacao">Explore mais</Link>
            </div>
         </div>
      </div>
   );
}
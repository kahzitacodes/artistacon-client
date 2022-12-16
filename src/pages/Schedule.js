import { useState, useEffect } from "react";
import { api } from "../api/api";
import { FeatureDiscord } from "../components/FeatureDiscord";
import { ScheduleCard } from "../components/ScheduleCard";

export function Schedule() {

   const [schedule, setSchedule] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      async function fetchSchedule() {
         try {

            const response = await api.get("/schedule");
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

   const scheduleDays = scheduleRightTime.map((currentElement) => {

      const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Set', 'Out', 'Nov', 'Dez'];
      const weekdayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

      const date = currentElement.dateComplete;
      const day = date.getDate();
      const month = monthNames[date.getMonth()];
      const weekDay = weekdayNames[date.getDay()];
      const formatDay = `${weekDay}, ${day} ${month}`;

      return formatDay;
   });

   const uniqueDates = scheduleDays.filter((date, index) => scheduleDays.indexOf(date) === index);


   console.log(uniqueDates);

   return (
      <main className="main-divider-top">
         <div className="container">
            <div className="main__headline">
               <p className="pre-title">Programação</p>
               <h2>
                  Lives, bate papos e mais lives
               </h2>
               <p className="main__headline-text">Durante os 3 dias de feira, contamos com uma incrível Programação de Lives e bate papos com artistas, artesãos, escritores e cosmakers no nosso servidor no Discord! Contamos também com as Lives Livres, que são feitas por artistas de forma independente, onde eles conversam, mostram seus processos e produtos, dão dicas de arte e trocam experiências com outros artistas e visitantes.</p>
            </div>

            <div className="main__schedule">

               {loading ? (
                  <p className="text-center set__loading">Loading...</p>
               ) : (
                  <>
                     {scheduleRightTime.map(currentElement => {

                        return (

                           <ScheduleCard
                              type="horizontal"
                              title={currentElement.title}
                              participants={currentElement.participants}
                              time={currentElement.time}
                              image={currentElement.image}
                              date={currentElement.dateComplete}
                           />

                        );

                     })}

                  </>
               )}


            </div>
         </div>

         <FeatureDiscord />
      </main>
   );
}
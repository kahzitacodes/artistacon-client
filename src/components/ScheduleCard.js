import clock from "../assets/images/i-clock300.svg";
import users from "../assets/images/i-users300.svg";

export function ScheduleCard(props) {

   const { title, participants, time, image, type, imageAlt, date } = props;

   const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Set', 'Out', 'Nov', 'Dez'];

   let day = date.getDate();
   const month = monthNames[date.getMonth()];

   if (String(day).length === 1) {
      day = "0" + day;
   }

   let typeOfCard = "";

   if (type === 'vertical') {
      typeOfCard = "s-card__vertical";
   }

   if (type === 'horizontal') {
      typeOfCard = "s-card__horizontal";
   }

   return (
      <div className={`s-card ${typeOfCard}`}>

         <div className="s-card__image">

            {type === 'vertical' ?
               <div className="s-card__calendar d-flex flex-column py-2 px-2 text-center">
                  <span className="month text-uppercase fw-bold">{month}</span>
                  <span className="day fw-bold">{day}</span>
               </div>
               : null
            }

            <img src={image} alt={imageAlt} />
         </div>

         <div className="s-card__content d-flex flex-column gap-2 justify-content-center">
            <h4 className="s-card__title">{title}</h4>

            <div className="d-flex flex-column gap-2">
               <div className="s-card__item align-items-center">
                  <img className="icon" src={users} alt="Relógio" />
                  <span>{participants}</span>
               </div>
            </div>
            <div className="s-card__item align-items-center">
               <img className="icon" src={clock} alt="Relógio" />
               <span>{time}</span>
            </div>
         </div>

      </div>
   );
}
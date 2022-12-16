import style from "./style.module.css";
import clock from "../../assets/images/i-clock300.svg";

export function ScheduleCard(props) {

   const { title, participants, time, image, type, imageAlt, date } = props;

   const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Set', 'Out', 'Nov', 'Dez'];

   const day = date.getDate();
   const month = monthNames[date.getMonth()];

   let typeOfCard = "";

   if (type === 'vertical') {
      typeOfCard = style.card__vertical;
   }

   if (type === 'horizontal') {
      typeOfCard = style.card__horizontal;
   }

   return (
      <div className={`${style.card} ${typeOfCard}`}>

         <div className={style.card__image}>

            {type === 'vertical' ?
               <div className={style.card__calendar}>
                  <span className={style.calendar__month}>{month}</span>
                  <span className={style.calendar__day}>{day}</span>
               </div>
               : null
            }

            <img src={image} alt={imageAlt} />
         </div>

         <div className={style.content}>
            <span className={style.card__time}>
               <img className={style.card__time_icon} src={clock} alt="Relógio" />
               {time}
            </span>
            <div className={style.content__text}>
               <h5>{title}</h5>
               <p>{participants}</p>
            </div>
         </div>

      </div>
   );
}
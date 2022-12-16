import style from "./style.module.css";

export function Feature(props) {

   const { image, preTitle, title, textPosition, imageAlt } = props;

   let position = "";
   if (textPosition === "right") {
      position = style.text__right;
   }
   if (textPosition === "left") {
      position = style.text__left;
   }

   return (
      <div className={`${style.feature}`}>
         <div className={`container ${position} ${style.feature__container}`}>

            <div className={style.text__container}>
               <div className={style.text__title}>
                  {preTitle ? <p className="pre-title">{preTitle}</p> : null}
                  <h2>{title}</h2>
               </div>
               <div className={style.text__paragraphs}>
                  {props.children}
               </div>

            </div>
            <div className={style.image__container}>
               <img src={image} alt={imageAlt} />
            </div>
         </div>
      </div>
   );
}
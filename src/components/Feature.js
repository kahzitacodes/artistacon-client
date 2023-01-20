export function Feature(props) {

   const { image, preTitle, title, textPosition, imageAlt } = props;

   let isPositionRight = textPosition === 'right';
   // if (textPosition === "right") {
   //    position = 'text__right';
   // }
   // if (textPosition === "left") {
   //    position = 'text__left';
   // }

   return (
      <div className="feature">
         <div className="container">
            <div className="row align-items-center">

               <div className={`${isPositionRight ? "order-lg-2 offset-lg-1" : null} col-lg-6 d-flex flex-column gap-4 align-items-start feature__content`}>
                  <div className="feature__headline">
                     {preTitle ? <p className="pre-title fw-bold mb-3">{preTitle}</p> : null}
                     <h2>{title}</h2>
                  </div>
                  <div className="feature__text">
                     {props.children}
                  </div>
               </div>

               <div className={`${isPositionRight ? "order-lg-1" : "offset-lg-1"} col-lg-5  feature__image`}>
                  <img src={image} alt={imageAlt} />
               </div>

            </div>
         </div>
      </div>
   );
}
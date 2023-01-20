import { X, ShoppingCart } from "react-feather";

export function Modal(props) {

   const { show, handleClose, productShow } = props;
   return (
      <div className={`f-modal ${show ? 'show' : null}`}>

         <div className="d-flex justify-content-end py-3 px-4 border-bottom">
            <button onClick={handleClose} className="link link-secondary">
               <span className="invisible">Fechar</span> <X />
            </button>
         </div>

         <div className="container py-3 py-md-5">
            <div className="row">
               <div className="col-12 col-md-6 col-lg-7 mb-4 mb-md-0">
                  <img className="img-fluid" src={productShow.image} alt={productShow.name} />
               </div>
               <div className="col-12 col-md-6 col-lg-5 d-flex flex-column gap-3 align-items-start">

                  <h3>{productShow.name}</h3>
                  <h5 className="text-info fs-5">R$ {productShow.price}</h5>
                  <p>{productShow.description}</p>

                  <button onClick={() => window.open(productShow.url, '_blank')} className="btn btn-lg btn-primary">
                     <ShoppingCart />
                     Comprar na loja
                  </button>

               </div>
            </div>
         </div>

      </div>
   );

}
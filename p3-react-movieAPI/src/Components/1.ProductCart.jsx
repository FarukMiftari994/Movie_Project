// import React from "react";

// interface ProductCardProps {
//   product: {
//     id: number,
//     name: string,
//     price: number,
//     url: string,
//     cart: boolean,
//   };
//   onAddToCart: (item: any) => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
//   return (
//     <div className="col-3" key={product.id}>
//       <div className="card">
//         <img src={product.url} className="card-img-top" alt={product.name} />
//         <div className="card-body">
//           <h6 className="card-title">
//             {product.name} - $ {product.price}
//           </h6>
//           {product.cart === false && (
//             <button
//               className="btn btn-primary"
//               onClick={() => onAddToCart(product)}
//             >
//               Add to cart
//             </button>
//           )}
//           {product.cart === true && (
//             <button
//               className="btn btn-success"
//               onClick={() => onAddToCart(product)}
//             >
//               Added
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

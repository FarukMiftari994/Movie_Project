// import React from "react";

// interface CartTableProps {
//   cart: {
//     id: number,
//     name: string,
//     price: number,
//     url: string,
//     quantity: number,
//   }[];
//   onRemove: (item: any) => void;
//   onIncrease: (item: any) => void;
//   onDecrease: (item: any) => void;
// }

// const CartTable: React.FC<CartTableProps> = ({
//   cart,
//   onRemove,
//   onIncrease,
//   onDecrease,
// }) => {
//   return (
//     <table className="table text-center">
//       <thead>
//         <tr>
//           <th scope="col">#</th>
//           <th scope="col">Product</th>
//           <th scope="col">Product Name</th>
//           <th scope="col">Price</th>
//           <th scope="col">Quantity</th>
//           <th scope="col">Remove</th>
//         </tr>
//       </thead>
//       <tbody>
//         {cart.map((item, index) => (
//           <tr key={item.id}>
//             <th scope="row">{index + 1}</th>
//             <th scope="row">
//               <img src={item.url} style={{ width: "4rem" }} alt={item.name} />
//             </th>
//             <td>{item.name}</td>
//             <td>{item.price}</td>
//             <td>
//               <button
//                 onClick={() => onDecrease(item)}
//                 className="btn btn-primary btn-sm"
//               >
//                 -
//               </button>
//               {item.quantity}
//               <button
//                 onClick={() => onIncrease(item)}
//                 className="btn btn-primary btn-sm"
//                 size="sm"
//               >
//                 +
//               </button>
//             </td>
//             <td>
//               <button onClick={() => onRemove(item)} className="btn btn-danger">
//                 Remove
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default CartTable;

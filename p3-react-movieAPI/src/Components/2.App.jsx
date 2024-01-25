// import React, { useEffect, useState } from "react";
// import { db, fs } from './firebase';
// import ProductCard from "./ProductCard";
// import CartTable from "./CartTable";

// const App: React.FC = () => {
//   const [cart, setCart] = useState<any[]>([]);
//   const [products, setProducts] = useState<any[]>(/* ... your product data ... */);

//   useEffect(() => {
//     const unsubscribe = db.collection("cart")
//       .onSnapshot((querySnapshot) => {
//         var p: any[] = [];
//         querySnapshot.forEach((doc) => {
//           p.push(doc.data());
//           products.map((i) => {
//             if (i.id === doc.data().id) {
//               i.cart = true;
//             }
//           });
//         });

//         setCart(p);
//       });

//     return () => unsubscribe(); // Cleanup the subscription on component unmount
//   }, [products]);

//   const addtocart = (item: any) => {
//     products.map((i) => {
//       if (i.id === item.id) {
//         i.cart = true;
//       }
//     });

//     db.collection('cart').doc(`${item.id}`).set(item, { merge: true });
//   };

//   const removetocart = (item: any) => {
//     products.map((i) => {
//       if (i.id === item.id) {
//         i.cart = false;
//       }
//     });
//     db.collection('cart').doc(`${item.id}`).delete();
//   };

//   const increase = (item: any) => {
//     db.collection('cart').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(1));
//   };

//   const decrease = (item: any) => {
//     db.collection('cart').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(-1));
//   };

//   const total = (): number => {
//     let x = 0;
//     cart.map((i) => {
//       x += i.price * i.quantity;
//     });
//     return x;
//   };

//   return (
//     <div className='container mt-2'>
//       <div className='row justify-content-center'>
//         {products.map((item) => (
//           <ProductCard key={item.id} product={item} onAddToCart={addtocart} />
//         ))}
//       </div>

//       <div className='row mt-3'>
//         <CartTable cart={cart} onRemove={removetocart} onIncrease={increase} onDecrease={decrease} />
//       </div>

//       <div className="row">
//         <div className="col text-center">
//           <h4>TOTAL: {total()}</h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

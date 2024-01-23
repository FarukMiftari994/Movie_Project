import { useEffect, useState } from "react";
import { db, fs } from './firebase';

interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
  cart: boolean;
  quantity: number;
}

function App(): JSX.Element {
  const [cart, setCart] = useState<Product[]>([]);
  

  useEffect(() => {
    const unsubscribe = db.collection("cart")
      .onSnapshot((querySnapshot) => {
        var p: Product[] = [];
        querySnapshot.forEach((doc) => {
          p.push(doc.data() as Product);
          products.map((i) => {
            if (i.id === doc.data().id) {
              i.cart = true;
            }
          });
        });

        setCart(p);
      });

    return () => unsubscribe(); // Cleanup the subscription on component unmount
  }, [products]); // Add products as a dependency to useEffect

  function addtocart(item: Product): void {
    products.map((i) => {
      if (i.id === item.id) {
        i.cart = true;
      }
    });

    db.collection('cart').doc(`${item.id}`).set(item, { merge: true });
  }

  function removetocart(item: Product): void {
    products.map((i) => {
      if (i.id === item.id) {
        i.cart = false;
      }
    });
    db.collection('cart').doc(`${item.id}`).delete();
  }

  function increase(item: Product): void {
    db.collection('cart').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(1));
  }

  function decrease(item: Product): void {
    db.collection('cart').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(-1));
  }

  function total(): number {
    let x = 0;
    cart.map((i) => {
      x += i.price * i.quantity;
    });
    return x;
  }

  return (
    

      <div className='row mt-3'>
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((i, index) => (
              <tr key={i.id}>
                <th scope="row">{index + 1}</th>
                <th scope="row">
                  <img src={i.url} style={{ width: '4rem' }} alt={i.name} />
                </th>
                <td>{i.name}</td>
                <td>{i.price}</td>
                <td>
                  <button onClick={() => decrease(i)} className="btn btn-primary btn-sm">
                    -
                  </button>
                  {i.quantity}
                  <button onClick={() => increase(i)} className="btn btn-primary btn-sm" size="sm">
                    +
                  </button>
                </td>
                <td>
                  <button onClick={() => removetocart(i)} className="btn btn-danger">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col text-center">
          <h4>TOTAL: {total()}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
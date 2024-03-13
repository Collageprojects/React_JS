import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const h1 = <h1>Hello World</h1>;

function Card(props) {
  const { key, title, brand, description, thumbnail, price } = props;
  // console.log(key);
  return (
    <div className="card">
      <img src={thumbnail}></img>
      <div>
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>{description}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((products) => {
          return (
            <Card
              return
              key={products.id}
              title={products.title}
              brand={products.brand}
              description={products.description}
              thumbnail={products.thumbnail}
              price={products.price}
            />
          );
        })}
      </div>
    );
  });
const root = ReactDOM.createRoot(document.getElementById("root"));

// const container = [Card(1), Card(2), Card(3), Card(4), Card(5)];

// Card(
//   products.id,
//   products.title,
//   products.brand,
//   products.description,
//   products.thumbnail,
//   products.price
// );

// console.log("hello world!!!");

// root.render({
//   $$typeof: Symbol.for('react.element'),                       // Method ==1
//   type: Card,
//   ref: null,
//   props: {
//     title : "Redmi 12 5G",
//     brand: 'MI',
//     thumbnail : 'https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/oneplus11-mobile-phone.jpg',
//     price : '12999',
//     key: '12'
//   }
// })

// root.render(                                  // Method ==2
//   React.createElement(Card, {
//     title : "Redmi 12 5G",
//     brand: 'MI',
//     thumbnail : 'https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/oneplus11-mobile-phone.jpg',
//     price : '12999',
//     // key: '12'
//   })
// )

// root.render(                 // Method ==3
//   <Card
//     title="Redmi 12 5G"
//     thumbnail="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/oneplus11-mobile-phone.jpg"
//     price="12999"
//     brand="MI"
//   />
// );

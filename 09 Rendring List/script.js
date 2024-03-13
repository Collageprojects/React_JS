import ReactDOM from "react-dom/client";
import "./style.css";

const h1 = <h1>Hello World</h1>;

function Card(key, title, brand, description, thumbnail, price) {
  console.log(key);
  return (
    <div className="card" key={key}>
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

const container = [Card(1), Card(2), Card(3), Card(4), Card(5)];

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const container2 = data.products.map((products) => {
      return Card(
        products.id,
        products.title,
        products.brand,
        products.description,
        products.thumbnail,
        products.price
      );
    });
    console.log(container2);
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<div className="container">{container2}</div>);
  });

// console.log("hello world!!!");

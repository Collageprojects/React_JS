const h2 = React.createElement("div", { className: "subheading" }, [
  React.createElement("section", { key: 1 }, [
    React.createElement("p", { key: 1 }, "Hello kem cho"),
    React.createElement("img", {
      key: 2,
      style: { width: "200px" },
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png",
    }),
  ]),
  React.createElement("section", { key: 2 }, [
    React.createElement("form", { key: 1 }, ),
      React.createElement('div', {key:2}), [
        React.createElement("label", { key: 2, htmlFor: 'username'}, 'Username'),
        React.createElement("input", { key: 3, id: 'username' }),

        React.createElement("label", { key: 4, htmlFor: 'password'}, 'password'),
        React.createElement("input", { key: 5, id: 'password', type: 'password' }),
      ]
  ]),
]);

// const user = 'sandip'

// const h2 = <h2>hello {user} </h2>
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(h2);

/*
 <div id="parent">
    <div id="child">
        <h1></h1>
         <h1></h1>
    </div>
    <div id="child2">
          <h1></h1>
    </div>
 </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hi"),
    React.createElement("h1", {}, "there"),
  ]),
  React.createElement("div", { id: "child2" }, "You are the Boss"),
]);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World Form React CDN"
); //object
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

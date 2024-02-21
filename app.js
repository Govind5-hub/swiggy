 import React from "react"
 import ReactDOM from "react-dom/client"

// React Element
const Title = ()=> (
<h1 id="heading" className="head">Master React</h1>
)

const HeadingComponent  = () => (
    <div id="container">
        {Title()}
        {console.log("swadodmsfomffmedjwemfifm")}
     <h1>Master FrontEnd</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

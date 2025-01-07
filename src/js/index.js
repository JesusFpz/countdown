//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./home.jsx";

import Countdown from "./component/countdown.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('app'));

setInterval(() => {
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    counter++;
    
    root.render(
        <Countdown letOne={one} letTwo={two} letThree={three} letFour={four} />
    );
}, 1000);

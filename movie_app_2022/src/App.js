import React from "react";
import {BrowserRouter, HashRouter, Route} from "react-router-dom"
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App(){
    return (
        <HashRouter>
            <Navigation/>
            {/* <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie-detail" component={Detail} /> */}
            <Route path="/" exact={true}><Home/></Route>
            <Route path="/about"><About/></Route>
            <Route path="/movie/:id"><Detail/></Route>
        </HashRouter>
    )
    //HashRouter가 github page에 업로드 하기 쉬움.
}

export default App;
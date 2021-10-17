import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Price from './Price';

function App() {
    return(
        <><div className="wrap">
        <Header />
            <Main />
            <Main2 />
            <Main3 />
            <Price />
            <Footer />
            </div></>
    )
}

export default App;
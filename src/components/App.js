
import React from "react";

import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div >
        {/* Do not remove the main div */}
        <Header />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default App

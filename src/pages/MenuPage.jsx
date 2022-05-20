import React from "react";
import Helmet from "react-helmet";

import Accordeon from "../components/accordeon/Accordeon";
import Footer from "../components/footer/Footer";
import TitleBlock from "../components/titleblock/TitleBlock";


const MenuPage = () => {
  
  return (
    <div>
      <Helmet>
            <meta
                name="description"
                content="Меню кав'ярні"
            />
            <title>Меню кав'ярні</title>
        </Helmet>        
        <TitleBlock/>
        <Accordeon/>
        <Footer/> 
    </div>
  );
};

export default MenuPage;
import React from "react";

import AboutBlock from "../components/aboutblock/AboutBlock";
import Basket from "../components/basket/Basket";
//import BtnScrollUp from "../components/btnscrollup/BtnScrollUp";
import CoffeeList from "../components/cataloglist/coffeelist/CoffeeList";
import TeaList from "../components/cataloglist/tealist/TeaList";
import NavDrawer from "../components/drawer/Drawer";
import FirstBlock  from "../components/firstblock/FirstBlock";
import Footer from "../components/footer/Footer";
import InfoBlock from "../components/infoblock/InfoBlock";


const MainPage = () => {
  
  return (
    <div>
      <header>                
          <NavDrawer/>
      </header>
          <FirstBlock/> 
          <InfoBlock/>
          <CoffeeList/>
          <TeaList/>
          <AboutBlock/>
          {/* <BtnScrollUp/>           */}
          <Basket/>
          <Footer/> 
    </div>
  );
};

export default MainPage;

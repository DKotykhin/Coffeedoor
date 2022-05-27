import React from "react";
import Helmet from "react-helmet";

import AboutBlock from "../components/aboutblock/AboutBlock";
import Basket from "../components/basket/Basket";
//import BtnScrollUp from "../components/btnscrollup/BtnScrollUp";
import CoffeeList from "../components/cataloglist/goodslists/CoffeeList";
import TeaList from "../components/cataloglist/goodslists/TeaList";
import NavDrawer from "../components/drawer/Drawer";
import FirstBlock from "../components/firstblock/FirstBlock";
import InfoBlock from "../components/infoblock/InfoBlock";


const MainPage = () => {
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="CoffeeDOOR – це кавовий бренд, який по'єднує в собі свіжообсмажену каву рівня Speciality, кращі кавові технології, стильний дизайнерський інтер'єр, швидкий і дружній сервіс"
                />
                <title>
                    CoffeeDoor - кав'ярня та магазин свіжообсмаженої кави
                </title>
            </Helmet>
            <header>
                <NavDrawer />
            </header>
            <FirstBlock />
            <InfoBlock />            
            <CoffeeList />
            <TeaList />
            <AboutBlock />
            {/* <BtnScrollUp/>           */}
            <Basket />
        </div>
    );
};

export default MainPage;

import React from "react";
import Helmet from "react-helmet";

import ThanksBlock from "components/thanks/ThanksBlock";

const ThanksPage = () => {
    return (
        <div>
            <Helmet>
                <meta name="description" content="Дякуємо за замовлення" />
                <title>Дякуємо за замовлення</title>
            </Helmet>            
            <ThanksBlock/>
        </div>
    );
};

export default ThanksPage;
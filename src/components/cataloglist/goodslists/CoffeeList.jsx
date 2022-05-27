import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Container, Typography } from "@mui/material";

import CatalogItem from "../CatalogItem";
import coffeeitems from "../../../api/catalog/goodsitems/coffeelistitem.json";

import "swiper/css";
import "swiper/css/navigation";
import "../stylelist.scss";

const CoffeeList = () => {
    return (
        <Container id="coffee_list" className="catalog_list" maxWidth="xl">
            <Typography className="catalog_list_title">
                КАВА В ЗЕРНАХ
            </Typography>
            <Typography className="catalog_list_subtitle">
                Свіжообсмажена кава ТМ CoffeeDOOR
            </Typography>                       
            <Swiper
                className="slider"
                slidesPerView={1.3}
                spaceBetween={10}                
                breakpoints={{                 
                    "850": {
                        slidesPerView: 2                        
                    },
                    "1200": {
                        slidesPerView: 3                        
                    }                    
                }}
                rewind={true}
                navigation={true}                
                modules={[Navigation, Pagination]}
            >
                {coffeeitems.coffeeitems.map((item) => (
                    <SwiperSlide key={item.name} >
                        <CatalogItem {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>            
        </Container>
    );
};

export default CoffeeList;





// import { Container, Typography, Box } from "@mui/material";

// import CatalogItem from "../CatalogItem";
// import  coffeeitems from '../../../api/catalog/goodsitems/coffeelistitem.json';

// import '../stylelist.scss';

// const CoffeeList = () => {      

//     return (
//         <Container id='coffee_list' className="catalog_list" maxWidth="lg">
//             <Typography className="catalog_list_title">КАВА В ЗЕРНАХ</Typography>
//             <Typography className="catalog_list_subtitle">
//                 Свіжообсмажена кава ТМ CoffeeDOOR
//             </Typography>
//             <Box className="catalog_list_box">
//             {
//                 coffeeitems.coffeeitems.map((item) => (
//                     <CatalogItem key={item.name} {...item}/>
//                 ))
//             }
//             </Box>            
//         </Container>
//     )
// }

// export default CoffeeList;

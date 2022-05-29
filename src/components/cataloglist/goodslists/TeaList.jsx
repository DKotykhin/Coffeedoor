import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Container, Typography } from "@mui/material";

import CatalogItem from "../CatalogItem";
import  teaitems from '../../../api/catalog/goodsitems/tealistitem.json';

import "swiper/css";
import "swiper/css/navigation";
import "../stylelist.scss";

const TeaList = () => {      

    return (
        <Container id='tea_list' className="catalog_list" maxWidth="xl">
            <Typography className="catalog_list_title">листовий чай</Typography>
            <Typography className="catalog_list_subtitle">
                Натуральні чорні, зелені, трав'яні та фруктові чаї німецької 
                торгівельної марки SOHO. Виготовлені без додавання 
                барвників, штучних ароматизаторів, консервантів
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
                // rewind={true}
                navigation={true}                
                modules={[Navigation, Pagination]}
            >
                {teaitems.teaitems.map((item) => (
                    <SwiperSlide key={item.name} >
                        <CatalogItem {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>            
        </Container>
    )
}

export default TeaList;



// import { Container, Typography, Box } from "@mui/material";

// import CatalogItem from "../CatalogItem";
// import  teaitems from '../../../api/catalog/goodsitems/tealistitem.json';

// import '../stylelist.scss';

// const TeaList = () => {      

//     return (
//         <Container id='tea_list' className="catalog_list" maxWidth="lg">
//             <Typography className="catalog_list_title">листовий чай</Typography>
//             <Typography className="catalog_list_subtitle">
//                 Натуральні чорні, зелені, трав'яні та фруктові чаї німецької 
//                 торгівельної марки SOHO. Виготовлені без додавання 
//                 барвників, штучних ароматизаторів, консервантів
//             </Typography>
//             <Box className="catalog_list_box">
//             {
//                 teaitems.teaitems.map((item) => (
//                     <CatalogItem key={item.name} {...item}/>
//                 ))
//             }
//             </Box>            
//         </Container>
//     )
// }

// export default TeaList;
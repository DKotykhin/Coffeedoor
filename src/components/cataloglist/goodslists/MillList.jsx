import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Container, Typography } from "@mui/material";

import CatalogItem from "../CatalogItem";
import  millitems from 'api/catalog/goodsitems/milllistitem.json';

import "swiper/css";
import "swiper/css/navigation";
import "../stylelist.scss";

const MillList = () => {      

    return (
        <Container id='mill_list' className="catalog_list" maxWidth="xl">
            <Typography className="catalog_list_title">КАВОМОЛКИ</Typography>
            <Typography className="catalog_list_subtitle">
                Якщо треба змолоти каву вдома
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
                {millitems.millitems.map((item) => (
                    <SwiperSlide key={item.name} >
                        <CatalogItem {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>            
        </Container>
    )
}

export default MillList;
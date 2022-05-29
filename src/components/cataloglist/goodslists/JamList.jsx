import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Container, Typography } from "@mui/material";

import CatalogItem from "../CatalogItem";
import  jamitems from '../../../api/catalog/goodsitems/jamlistitem.json';

import "swiper/css";
import "swiper/css/navigation";
import "../stylelist.scss";

const JamList = () => {      

    return (
        <Container id='jam_list' className="catalog_list" maxWidth="xl">
            <Typography className="catalog_list_title">ВАРЕННЯ ARTVILLAGE</Typography>
            <Typography className="catalog_list_subtitle">
                Виготовлено виключно з натуральної сировини
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
                {jamitems.jamitems.map((item) => (
                    <SwiperSlide key={item.name} >
                        <CatalogItem {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>            
        </Container>
    )
}

export default JamList;
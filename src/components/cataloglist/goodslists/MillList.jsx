import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Container } from "@mui/material";

import CatalogItem from "../CatalogItem";
import millitems from "api/catalog/goodsitems/milllistitem.json";
import ListHeader from "../ListHeader";

import "swiper/css";
import "swiper/css/navigation";
import "../stylelist.scss";

const MillList = () => {
    return (
        <Container id="mill_list" className="catalog_list" maxWidth="xl">
            <ListHeader
                title="КАВОМОЛКИ"
                subtitle="Якщо треба змолоти каву вдома"
            />
            <Swiper
                className="slider"
                slidesPerView={1.3}
                spaceBetween={10}
                breakpoints={{
                    850: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}
                // rewind={true}
                threshold={20}
                navigation={true}
                modules={[Navigation, Pagination]}
            >
                {millitems.millitems.map((item) => (
                    <SwiperSlide key={item.name}>
                        <CatalogItem {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default MillList;

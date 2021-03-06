import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Container } from "@mui/material";

import CatalogItem from "../CatalogItem";
import coffeeitems from "api/catalog/goodsitems/coffeelistitem.json";
import ListHeader from "../ListHeader";

import "swiper/css";
import "swiper/css/navigation";
import "../stylelist.scss";

const CoffeeList = () => {
    return (
        <Container id="coffee_list" className="catalog_list" maxWidth="xl">
            <ListHeader
                title="КАВА В ЗЕРНАХ"
                subtitle="Свіжообсмажена кава ТМ CoffeeDOOR"
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
                //rewind={true}
                threshold={20}
                navigation={true}
                modules={[Navigation]}
            >
                {coffeeitems.coffeeitems.map((item) => (
                    <SwiperSlide key={item.name}>
                        <CatalogItem {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default CoffeeList;

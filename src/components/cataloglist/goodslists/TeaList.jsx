import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { motion, AnimatePresence } from "framer-motion";
import { Container, ListItemText, ListItemIcon, ListItem } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

import CatalogItem from "../CatalogItem";
import teaitems from "api/catalog/goodsitems/tealistitem.json";
import SelectFilterItems from "components/filters/SelectFilterItems";
import ListHeader from "../ListHeader";

import "swiper/css";
import "swiper/css/navigation";
import "../stylelist.scss";

const TeaList = () => {
    const [showSelector, setShowSelector] = useState(false);
    const [teaList, setTeaList] = useState([...teaitems.teaitems]);

    const filtersOpen = () => {
        setShowSelector(!showSelector);
        setTeaList([...teaitems.teaitems]);
    };

    const onSelectSort = (sort) => {
        let data = [...teaitems.teaitems];
        if (sort) {
            data = teaitems.teaitems.filter((item) => item.sort[1] === sort);
        }
        setTeaList(data);
    };

    return (
        <Container id="tea_list" className="catalog_list" maxWidth="xl">
            <ListHeader
                title="листовий чай"
                subtitle="Натуральні чорні, зелені, трав'яні та фруктові чаї німецької
                торгівельної марки SOHO. Виготовлені без додавання барвників,
                штучних ароматизаторів, консервантів"
            />
            <ListItem>
                <ListItemIcon>
                    <FilterAltOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                    onClick={() => filtersOpen()}
                    sx={{ cursor: "pointer" }}
                >
                    Фільтри
                </ListItemText>
            </ListItem>
            {showSelector && (
                <SelectFilterItems
                    onSelect={onSelectSort}
                    quantity={teaList.length}
                />
            )}
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
                <AnimatePresence initial={false}>
                    {teaList?.map((item) => (
                        <SwiperSlide key={item.name}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                // transition={{duration: 0.5}}
                            >
                                <CatalogItem {...item} />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </AnimatePresence>
            </Swiper>
        </Container>
    );
};

export default TeaList;

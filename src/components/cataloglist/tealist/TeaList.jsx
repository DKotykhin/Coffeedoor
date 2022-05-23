import { Container, Typography, Box } from "@mui/material";

import CatalogItem from "../CatalogItem";
import  teaitems from '../tealist/tealistitem.json';

import '../stylelist.scss';

const TeaList = () => {      

    return (
        <Container id='tea_list' className="catalog_list" maxWidth="lg">
            <Typography className="catalog_list_title">листовий чай</Typography>
            <Typography className="catalog_list_subtitle">
                Натуральні чорні, зелені, трав'яні та фруктові чаї німецької 
                торгівельної марки SOHO. Виготовлені без додавання 
                барвників, штучних ароматизаторів, консервантів
            </Typography>
            <Box className="catalog_list_box">
            {
                teaitems.teaitems.map((item) => (
                    <CatalogItem key={item.name} {...item}/>
                ))
            }
            </Box>            
        </Container>
    )
}

export default TeaList;
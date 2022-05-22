import * as React from "react";

import { Container, Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { ListItem, ListItemText, List, ListItemIcon } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DoneIcon from "@mui/icons-material/Done";

import "./aboutblock.scss";

const srcset = (image, width, height, rows = 1, cols = 1) => {
    return {
        src: `${image}?w=${width * cols}&h=${
            height * rows
        }&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${
            height * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function AboutBlock() {
    const theme = createTheme({
        typography: {
            fontSize: 18,
            fontWeightRegular: 300,
        },
    });

    const benefitsItem = [
        "Швидкий і якісний сервіс",
        "Висока якість",
        "Різноманітність кави Speciality",
        "Можливість придбати чай, каву в зернах і аксесуари для приготування кави вдома",
        "Стильний і комфортний дизайн інтер'єру",
        "Професійний підхід, де все має значення",
    ];

    return (
        <Container id="about_block" maxWidth="lg">
            <Typography className="about_title">ПРО НАС</Typography>
            {/* <Box sx={{ height: 800, overflowY: "scroll" }}>
                <ImageList variant="masonry" cols={2} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=348&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=348&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box> */}
            <ImageList
                sx={{
                    height: 800,
                    transform: "translateZ(0)",
                }}
                gap={10}
            >
                {itemData.map((item) => {
                    const cols = item.size ? 2 : 1;
                    const rows = item.size ? 2 : 1;
                    return (
                        <ImageListItem key={item.img} cols={cols} rows={rows}>
                            <img
                                {...srcset(item.img, 250, 200, rows, cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    );
                })}
            </ImageList>
            <Box maxWidth="md" className="about_box">
                <Typography className="about_slogan">
                    Our coffee – Everything matters
                </Typography>
                <ThemeProvider theme={theme}>
                    <Typography className="about_descr about_font">
                        Особливість кав'ярень CoffeeDOOR Brewbar & Coffeeshop в
                        цілісному підході, де все має значення. При приготуванні
                        кави кожна деталь має значення - про це свідчить слоган
                        кав'ярні, який переплітається з однією з основних
                        цінностей бренда, - "Our coffee - Everything matters",
                        що ми успішно підтверджуємо. Основа нашого бізнесу в
                        системному підході, в детальності описаних
                        бізнес-процесів, в дистрибуції кращого кавового
                        обладнання, обсмажуванні кавового зерна рівня
                        Speciality, в унікальній системі навчання бариста і
                        системі контролю якості.
                    </Typography>
                    <Typography className="about_font">Ми - це:</Typography>
                    <List className="list_item">
                        {benefitsItem.map((item, i) => {
                            return (
                                <ListItem key={i} disablePadding>
                                    <ListItemIcon>
                                        <DoneIcon />
                                    </ListItemIcon>
                                    <ListItemText>{item}</ListItemText>
                                </ListItem>
                            );
                        })}
                    </List>
                    <Typography className="about_descr about_font">
                        У наших кав'ярнях ви завжди відчуєте атмосферу радості і
                        доброти. Ми цінуємо смак і час наших гостей. Ми знаємо,
                        як звуть постійного гостя, його звички і улюблений
                        напій.
                    </Typography>
                    <br />
                </ThemeProvider>               
            </Box>
        </Container>
    );
}

const itemData = [
    {
        img: require("../../images/about/Coffeedoor_10.JPG"),
        title: "Coffee",
        size: true,
    },
    {
        img: require("../../images/about/Coffeedoor_11.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_12.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_13.JPG"),
        title: "Coffee",
        size: true,
    },
    {
        img: require("../../images/about/Coffeedoor_14.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_15.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_16.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_17.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_18.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_19.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_20.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_21.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_22.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_23.JPG"),
        title: "Coffee table",
    },
    {
        img: require("../../images/about/Coffeedoor_24.JPG"),
        title: "Coffee table",
    },
    {
        img: require("../../images/about/Coffeedoor_25.JPG"),
        title: "Coffee table",
    },
];

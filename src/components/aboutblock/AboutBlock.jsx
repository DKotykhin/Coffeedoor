import * as React from "react";

import {
    Container,
    Box,
    ImageList,
    ImageListItem,
    Typography,
    ListItem,
    ListItemText,
    List,
    ListItemIcon,
} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DoneIcon from "@mui/icons-material/Done";

import "./aboutblock.scss";

export default function AboutBlock() {

  const theme = createTheme({
    typography: {      
      fontSize: 18,
      fontWeightRegular: 300,     
    }    
  });

  const benefitsItem = [
    "Швидкий і якісний сервіс",
    "Висока якість",
    "Різноманітність кави Speciality",
    "Можливість придбати чай, каву в зернах і аксесуари для приготування кави вдома",
    "Стильний і комфортний дизайн інтер'єру",
    "Професійний підхід, де все має значення"
  ]
  
    return (
        <Container id="about_block" maxWidth="lg">
            <Typography className="about_title">ПРО НАС</Typography>
            <Box sx={{ height: 450, overflowY: "scroll" }}>
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
            </Box>
            <Box maxWidth="md" className='about_box'>
                <Typography className="about_slogan">
                    Our coffee – Everything matters
                </Typography>
                <ThemeProvider theme={theme}>
                    <Typography className="about_descr about_font">
                        Особливість кав'ярень CoffeeDOOR Brewbar & Coffeeshop в
                        цілісному підході, де все має значення. При приготуванні
                        кави кожна деталь має значення - про це свідчить слоган
                        кав'ярні, який переплітається з однією з основних цінностей
                        бренда, - "Our coffee - Everything matters", що ми успішно
                        підтверджуємо. Основа нашого бізнесу в системному підході, в
                        детальності описаних бізнес-процесів, в дистрибуції кращого
                        кавового обладнання, обсмажуванні кавового зерна рівня
                        Speciality, в унікальній системі навчання бариста і системі
                        контролю якості.
                    </Typography>
                    <Typography className="about_font">Ми - це:</Typography>
                    <List className="list_item">                    
                        {
                            benefitsItem.map((item, i) => {
                                return (                                    
                                    <ListItem key={i}  disablePadding>
                                        <ListItemIcon>
                                            <DoneIcon/>
                                        </ListItemIcon>
                                        <ListItemText>{item}</ListItemText>
                                    </ListItem>                                    
                                )
                            })
                        }                        
                    </List>
                    <Typography  className="about_descr about_font">
                        У наших кав'ярнях ви завжди відчуєте атмосферу радості і
                        доброти. Ми цінуємо смак і час наших гостей. Ми знаємо, як
                        звуть постійного гостя, його звички і улюблений напій.
                    </Typography><br/>
                </ThemeProvider>
            </Box>
        </Container>
    );
}

const itemData = [
    {
        img: require("../../images/about/Coffeedoor_03.JPG"),
        title: "Coffee",
        size: true,
    },
    {
        img: require("../../images/about/Coffeedoor_04.JPG"),
        title: "Coffee",
        size: true,
    },
    {
        img: require("../../images/about/Coffeedoor_05.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_06.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_07.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_08.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_21.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_59.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_60.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_61.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_64.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_65.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_66.JPG"),
        title: "Coffee",
    },
    {
        img: require("../../images/about/Coffeedoor_67.JPG"),
        title: "Coffee table",
    },
    {
        img: require("../../images/about/Coffeedoor_68.JPG"),
        title: "Coffee table",
    },
    {
        img: require("../../images/about/Coffeedoor_69.JPG"),
        title: "Coffee table",
    },
];

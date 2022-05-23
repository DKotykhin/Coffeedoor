import { Container, Typography, Box } from "@mui/material";

import CatalogItem from "../CatalogItem";
import  coffeeitems from '../coffeelist/coffeelistitem.json';

import '../stylelist.scss';

const CoffeeList = () => {      

    return (
        <Container id='coffee_list' className="catalog_list" maxWidth="lg">
            <Typography className="catalog_list_title">КАВА В ЗЕРНАХ</Typography>
            <Typography className="catalog_list_subtitle">
                Свіжообсмажена кава ТМ CoffeeDOOR
            </Typography>
            <Box className="catalog_list_box">
            {
                coffeeitems.coffeeitems.map((item) => (
                    <CatalogItem key={item.name} {...item}/>
                ))
            }
            </Box>            
        </Container>
    )
}

export default CoffeeList;






// import { useDispatch } from "react-redux";

// import { Container, Typography, Button, Box } from "@mui/material";
// import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
// import { shopItems } from "./CatalogListSlice";
// import  coffeeitems from './coffeelistitem.json';

// import './stylelist.scss';

// const CoffeeList = () => {    
//     const dispatch = useDispatch();

//     const onBasketButton = (basketItem) => {
//         dispatch(shopItems(basketItem));       
//     }    

//     return (
//         <Container id='coffee_list' className="coffee_list" maxWidth="lg">
//             <Typography className="coffee_list_title">КАВА В ЗЕРНАХ</Typography>
//             <Typography className="coffee_list_subtitle">
//                 Свіжообсмажена кава ТМ CoffeeDOOR
//             </Typography>
//             <Box className="coffee_list_box">
//             {
//                 coffeeitems.coffeeitems.map((item, i) => {
//                     return (
//                         <Card sx={{ maxWidth: 345 }} key={i} className="coffee_list_card">
//                             <CardMedia
//                                 component="img"
//                                 height="345"
//                                 image={require(`../../images/catalog/coffee/${item.name}.JPG`)}
//                                 alt={item.name}
//                             />
//                             <CardContent>
//                                 <Typography className="coffee_list_card_name">
//                                     {item.name}, {item.weight}
//                                 </Typography>
//                                 <Typography className="coffee_list_card_price">
//                                     {item.price}
//                                 </Typography>
//                                 <Typography className="coffee_list_card_desc" variant="body2" color="text.secondary">
//                                     {item.description}
//                                 </Typography>
//                             </CardContent>
//                             <CardActions className="coffee_list_buttons">
//                                 <Button className="more_button">Детальніше</Button>
//                                 <Button className="basket_button" 
//                                     onClick={() => onBasketButton({
//                                         name: item.name, 
//                                         price: item.price,
//                                         weight: item.weight 
//                                         })}
//                                     >
//                                     В кошик
//                                 </Button>
//                             </CardActions>
//                         </Card> 
//                     )
//                 })
//             }
//             </Box>            
//         </Container>
//     )
// }

// export default CoffeeList;
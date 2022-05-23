import { useDispatch } from "react-redux";

import { Typography, Button } from "@mui/material";
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { shopItems } from "./CatalogListSlice";

import './stylelist.scss';

const CatalogItem = (props) => {    
    const { title, name, description, price, weight, img } = props;

    const dispatch = useDispatch();
    const onBasketButton = (basketItem) => {
        dispatch(shopItems(basketItem));       
    }

    return (                   
        <Card sx={{ maxWidth: 345 }} className="catalog_list_card">
            <CardMedia
                component="img"
                height="345"
                image={require(`../../images/catalog/${img}`)}
                alt={name}
            />
            <CardContent>
                <Typography className="catalog_list_card_name">
                    {title} {name}, {weight}
                </Typography>
                <Typography className="catalog_list_card_price">
                    {price}
                </Typography>
                <Typography className="catalog_list_card_desc" variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions className="catalog_list_buttons">
                <Button className="more_button">Детальніше</Button>
                <Button className="basket_button" 
                    onClick={() => onBasketButton({
                        title,
                        name, 
                        price,
                        weight 
                        })}
                    >
                    В кошик
                </Button>
            </CardActions>
        </Card>       
    )
}

export default CatalogItem;
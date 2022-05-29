import { useDispatch } from "react-redux";

import { Typography, Button } from "@mui/material";
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { basketAddItems } from "../basket/BasketListSlice";
import { itemAddItems } from "../itemlist/ItemListSlice";

import './stylelist.scss';

const CatalogItem = (props) => {    
    const { title, name, description, price, weight, img } = props;

    const dispatch = useDispatch();
    const onBasketButton = (basketItem) => {
        dispatch(basketAddItems(basketItem));       
    }
    const onItemButton = (ItemItem) => {        
        dispatch(itemAddItems(ItemItem));       
    }

    return (                   
        <Card sx={{ maxWidth: 345 }} className="catalog_list_card">
            <CardMedia
                component="img"
                height="345"
                image={require(`../../api/catalog/goodsimages/${img}`)}
                alt={name}
            />
            <CardContent>
                <Typography className="catalog_list_card_name">
                   {title} {name}
                </Typography>
                <Typography className="catalog_list_card_price">
                   {price}{' грн'}
                </Typography>
                <Typography className="catalog_list_card_desc" variant="body2" color="text.secondary">
                    {description}
                </Typography>
                { weight && 
                    <Typography variant="body2" color="text.secondary">
                        {'Вага: '}{weight}
                    </Typography>
                }
            </CardContent>
            <CardActions className="catalog_list_buttons">
                <Button className="more_button"
                    onClick={() => onItemButton(props)}
                    >
                    Детальніше</Button>
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
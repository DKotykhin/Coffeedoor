import { Container, Typography, Button } from "@mui/material";
import { Card, CardActions, CardContent, CardMedia } from '@mui/material'

import './stylelist.scss';
import  coffeeitems from './coffeelistitem.json';

const CoffeeList = () => {

    return (
        <Container id='coffee_list' className="coffee_list" maxWidth="lg">
            <Typography className="coffee_list_title">КАВА В ЗЕРНАХ</Typography>
            <Typography className="coffee_list_subtitle">
                Свіжообсмажена кава ТМ CoffeeDOOR
            </Typography>
            {
                coffeeitems.coffeeitems.map((item, i) => {
                    return (
                        <Card sx={{ maxWidth: 345 }} key={i} className="coffee_list_card">
                            <CardMedia
                                component="img"
                                height="345"
                                image={require(`../../images/catalog/coffee/${item.name}.JPG`)}
                                alt="Brazil Cerrado"
                            />
                            <CardContent>
                                <Typography className="coffee_list_card_name">
                                    {item.name}, {item.weight}
                                </Typography>
                                <Typography className="coffee_list_card_price">
                                    {item.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions className="coffee_list_buttons">
                                <Button className="more_button">Детальніше</Button>
                                <Button className="basket_button" onClick={() => console.log(item.name)}>В кошик</Button>
                            </CardActions>
                        </Card> 
                    )
                })
            }
            
        </Container>
    )
}

export default CoffeeList;
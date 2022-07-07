import { useTranslation } from "react-i18next";
import {
    Container,
    Typography,
    ListItem,
    ListItemText,
    Link,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import "../../utils/i18next";
import "./infoblock.scss";

const InfoBlock = () => {
    const { t } = useTranslation();

    return (
        <Container maxWidth="md" className="infoblock">
            <Typography className="infoblock_title" component="h1">
                {/* {`Кав'ярня та магазин свіжообсмаженої кави CoffeeDoor`} */}
                {t("infoblock.title")}
            </Typography>
            <Typography className="infoblock_subtitle" component="h2">
                {/* {`CoffeeDOOR – це кавовий бренд, який по'єднує в собі
                свіжообсмажену каву рівня Speciality, кращі кавові технології,
                стильний дизайнерський інтер'єр, швидкий і дружній сервіс`} */}
                {t("infoblock.subtitle")}
            </Typography>
            <ListItem>
                <AccessTimeIcon className="infoblock_icon" />
                <ListItemText className="infoblock_items">
                    <Typography className="infoblock_item_1">
                        {`Режим роботи кав'ярні`}
                    </Typography>
                    <Typography className="infoblock_item_2">
                        {`Пн-Пт: 8.00 - 22.00`}
                    </Typography>
                    <Typography className="infoblock_item_2">
                        {`Сб-Вс: 10.00 - 22.00`}
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem>
                <LocalShippingOutlinedIcon className="infoblock_icon" />
                <ListItemText className="infoblock_items">
                    <Typography className="infoblock_item_1">
                        {`Умови доставки`}
                    </Typography>
                    <Typography className="infoblock_item_2">
                        {`В межах міста Харків доставка здійснюється на таксі за
                        тарифами перевізника, за межами міста - Новою поштою за
                        тарифами компанії. Замовлення також можна забрати в
                        кав'ярні`}
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem>
                <LocationOnOutlinedIcon className="infoblock_icon" />
                <ListItemText className="infoblock_items">
                    <Typography className="infoblock_item_1">
                        {`Контакти`}
                    </Typography>
                    <Typography className="infoblock_item_2">
                        {`м.Харків, вул. Пушкінська, 50/52`}
                    </Typography>
                    <Link className="infoblock_item_3" href="tel:80997609883">
                        {`Телефон: +38 099 760 98 83`}
                    </Link>
                </ListItemText>
            </ListItem>
        </Container>
    );
};

export default InfoBlock;

import { Link } from "react-router-dom";

import { Container, Typography } from "@mui/material";
import img from "./logo coffe-door-01.jpg";

import "./titleblock.scss";

const TitleBlock = () => {
    return (
        <>
            <Container maxWidth="md" className="title_block">
                <Link to="/">                    
                    <img src={img} style={{ width: 600 }} alt="logo" />
                </Link>
                <Typography className="titleblock_name" component="h2">
                    Меню кав'ярні
                </Typography>
                <Typography className="titleblock_desc" component="h3">
                    ми пропонуємо напої з свіжообсмаженої кави
                </Typography>
            </Container>
        </>
    );
};

export default TitleBlock;

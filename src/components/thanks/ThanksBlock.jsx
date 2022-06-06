import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";

import img from "../titleblock/Coffeedoor_logo.jpg";
import "./thanksblock.scss";

const ThanksBlock = () => {
    return (
        <Container maxWidth="md" className="thanks_block">
            <Link to="/">
                <img src={img} alt="logo" />
            </Link>
            <Typography component="h1" className="thanks_title">
                Дякуємо за замовлення!
            </Typography>
            <Typography component="h2" className="thanks_subtitle">
                Ми зателефонуємо найближчим часом
            </Typography>
            <Link to="/" className="thanks_link">
               Повернутися на головну
            </Link>
        </Container>
    );
};

export default ThanksBlock;

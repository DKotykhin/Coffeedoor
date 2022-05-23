import React from "react";
import { useSelector } from "react-redux";

import { Box, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

import "./basket.scss";

const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
        color: "#00a1b6",
        right: -3,
        top: 13,
        border: `2px solid #00a1b6`,
        padding: "0 3px",
    },
}));

function Basket() {
    const totalQuantity = useSelector((state) => state.totalQuantity);

    const handlerBasket = () => {
        console.log("basket");
    };
    if (totalQuantity) {
        return (
            <Box className="basket" onClick={handlerBasket}>
                <StyledBadge badgeContent={totalQuantity}>
                    <ShoppingBasketOutlinedIcon className="basket_icon" />
                </StyledBadge>
            </Box>
        );
    }
}

export default Basket;

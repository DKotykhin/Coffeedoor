import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Box, Badge, Modal, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import CloseIcon from '@mui/icons-material/Close';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { shopRemoveItems, basketAddQuantity, basketRemoveQuantity } from "../cataloglist/CatalogListSlice";

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

const StyledModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    maxWidth: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
};

const Basket = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const totalQuantity = useSelector((state) => state.totalQuantity);
    const basketList = useSelector((state) => state.data);

    const dispatch = useDispatch();
    const handleRemove = (basketItem) => {
        dispatch(shopRemoveItems(basketItem));        
    }
    const handleDecrement = (basketItem) => {
        dispatch(basketRemoveQuantity(basketItem));
    }
    const handleIncrement = (basketItem) => {
        dispatch(basketAddQuantity(basketItem));
    }
    
        return (
            <>   
                {basketList.length && 
                <Box className="basket" onClick={handleOpen}>
                    <StyledBadge badgeContent={totalQuantity}>
                        <ShoppingBasketOutlinedIcon className="basket_icon" />
                    </StyledBadge>
                </Box>}               
                
                <Modal
                    open={open}
                    onClose={handleClose}                   
                    >
                    <Box sx={StyledModal} className='modal'>
                        <CloseIcon className='modal_close' onClick={handleClose}/>
                        <Typography className="modal_title" component="h2">
                            Кошик
                        </Typography>
                        {
                            basketList.length ? basketList.map((item, i) => (
                                    <Box key={i}>
                                        <Box className="modal_block">
                                            <Typography className="modal_name">
                                                {item.title} {item.name}
                                            </Typography>
                                            <CloseIcon className="modal_icon" onClick={() => handleRemove(item.name)}/>
                                        </Box>
                                        <Typography className="modal_price">
                                            <RemoveCircleOutlineIcon 
                                                className="add_remove_icons"
                                                onClick={() => handleDecrement(item.name)}/>
                                            {" "}{item.quantity}{" "}
                                            <AddCircleOutlineIcon 
                                                className="add_remove_icons"
                                                onClick={() => handleIncrement(item.name)}/>
                                            {" x "}{item.price}{" грн = "}{item.quantity * item.price}{" грн"}                                            
                                        </Typography>
                                    </Box>
                                )
                            ) : <Box className="modal_subtitle">Нічого немає</Box>
                        }                        
                        <Typography className="modal_total">
                            {"Всього: "}
                            {basketList.reduce((sum, currentValue) => sum + +currentValue.price * currentValue.quantity, 0)}
                            {" грн"}
                        </Typography>
                        <Button className="buy_button" onClick={() => console.log(basketList)}>Купити</Button>
                    </Box>
                </Modal>                
            </>
        );    
}

export default Basket;

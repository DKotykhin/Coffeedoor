import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Backdrop, Box, Modal, Typography, Divider, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import {
    basketRemoveItems,
    basketAddQuantity,
    basketRemoveQuantity,
    sendDataToTelegram,
} from "./BasketListSlice";
import BasketIcon from "./BasketIcon";
import BasketForm from "./BasketForm";

import "./basket.scss";

const StyledModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    maxWidth: "90%",
    maxHeight: "80%",
    overflowY: "scroll",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 3,
};

const Basket = () => {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const { basketdata } = useSelector((state) => state.basket);
    const dispatch = useDispatch();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRemove = (basketItem) => {
        dispatch(basketRemoveItems(basketItem));
    };
    const handleDecrement = (basketItem) => {
        dispatch(basketRemoveQuantity(basketItem));
    };
    const handleIncrement = (basketItem) => {
        dispatch(basketAddQuantity(basketItem));
    };

    const onSubmitForm = (data) => {
        console.log(data);
        dispatch(sendDataToTelegram([data, ...basketdata]));
        setOpen(false);
        if (basketdata.length) {
            console.log(basketdata);
            navigate("/thanks");
        }
    };

    return (
        <>
            <BasketIcon handleOpen={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={StyledModal} className="modal">
                        <CloseIcon
                            className="modal_close"
                            onClick={handleClose}
                        />
                        <Typography className="modal_title" component="h2">
                            ???????? ????????????????????:
                        </Typography>
                        {basketdata.length > 0 ? (
                            basketdata.map((item, i) => (
                                <Box key={i}>
                                    <Box className="modal_block">
                                        <Typography className="modal_name">
                                            {item.title} {item.name}
                                        </Typography>
                                        <CloseIcon
                                            className="modal_icon"
                                            onClick={() =>
                                                handleRemove(item.name)
                                            }
                                        />
                                    </Box>
                                    <Typography className="modal_price">
                                        <RemoveCircleOutlineIcon
                                            className="add_remove_icons"
                                            onClick={() =>
                                                handleDecrement(item.name)
                                            }
                                        />{" "}
                                        {item.quantity}{" "}
                                        <AddCircleOutlineIcon
                                            className="add_remove_icons"
                                            onClick={() =>
                                                handleIncrement(item.name)
                                            }
                                        />
                                        {" x "}
                                        {item.price}
                                        {" ?????? = "}
                                        {item.quantity * item.price}
                                        {" ??????"}
                                    </Typography>
                                    <Divider sx={{ mt: 2 }} />
                                </Box>
                            ))
                        ) : (
                            <Box className="modal_subtitle">?????????? ????????????</Box>
                        )}
                        <Typography className="modal_total">
                            {"????????????: "}
                            {basketdata.reduce(
                                (sum, currentValue) =>
                                    sum +
                                    +currentValue.price * currentValue.quantity,
                                0
                            )}
                            {" ??????"}
                        </Typography>                       
                        <BasketForm onSubmit={onSubmitForm} />                        
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default Basket;

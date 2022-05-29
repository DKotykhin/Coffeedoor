import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Backdrop, Box, Modal, Fade, Button, Typography } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

import { itemRemoveQuantity, itemAddQuantity } from "./ItemListSlice";
import { basketAddFromItemPage } from "../basket/BasketListSlice";

import "./itemlist.scss";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 360,
    height: 600, 
    overflowY: "scroll",
    maxWidth: '90%',
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4, pt: 2
};


export default function ItemList() {
    const [open, setOpen] = React.useState(false);
    //const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { itemdata } = useSelector((state) => state.itempage);

    const dispatch = useDispatch();
    const handleDecrement = () => {
        dispatch(itemRemoveQuantity());
    };
    const handleIncrement = () => {
        dispatch(itemAddQuantity());
    };
    const handleBasket = (itemdata) => {
        setOpen(false);
        dispatch(basketAddFromItemPage(itemdata));        
    };

    React.useEffect(() => {
        if (Object.keys(itemdata).length) {
            setOpen(true);
        }
    }, [itemdata]);

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className='item_list'>
                        <CloseIcon
                            className="item_list_close"
                            onClick={handleClose}
                        />
                        {itemdata.img &&
                            <img
                                component="img"
                                height="345"                            
                                src={require(`../../api/catalog/goodsimages/${itemdata.img}`)}
                                alt={itemdata.name}
                                loading="lazy"
                            />
                        }
                        <Typography sx={{ mt: 2 }} variant="h6" component="h2">
                            {itemdata.title} {itemdata.name}
                        </Typography>
                        <Typography className='item_list_price'>
                            {itemdata.price}
                            {" грн"}
                        </Typography>
                        <Typography className='item_list_price'>
                            <RemoveCircleOutlineIcon
                                className="item_list_remove"
                                onClick={() => handleDecrement()}
                            />
                            {itemdata.quantity}
                            <AddCircleOutlineIcon
                                className="item_list_add"
                                onClick={() => handleIncrement()}
                            />
                            <Button className="item_list_button" onClick={() => handleBasket(itemdata)}>
                                В Кошик
                            </Button>
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            {"Вага: "}
                            {itemdata.weight}
                        </Typography>
                        <Typography>
                            {"Виробник: "}
                            {itemdata.tm}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            {itemdata.description}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

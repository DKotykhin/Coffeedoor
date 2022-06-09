import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";

import { Backdrop, Box, Modal, Fade, Button, Typography } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

import { itemRemoveQuantity, itemAddQuantity } from "./ItemListSlice";
import { basketAddFromItemPage } from "../basket/BasketListSlice";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

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
                        <Swiper
                            effect={"cube"}
                            grabCursor={true}
                            cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 10,
                            shadowScale: 0.8,
                            }}
                            pagination={true}
                            modules={[EffectCube, Pagination]}                            
                        >
                            {itemdata.list_img?.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <img                                        
                                        height="345"                            
                                        src={require(`api/catalog/goodsimages/${item}`)}
                                        alt={itemdata.name}
                                        loading="lazy"
                                    />
                                </SwiperSlide>
                            ))}                            
                        </Swiper>
                        
                        <Typography sx={{ mt: 2 }} variant="h6" component="h2">
                            {itemdata.title} {itemdata.name}
                        </Typography>
                        <Typography className='item_list_price'>
                            {itemdata.price}
                            {" грн"}
                        </Typography>
                        <Typography className='item_list_quantity'>
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
                        { itemdata.weight &&                        
                            <Typography>
                                {"Вага: "}
                                {itemdata.weight}
                            </Typography>
                        }
                        { itemdata.sort &&
                            <Typography>                                
                                {itemdata.sort}
                            </Typography>
                        }
                        { itemdata.tm &&
                            <Typography>
                                {"Виробник: "}
                                {itemdata.tm}
                            </Typography>                        
                        }
                        <Typography sx={{ mt: 2 }}>
                            {itemdata.description}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

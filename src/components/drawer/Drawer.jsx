import * as React from "react";
import { Link as RouterLink } from "react-router-dom";

import { List, ListItem } from "@mui/material";
import { Box, Drawer, Divider, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import img from "images/logo_small.ico";

import "./drawer.scss";

export default function NavDrawer() {
    const [state, setState] = React.useState(false);
    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState(open);
    };

    const groupOfTitle_1 = [
        { title: "Кава в зернах", id: "#coffee_list" },
        { title: "Листовий чай", id: "#tea_list" },
        { title: "Кавомолки", id: "#mill_list" },
        { title: "Аксессуари", id: "#acc_list" },
        { title: "Варення", id: "#jam_list" },
    ];
    const groupOfTitle_2 = [
        { title: "Про нас", id: "#about_block" },
        { title: "Контакти", id: "#footer_block" },
    ];

    const list = () => (
        <Box className="list_box"
            sx={{ width: 250 }}
            //role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List className="list_items">
                <img
                    src={img}
                    style={{ width: 100, marginLeft: 10 }}
                    alt="logo"
                />
                {groupOfTitle_1.map((text) => (
                    <ListItem key={text.title} disablePadding>
                        <Link className="list_items_item"                            
                            href={text.id}
                        >
                            {text.title}
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List className="list_items">
                {groupOfTitle_2.map((text) => (
                    <ListItem key={text.title} disablePadding>
                        <Link className="list_items_item"                            
                            href={text.id}
                        >
                            {text.title}
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Box className="link_item">
                <RouterLink to="/menu" className="link_button">
                    Меню кав'ярні
                </RouterLink>
            </Box>
        </Box>
    );

    return (
        <div className="drawer">
            <MenuIcon className="drawer_icon" onClick={toggleDrawer(true)} />
            <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </div>
    );
}

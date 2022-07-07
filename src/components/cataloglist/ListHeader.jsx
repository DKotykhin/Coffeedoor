import { Typography } from "@mui/material";

import "./stylelist.scss";

const ListHeader = ({ title, subtitle }) => {
    return (
        <>
            <Typography className="catalog_list_title">{title}</Typography>
            <Typography className="catalog_list_subtitle">
                {subtitle}
            </Typography>
        </>
    );
};

export default ListHeader;

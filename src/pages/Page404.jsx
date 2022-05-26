import ErrorMessage from "../components/errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import "./page404.scss";

const Page404 = () => {
    return (
        <div>
            <ErrorMessage />
            <Typography className="page">Сторінка не знайдена</Typography>
            <Link className="link" to="/">Повернутися на головну</Link>
        </div>
    );
};

export default Page404;

import ErrorMessage from "../components/errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import "./page404.css";

const Page404 = () => {
    return (
        <div>
            <ErrorMessage />
            <Typography id="page">Страница не найдена</Typography>
            <Link className="link" to="/">Вернуться на главную</Link>
        </div>
    );
};

export default Page404;

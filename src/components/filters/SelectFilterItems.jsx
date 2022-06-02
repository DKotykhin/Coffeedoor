import * as React from "react";

import { Box, Stack, Chip } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./selectfilteritems.scss";

const theme = createTheme({
    palette: {
        primary: {
            main: "#00a1b6",
        },
    },
});

export default function SelectFilterItems({onSelect}) {
    const [filter, setFilter] = React.useState([]);

    const filterItems = [
        { key: "всі чаї", value: "" },
        { key: "зелений", value: "зелений" },
        { key: "чорний", value: "чорний" },
        { key: "трав'яний", value: "трав'яний" },
        { key: "фруктовий", value: "фруктовий" },
    ];

    React.useEffect(() => {
        handleSelect("");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSelect = (filter) => {
        const newFilterItems = filterItems.map((item) => {
            if (item.value === filter) {
                return {
                    ...item,
                    color: true,
                };
            } else {
                return {
                    ...item,
                    color: false,
                };
            }
        });
        setFilter(newFilterItems);
        onSelect(filter)
    };

    return (
        <Box sx={{ textAlign: "center" }}>
            <ThemeProvider theme={theme}>
                <Stack direction="row" spacing={2}>
                    {filter.map((item) => (
                        <Chip
                            variant="outlined"
                            key={item.key}
                            color={item.color ? "primary" : "default"}
                            label={item.key}
                            onClick={() => handleSelect(item.value)}
                        />
                    ))}
                </Stack>
            </ThemeProvider>
        </Box>
    );
}


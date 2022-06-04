import * as React from "react";

import { Box, Stack, Chip, Badge } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#00a1b6",
        },
    },
});

export default function SelectFilterItems({onSelect, quantity}) {
    const [filter, setFilter] = React.useState([]);

    const filterItems = [
        { key: "всі чаї", value: "" },
        { key: "зелені", value: "зелений" },
        { key: "чорні", value: "чорний" },
        { key: "трав'яні", value: "трав'яний" },
        { key: "фруктові", value: "фруктовий" },
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
        <Box>
            <ThemeProvider theme={theme}>
                <Stack direction="row" spacing={3} sx={{display: 'flex', flexWrap: 'wrap', mt:1}}>
                    {filter.map((item) => (
                        <>
                            <Badge badgeContent={item.color ? quantity : 0} color="primary">
                                <Chip sx={{mb:2}}
                                    variant="outlined"
                                    key={item.key}
                                    color={item.color ? "primary" : "default"}
                                    label={item.key}
                                    onClick={() => handleSelect(item.value)}
                                />
                            </Badge>
                        </>
                    ))}
                </Stack>
            </ThemeProvider>
        </Box>
    );
}


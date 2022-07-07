import * as React from "react";
import { useForm, Controller } from "react-hook-form";

import { Box, Button, TextField } from "@mui/material";
import { Typography, Input, InputLabel } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
} from "@mui/material";

import { FormValidation } from "./BasketFormValidation";

import "./basketform.scss";

const theme = createTheme({
    palette: {
        primary: {
            main: "#00a1b6",
        },
    },
});

const BasketForm = ({ onSubmit }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm(FormValidation);

    return (
        <Box
            onSubmit={handleSubmit(onSubmit)}
            className="form"
            component="form"
            noValidate
            autoComplete="off"
        >
            <ThemeProvider theme={theme}>
                <InputLabel htmlFor="name" className="title mb">
                    Ваше ім'я
                </InputLabel>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <Input {...field} sx={{ width: "100%" }} />
                    )}
                />
                <Typography className="error">
                    {errors.name?.message}
                </Typography>
                <InputLabel htmlFor="phone" className="title mt mb">
                    Ваш телефон
                </InputLabel>
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <Input {...field} sx={{ width: "100%" }} />
                    )}
                />
                <Typography className="error">
                    {errors.phone?.message}
                </Typography>
                <Controller
                    name="delivery"
                    control={control}
                    render={({ field }) => (
                        <FormControl {...field}>
                            <FormLabel className="title mt mb">
                                Спосіб доставки
                            </FormLabel>
                            <RadioGroup
                            // defaultValue="забрати в кавярні"
                            >
                                <FormControlLabel
                                    value="забрати в кавярні"
                                    control={<Radio />}
                                    label="забрати в кавярні"
                                />
                                <FormControlLabel
                                    value="доставка перевізником"
                                    control={<Radio />}
                                    label="доставка за тарифами перевізника"
                                />
                            </RadioGroup>
                        </FormControl>
                    )}
                />
                <Typography className="error">
                        {errors.delivery?.message}
                    </Typography>
                <InputLabel htmlFor="text" className="title mt mb">
                    Адреса доставки або коментар
                </InputLabel>
                <Controller
                    name="text"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            multiline
                            maxRows={4}
                            sx={{ width: "100%" }}
                        />
                    )}
                />
                <Button
                    // disabled={!isValid}
                    className="submitbutton"
                    type="submit"
                >
                    Оформити замовлення
                </Button>
            </ThemeProvider>
        </Box>
    );
};

export default BasketForm;

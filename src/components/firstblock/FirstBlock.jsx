import { Link as RouterLink } from "react-router-dom";

import { Container, Typography, Box, Link } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './firstblock.scss'

const FirstBlock = () => {
    return (       
        <Container maxWidth="false" className='first_block'>
            <Typography className='first_block_title' component="h3">
                CoffeeDoor
            </Typography>
            <Typography className='first_block_subtitle' component="h3">
                Brew Bar & Coffeeshop
            </Typography>                
            <Box className='first_block_links'>
                <Link href="#coffee_list" className='link_1'>Магазин</Link>
                <RouterLink to="/menu" className='link_2'>Меню кав'ярні</RouterLink>                    
            </Box>                
            <ArrowBackIosIcon className='first_block_icon'/>            
        </Container>       
    )
}

export default FirstBlock;

import React from 'react';
import { Box } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import './BtnScrollUp.scss'

function BtnScrollUp() {
      
  const handlerScrollUp = () => {     
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }
  
  return (
    <Box className='btn-scroll-up' onClick={handlerScrollUp}>
      <ArrowUpwardIcon className='btn-scroll_icon'/>      
    </Box>
  );
}

export default BtnScrollUp;
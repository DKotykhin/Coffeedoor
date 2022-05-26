import * as React from 'react';

import { Box } from '@mui/system';
import { Container, Typography } from '@mui/material';
//import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandCircleDown';

import './accordeon.scss';
import AccordeonDetailsItems from '../../api/menu/menuItems.json';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
          
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',    
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)', 'color': '#00a1b6',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },    
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }))


export default function Accordeon() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
        <Container maxWidth="md" className="accordeonblock">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
                        {AccordeonDetailsItems.MenuChapter[0]}
                    </Typography>                    
                </AccordionSummary>
                <AccordionDetails>                        
                    { AccordeonDetailsItems.MenuItems[0].map((item, i) => {
                        return (
                            <Box sx={{ m: 2 }} key={i}>
                                <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                                    {item.name}                        
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    {item.description}
                                </Typography>
                                <Typography sx={{ fontSize: 18 }}>
                                    {item.price}
                                </Typography>
                            </Box>
                        )
                    }) 
                    }
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    >
                    <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
                        {AccordeonDetailsItems.MenuChapter[1]}
                    </Typography>                    
                </AccordionSummary>
                <AccordionDetails>
                    { AccordeonDetailsItems.MenuItems[1].map((item, i) => {
                        return (
                            <Box sx={{ m: 2 }} key={i}>
                                <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                                    {item.name}                        
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    {item.description}
                                </Typography>
                                <Typography sx={{ fontSize: 18 }}>
                                    {item.price}
                                </Typography>
                            </Box>
                        )
                    }) 
                    }
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    >
                    <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
                        {AccordeonDetailsItems.MenuChapter[2]}
                    </Typography>                    
                </AccordionSummary>
                <AccordionDetails>
                    { AccordeonDetailsItems.MenuItems[2].map((item, i) => {
                        return (
                            <Box sx={{ m: 2 }} key={i}>
                                <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                                    {item.name}                        
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    {item.description}
                                </Typography>
                                <Typography sx={{ fontSize: 18 }}>
                                    {item.price}
                                </Typography>
                            </Box>
                        )
                    }) 
                    }
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    >
                    <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
                        {AccordeonDetailsItems.MenuChapter[3]}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    { AccordeonDetailsItems.MenuItems[3].map((item, i) => {
                        return (
                            <Box sx={{ m: 2 }} key={i}>
                                <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                                    {item.name}                        
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    {item.description}
                                </Typography>
                                <Typography sx={{ fontSize: 18 }}>
                                    {item.price}
                                </Typography>
                            </Box>
                        )
                    }) 
                    }
                </AccordionDetails>
            </Accordion>
        </Container>
    </>
  );
}

// import * as React from 'react';

// import { Box } from '@mui/system';
// import { Container, Typography } from '@mui/material';
// import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandCircleDown';

// import './accordeon.css';
// import AccordeonDetailsItems from './accordeonItems.json';


// export default function Accordeon() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <>
//         <Container maxWidth="md" className="titleblock">
//             {
//                 AccordeonDetailsItems.MenuChapter.map((item, i) => {
//                     return(
//                         <Accordion key={i} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//                             <AccordionSummary
//                                 expandIcon={<ExpandMoreIcon />}
//                                 aria-controls="panel1bh-content"
//                                 id="panel1bh-header"
//                                 >
//                                 <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
//                                     {item}
//                                 </Typography>                    
//                             </AccordionSummary>
//                             <AccordionDetails>                        
//                                 { AccordeonDetailsItems.MenuItems[i].map((item, i) => {
//                                     return (
//                                     <Box sx={{ m: 2 }} key={i}>
//                                         <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
//                                             {item.name}                        
//                                         </Typography>
//                                         <Typography sx={{ color: 'text.secondary' }}>
//                                             {item.description}
//                                         </Typography>
//                                         <Typography sx={{ fontSize: 18 }}>
//                                             {item.price}
//                                         </Typography>
//                                     </Box>
//                                     )
//                                 }) 
//                                 }
//                             </AccordionDetails>
//                         </Accordion>
//                     )
//                 })                    
//             }            
//         </Container>
//     </>
//   );
// }
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Api from '../Api/Api';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button,Box } from '@mui/material';
import Note from "../Note/Note"
import "./mini.css"
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
  
    <div className='scrool-1'>
     
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
    <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1bh-content"
         id="panel1bh-header"
        
       >
          
         <Box className='top'>
           <Box className='top1'>
         
         <Api/>
        
         </Box>
         
           <Button>Pending</Button>
         </Box>
        
        
         <Box className='date'>
           June21,2022
          </Box>
     
 
       </AccordionSummary>
     
       <AccordionDetails>
<Box className='simple'>
      <Box className='simple1'> ABOUT</Box>
     <Box className='simple2'>  
       
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
</Box>  
  </Box>

        </AccordionDetails>
    
    </Accordion>
  
    
   
       <Box className='buc'>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
           
      
          <Box className='tap'>
            <Box className='tap1' >
            <Api/>
          </Box>
          <Box>
            <Button>Pending</Button>
          </Box>
          </Box>
         
      
          <Box className='data'>
            June21,2022
           </Box>
      
  
        </AccordionSummary>
        
        <AccordionDetails>
<Box className='sim'>
<Box className='sim1'> ABOUT</Box>
<Box className='sim2'> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.

</Box>
   </Box>
   
 <Box className='link'> 
 <Box className='mail'>
 <h4>EMAIL ADDRESS</h4>
  <h5>creaters@mail.com</h5>
   </Box>
   <Box className='twitter'>
   <h4>TWITTER HANDLE</h4>
   <h5 >https://twitter.com/elonmusk</h5>
   </Box>
   <Box className='insta'>
   <h4>INSTAGRAM HANDLE</h4>
   <h5 >
https://www.instagram.com/kalsdkmfklasmdklfmklsadmfklmlaksfmklmsdklfmksdmlf
</h5>
</Box>
<Box className='dribble'>
   <h4>DRIBBBLE HANDLE</h4>
   <h5 >https://dribbble.com/shots/18551776-Damascus-Techwear-Apparel-2022-web-redesign-concept</h5>
   </Box>
   <Box className='behance'>
   <h4>BEHANCE HANDLE</h4>
   <h5 >https://www.behance.net/gallery/119045577/DE_FORM?tracking_source=for_you_feed_featured_category</h5>
   </Box>
   </Box>
  <Note/>
         </AccordionDetails>
     
     </Accordion>
     </Box>
     </div>
    
       
 )
 }
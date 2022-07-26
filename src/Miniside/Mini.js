import  React,{useEffect,useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Api from '../Api/Api';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button,Box } from '@mui/material';
import Note from "../Note/Note"
import "./mini.css"

export default function ControlledAccordions(name,username) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
   
    (async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      console.log(res);

      const data = await res.json();
     
      setData(data.splice(0, 10));
    })();
  }, []);

  
  return (
  
    <div className='scrool-1'>
        {data.map(item=> (
     <div  key={item.id.value}>
    <Accordion className='row1' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
    <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1bh-content"
         id="panel1bh-header"
        
       >
          
         <Box className='top'>
        
           <Box className='top1'  >
       
          {item.name}
         </Box>
     
       
           <Button>Pending</Button>
         </Box>
        
       
         <Box className='date'>
           {item.username}
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
       <Accordion className='row'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
           
      
          <Box className='tap'>
            <Box className='tap1' >
           {item.address.city}
          </Box>
          <Box>
            <Button>Pending</Button>
          </Box>
          </Box>
         
      
          <Box className='data'>
           {item.address.suite}
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
 
 </Box>
 </Box>
 
  <Note/>
 
         </AccordionDetails>
     
     </Accordion>
     </Box> 
  
     </div>
        ))}
     </div>
    
       
 )
 }
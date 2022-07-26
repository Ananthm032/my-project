import './header.css';
import Img from "../../Images/Artboard 35.png"
import Img2 from "../../Images/147144.png"
import ArticleIcon from '@mui/icons-material/Article';
import {Box}from "@mui/material"
import Footer from "../../Header/Footer/Footer"

import {Link} from "react-router-dom"
function Head() {
  return (
    <div  className='flee'>
 <header className='header'>
 
  <Box className='boxe'>
  <Box> <img src={Img} alt='' width='250px' height='78px'  /></Box>
  <Box> <p>Admin</p>
  </Box>
  </Box>
  <Box >
    <img src={Img2} alt='' width='30' height='30px'/>
  </Box>
  
 
  </header>

  <div class="flex-containere">
 
    <section class="menue">
            <Box className='logoe'>
             
               <p><ArticleIcon/></p> 
          
              <p>Creater's Application</p>
            </Box>
    </section>

    
    <section class="contente">
     <Box className='minie'>
     <Link to='/' style={{textDecoration:'none',color:'lightgray',width:'100%'}}> <Box className='minie1'> <p> For Review</p></Box></Link>
      <Link to='/verified'style={{textDecoration:'none',color:'lightgray',width:'100%'}}><Box className='minie2'>  <p> Verified</p></Box></Link>
      <Link to='/rejected' style={{textDecoration:'none',color:'lightgray',width:'100%'}}>  <Box className='minie3'>  <p> Rejected</p></Box></Link>
     </Box>
   <Box className='bare'>
   <Footer/>
   </Box>
     
      
     
       
    </section> 
     </div>
       </div>
  );
}

export default Head;
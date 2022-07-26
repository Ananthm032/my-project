
import './topbar.css';
import Img from "../Images/Artboard 35.png"
import Img2 from "../Images/147144.png"
import ArticleIcon from '@mui/icons-material/Article';
import {Box}from "@mui/material"
import Mini from "../Miniside/Mini"
import {Link} from "react-router-dom"

function Topbar() {
  return (
    <div className='flex'>
 <header className='header'>
 
  <Box className='box'>
  <Box className='img'><img src={Img} alt='' width='250px' height='78px' /></Box>
 <Box ><p>Admin</p>
 </Box> 
  </Box>
  <Box >
    <img src={Img2} alt=''width='30px' height='30px'/>
  </Box>
  
 
  </header>

  <div class="flex-container">
 
    <section class="menu">
            <Box className='logo'>
             
               <p><ArticleIcon/></p> 
          
              <p>Creater's Application</p>
            </Box>
    </section>

    
    <section class="content">
     <Box className='mini'>
       <Link to='/' style={{textDecoration:'none',width:'100%'}}> <Box className='mini1'> <p> For Review</p></Box></Link>
       <Link to='/verified' style={{textDecoration:'none',width:'100%'}}><Box className='mini2'>  <p> Verified</p></Box></Link>
      <Link to='/rejected' style={{textDecoration:'none',width:'100%'}}>  <Box className='mini3'> <p> Rejected</p></Box></Link>
     </Box>
    
    <Box>
   <Box className='bar'>
      <Mini/>
      </Box>
    </Box>
    </section> 
     </div>
       </div>
  );
}

export default Topbar;

import './accepted.css';
import Img from "../../Images/Artboard 35.png"
import Img2 from "../../Images/147144.png"
import ArticleIcon from '@mui/icons-material/Article';
import {Box}from "@mui/material"
import Ape from "../../Component/Ape/Ape"

import {Link} from "react-router-dom"
function Accepted() {
  return (
    <div  className='flax'>
 <header className='header'>
 
  <Box className='bax'>
  <Box> <img src={Img} alt=''   width='250px' height='78px'  /></Box>
  <Box> <p>Admin</p>
  </Box>
  </Box>
  <Box >
    <img src={Img2} alt='' width='30' height='30px'/>
  </Box>
  </header>

  <div class="flax-container">
 
    <section class="manu">
            <Box className='loga'>
             
               <p><ArticleIcon/></p> 
          
              <p>Creater's Application</p>
            </Box>
    </section>

    
    <section class="cantent">
     <Box className='mina'>
     <Link to='/' style={{textDecoration:'none',color:'lightgray',width:'100%'}}> <Box className='mina1'> <p> For Review</p></Box></Link>
      <Link to='/verified' style={{textDecoration:'none',color:'lightgray',width:'100%'}}><Box className='mina2'>  <p> Verified</p></Box></Link>
      <Link to='/rejected' style={{textDecoration:'none',color:'lightgray',width:'100%'}}>  <Box className='mina3'>  <p> Rejected</p></Box></Link>
     </Box>
    <Box>
      <Box className='baa1'>
      <Ape/>
      </Box>
      
      </Box>
       
    </section> 
     </div>
       </div>
  );
}

export default Accepted;
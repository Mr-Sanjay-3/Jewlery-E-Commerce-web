import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import Navbar from '../SubComponents/Navbar';
import './ShopDetails.scss'

import Contact from '../assets/svgs/contact.svg'
import Location from '../assets/svgs/location.svg'
import GlobalLocation  from '../assets/svgs/globallocation.svg'

import Tanishq from '../assets/images/tanishqn1.png'
import TanishqShop from '../assets/images/tanishq-chennai.jpg'

import RingSandi from '../assets/images/RingSandi.jpg'
import RingWoman from '../assets/images/RingSandiS.png'
import WhpShop from '../assets/images/WhShop.jpg'
import WhpWoman from '../assets/images/whpwomen.png'

import EtsyWorld from '../assets/images/etsyWorld.jpg'
import EtsyHandMade from '../assets/images/EtsyGlobal.jpg'


export const OnlineShop = () => {
  return (
   <>
       <Navbar />
       <div className="dhop-details">
    <h1
    style={{
      justifyContent:'center',
      color:'#95a5a6',
      textAlign:'center',
      marginTop:'2px'
    }}>ONLINE SHOP</h1>
 <motion.div
    //  intial={{ x : 100, opacity:0}}   
      initial={{ x: 100, opacity: 0 }} 
     animate={{x : 0, opacity: 1}}
     transition={{duration:1, delay:0.5}}
     style={{
       marginTop:'50px'
     }}
 
 >
       <div className="Shop">
        <div className="shop-pic">
        <img src={TanishqShop} alt="Tanishq" width={"300px"}/>
        </div>
            <h4>TANISHQ JEWLERS</h4>
            <img src= {Location} alt="Store" width={"20px"}
            style={{
              position:'relative',
              top: '6px',
              left: '0px',
            }}
            />
            <p>Address:  Urapakkam, Chennai,
               Tamil Nadu - 600321, India
            Chennai Tamil Nadu  </p>
            <img src={Contact} alt="Phone" width={"20px"} style={{
              position: 'relative',
              top: '27px',
           left: '-109px',
            }} />
            <p  className='contact'>Contact:
             +91 4427467449 </p>
             <Link
             to = "https://www.tanishq.co.in/"
             target='_blank'
             rel=' noreferrer'
             style={{
              textDecoration:'none',
              color:'#74b9ff',
         
             }}
         
             >Via Connect with Website</Link>
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 1 }}
               style={{
                marginTop:"5px"
               }}
             >
             <div className="shop-dis">
             <img src={Tanishq} alt="Human" width={'200px'} />
             <p style={{textAlign:'justify'}}>
             Tanishq is a well-known jewellery brand in India.
              They are known for their high-quality and stylish jewellery.
              They have a wide range of jewellery products, including
              rings, necklaces, bracelets, and earrings.
              They have a large customer base, and they are known for their
              customer service.
 </p>
        
            </div>
           </motion.div>
        </div>
 </motion.div>

      <motion.div
      initial={{ x: 100, opacity: 0 }} 
     animate={{x : 0, opacity: 1}}
     transition={{duration:1, delay:0.5}}
     style={{marginTop:'50px'}}
 
 >
       <div className="Shop">
        <div className="shop-pic">
        <img src={RingSandi} alt="RingSandi" width={"250px"}/>
        </div>
            <h4>RingSandi</h4>
            <img src= {Location} alt="Store" width={"20px"}
            style={{
              position:'relative',
              top: '6px',
              left: '0px',
            }}
            />
            <p>  
Address:
RingSandi,
Block No. 301, 2163/29A, Silver Mist, Near Nilayam Theatre, Sadashiv Peth, Pune, Maharashtra, India - 411030
</p>

            <img src={Contact} alt="Phone" width={"20px"} style={{
              position: 'relative',
              top: '25px',
           left: '-109px',
            }} />

            <p  className='contact'>Contact:
            +91 9545860404 </p>
             <Link
             to = "https://ringsandi.com/"
             target='_blank'
             rel = "noreferrer"
             style={{
              textDecoration:'none',
              color:'#74b9ff',
             }}
             >Via Connect With Website </Link>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 1}}
          
          >
          <div className="shop-dis">
          <img src={RingWoman} alt="RingSandi"  width={"200px"} className='Human'/>
            <p style={{
              textAlign:'justify'
            }}>
              RingSandi is an Indian jewelry brand redefining elegance through handcrafted rings that fuse traditional artistry with contemporary style. Each piece is a celebration of culture, craftsmanship, and individuality — ethically made,
             beautifully designed, and proudly Indian.</p>
           
             </div>
      
        </motion.div>
           </div>
            </motion.div>

            <motion.div
      initial={{ x: 100, opacity: 0 }} 
     animate={{x : 0, opacity: 1}}
     transition={{duration:1, delay:0.5}}
     style={{marginTop:'50px'}}
 
 >
       <div className="Shop">
        <div className="shop-pic">
        <img src={WhpShop} alt="WhpShop" width={"320px"}/>
        </div>
            <h4>Whp Jewlers</h4>
            <img src= {Location} alt="Store" width={"20px"}
            style={{
              position:'relative',
              top: '6px',
              left: '0px',
            }}
            />
            <p>  
Address:
Whpjewlers,
301/302, Man Excellence, 106, S.V. Road, Opposite Pawan Hans, Vile Parle West, Mumbai, Maharashtra - 400056, India.
</p>

            <img src={Contact} alt="Phone" width={"20px"} style={{
              position: 'relative',
              top: '25px',
           left: '-109px',
            }} />

            <p  className='contact'>Contact:
            + 1800-222-225 </p>
             <Link
             to = "https://www.whpjewellers.com/"
             target='_blank'
             rel = "noreferrer"
             style={{
              textDecoration:'none',
              color:'#74b9ff',
             }}
             >Via Connect With Website </Link>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 1}}
          
          >
          <div className="shop-dis">
          <img src={WhpWoman} alt="Whp"  width={"430px"} className='Human'
          style={{
            marginLeft:'-150px'
          }}/>
            <p style={{
              textAlign:'justify'
            }}>
              WHP Jewellers is not just a jewellery brand—it's a 125-year-old story of tradition, trust, and transformation. Born in the lanes of Mumbai in 1909, WHP has evolved from a family-run goldsmith shop into one of India’s most respected names in fine jewellery.
             </p>
           
             </div>
      
        </motion.div>
           </div>

            </motion.div>
       </div>

       <motion.div
      initial={{ x: 100, opacity: 0 }} 
     animate={{x : 0, opacity: 1}}
     transition={{duration:1, delay:0.5}}
     style={{marginTop:'50px'}}
 
 >
       <div className="Shop">
        <div className="shop-pic">
        <img src={EtsyWorld} alt="WhpShop" width={"320px"}/>

        </div>

            <h4>Etsy World</h4>
            <img src= {GlobalLocation} alt="Global" width={"20px"}
            style={{
              position:'relative',
              top: '6px',
              left: '0px',
            }}
            />
            <p>  
Address:
Etsy,
Etsy is more than a marketplace — it’s a global treasure map, where every pin is a creator and every sparkle tells a story
</p>

           
             <Link
             to = "https://www.etsy.com/"
             target='_blank'
             rel = "noreferrer"
             style={{
              textDecoration:'none',
              color:'#74b9ff',
             }}
             >Via Connect With Website </Link>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 1}}
          
          >
          <div className="shop-dis">
          <img src={EtsyHandMade} alt="EtsyHandMade"  width={"300px"}
           className='Human'
           style={{marginTop:'20px'}}
           />
            <p style={{
              textAlign:'justify'
            }}>
              Etsy is not just a place to shop jewellery — it's where the heartbeat of global craftsmanship meets personal expression. Each piece isn’t mass-produced, but hand-touched, soul-shaped, and story-rich
             </p>
           
           
             </div>
      
        </motion.div>
           </div>
            </motion.div>


   </>
   

  )
}

export default OnlineShop;

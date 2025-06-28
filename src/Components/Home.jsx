
import { delay, motion}  from 'framer-motion'
// import React, { lazy} from 'react';
import Navbar from '../SubComponents/Navbar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Components.scss'


import Twitter from '../assets/svgs/twitter.svg';
import arrow from '../assets/svgs/arrow.svg';
import Facebook from '../assets/svgs/facebook.svg';
import Mail from '../assets/svgs/mail.svg';
import Loading from '../SubComponents/Loading';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';

import JewlMAke from '../assets/images/JewlMake.jpg'

import infiniyShine from '../assets/images/Ring4S.jpg'
import LagacyOfLove from '../assets/images/Ring1T.png'
import TanishqShop from '../assets/images/tanishqShop.jpg'
const SocialLink = ({ href, alt, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={icon} alt={alt} width="30px" />
  </a>
);

export const Home = () => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() =>{
   const  Timer = setTimeout(() =>{
    setisLoading(false)
   }, 500);

   return () => clearTimeout(Timer)

  },[]);

  return (
    <>
     {isLoading ? (

   <Loading />
    ):(
      <div className={`home-content ${!isLoading ? 'loaded' : ''}`}>

      <Navbar />
      <div className="hero">
      
        <div className="Halftone"></div>
 


  <div className="hero-bg bg1" style={{ backgroundImage: `url(${img1})` }}></div>
  <div className="hero-bg bg2" style={{ backgroundImage: `url(${img2})` }}></div>
  <div className="hero-bg bg3" style={{ backgroundImage: `url(${img3})` }}></div>
  <div className="hero-bg bg4" style={{ backgroundImage: `url(${img4})` }}></div>
  <div className="hero-bg bg5" style={{ backgroundImage: `url(${img5})` }}></div>
  <div className="hero-bg bg6" style={{ backgroundImage: `url(${img6})` }}></div>
  <div className="hero-bg bg7" style={{ backgroundImage: `url(${img7})` }}></div>


  <div className="grain-overlay"></div> 

        <div className="overlay">
           <h1>Sparkelina</h1>
          <p>Jewelry Beyond Cool</p>
        </div> 
        <button
          className="scroll"
          onClick={() => {
            document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          
          <small>Scroll</small>
       
          <img src={arrow} alt="Scroll down" width={'50px'} className="scroll-icon" style={{ filter: "url(#innerShadow)" }} />
        </button>
      </div>
   



      <div className="content" id="content">
<motion.div
initial ={{
  opacity: 0,
  x: 50,
}}
animate ={{
  opacity: 1,
  x: 0, 
}}
transition ={{
  duration: 1,
  delay: 0.5, 
}}
>
<h3 style={{
  textAlign: 'center',
  margin: '20px 0',
  fontSize: '2rem',
  fontWeight: 'bold',
}}>Best Sellers</h3>
<div className="Best-Sellers">
 
  <div className="card">
  <img src={infiniyShine} alt="Infinity" />
  <h4>Infinity Shine</h4>
  <p>₹ 1,079,691</p>
  <Link
  to = "/collections/everest"
  className="btn"
  >
  Check Out
  </Link>
</div>
<div className="card">
  <img src={LagacyOfLove} alt="Love" />
  <h4>Lagacy Of Love</h4>
  <p>₹ 1,10,818</p>
  <Link
  to = "/collections/Thaj"
  className="btn"
  >
  Check Out
  </Link>

</div>

</div>
</motion.div>
      </div>
        <motion.div>
    <div className="concept">
      <motion.div
      initial ={{
        opacity: 0,
        x: -50,
      }}
      animate ={{
        opacity: 1,
        x: 0,
      }}
      tabIndex={{
        once: true,
       delay: 0.10,
      }}
      >
      <img src={JewlMAke} alt="Jewl" className='ConceptP' />
  <h5 style={{justifyContent:'center', textAlign:'center', fontSize:'25px'}}>Concept </h5>
    
  <p style={{justifyContent:'center', textAlign:'center',color:'#3c6382'}}>

  This collection transforms raw beauty into refined design. Blending nature’s textures with bold, modern shapes, each piece is a statement of self-expression—crafted to be as unique as the one who wears it.
  </p>

  </motion.div>
    </div>
        </motion.div>
        <motion.div>
        <div className="Shop">
        <h1 style={{color:'kakki', fontFamily:'sans-serif', fontSize:'25px'}}>Shop</h1>
     
        <section>
        <img src={TanishqShop} alt="Tanishq" className='TShop' />
            <h4>Tanishq <b>Since 1994</b></h4>
            <p>   
            Tanishq,  a premium jewellery brand by Titan Company (Tata Group), stands out in India’s retail landscape by fusing traditional Indian craftsmanship with modern aesthetics. Launched in 1994, Tanishq is now a household name with 400+ stores across India and a growing global footprint.
            </p>
           
        </section>
      
        </div>
        </motion.div>
     
      <hr />
      <div className="Contact">
        <SocialLink
          href={'https://x.com/SanjayPro06?t=l1P9TQ8vv4BJEG68lJ-c7Q&s=09'}
          alt={'Twitter'}
          icon={Twitter}
        />
        <SocialLink
          href={'https://www.facebook.com/share/18jV2DwBYQ/'}
          alt={'Facebook'}
          icon={Facebook}
        />
        <SocialLink
          href={'mailto:sanjayprogrammer3@gmail.com'}
          alt={'Mail'}
          icon={Mail}
        />
           <div className="footer">
           <p>© 2025 Sparkelina. All rights reserved.</p>
           </div>
      </div>
       </div> 
      )} 
    </>
  );
};

export default Home;

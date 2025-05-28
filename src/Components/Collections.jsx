
import React from 'react';
import Navbar from '../SubComponents/Navbar';
import './Components.scss';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

import Itemsimg from '../assets/images/items.jpg';
import CollectionsImgone from '../assets/images/ArkadiaPark_1920x1080.JPG';
import Collectionimgtwo from '../assets/images/jungle.JPG';
import Collectionimgthree from '../assets/images/KingDom.JPG';
import Collectionimgfour from '../assets/images/North-Face-Mount-Everest.PNG';
import Collectionimgfive from '../assets/images/Taj-Mahal-grounds.JPG';
import Collectionimgsix from '../assets/images/valcano.JPG';


export const Collections = () => {
  const collectionImages = [
    { img: CollectionsImgone, link: "/collections/arkadia", date:"2024 - 2025" , description: " Jewels of the Lost Realm."   },
    { img: Collectionimgthree, link: "/collections/kingdom" },
    { img: Collectionimgfour, link: "/collections/everest", date:"2023 - 2025", description: "Elegance born from the edge of the sky."  },
    { img: Collectionimgtwo, link: "/collections/jungle" },
    { img: Collectionimgfive, link: "/collections/Thaj", date :"2019 - 2025", description:" Wear your story. Shine your truth." },
    { img: Collectionimgsix, link: "/collections/valcano", date:"2020 - 2025", description:"Where bold begins. Where legends live." },
  ];

  

  return (

    <div className="Container">
      <Navbar />
      <motion.div 
 initial={{
  opacity: 0,
  y: 50,
 }}
 animate={{
  opacity: 1,
  y: 0,
 }}
 transition={{
  duration: 1,
  delay: 0.4, 
 }}
 >

      <div className="contentsitems">
        <img src={Itemsimg} alt="Items" className="itemsheadimg" />
      </div>

      <h1
        style={{
          fontFamily: 'cursive',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#3c6382',
          fontSize: '40px',
          margin: '20px 0',
        }}
      >
        Collections
      </h1>

      <div className="Collections">
        {collectionImages.map((item, index) => (
      <div key={index} className='CollectionItemWrapper'>
          <Link to={item.link} key={index} style={{ display: 'block' }}>
            <img
              src={item.img}
              alt={`Collection ${index + 1}`}
              className="CollectionItem"
            />
          </Link>
          <p className='Description'>{item.description}</p>
          <p className='Date'>{item.date}</p>
       </div>
        ))}
      </div>
      </motion.div>
    </div>

  );
};

export default Collections;

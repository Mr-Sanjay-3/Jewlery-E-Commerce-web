import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../SubComponents/Navbar';
import "./Collection.scss"

import HeadArk from '../assets/images/ahead.jpg';
 
import Ark1 from '../assets/images/Ring1A.png';
import Ark2 from '../assets/images/Ring2A.png';
import Ark3 from '../assets/images/Ring3A.png';
import Ark4 from '../assets/images/Ring4A.png';
import Ark5 from '../assets/images/Ring5A.png';
import Ark6 from '../assets/images/Ring6A.png';
import Ark7 from '../assets/images/Ring7A.png';
//More Products 


const products = [
    {
      id: 1,
      name:'Shank Chakra ',
      price:'₹ 96,351',
      image:Ark1,
    link:'https://www.tanishq.co.in/product/shankh-chakra-gold-ring-for-men-51f5jyfeqaa00.html?lang=en_IN#home',
      },
      {
        id: 2,
        name:'Majesty Jahannath',
        price:'₹ 80,258 ',
        image : Ark2,
      link:'https://www.tanishq.co.in/product/majesty-jagannath-gold-ring-for-men-51f5jyfesaa00.html?lang=en_IN',
        },
        {
          id: 3,
          name:'Sculped Leaf',
          price:'₹ 28,446',
          image:Ark3,
        link:'https://www.tanishq.co.in/product/sculpted-leaf-gold-ring-51m5b1fceaa00.html?lang=en_IN',
          }, {
            id: 4,
            name:'Radiant Bloom',
            price:'₹ 28,651',
            image:Ark4,
          link:'https://www.tanishq.co.in/product/radiant-bloom-gold-ring-51m5b1fhjaa00.html?lang=en_IN',
            }, {
              id: 5,
              name:'Sculped Swirl',
              price:'₹ 42,663',
              image:Ark5,
            link:'https://www.tanishq.co.in/product/sculpted-swirl-gold-ring-51m5i1fazaa00.html?lang=en_IN',
              }, {
                id: 6,
                name:'Morning Dew',
                price:'₹ 23,490',
                image: Ark6,
              link:'https://www.tanishq.co.in/product/morning-dew-gold-ring-51d5p1fafaa00.html?lang=en_IN',
                }, {
                  id: 7,
                  name:'Floral Charm',
                  price:'₹ 23,100',
                  image:Ark7,
                link:'https://www.tanishq.co.in/product/floral-charm-gold-finger-ring-51d5b2fbfaacz.html?lang=en_IN',
                  },
                  // {
                  //   id: 8,
                  //   name:'',
                  //   price:'',
                  //   image:'',
                  // link:'',
                  //   },
  ]

export const Arkadia = () => {
  return (
    <>
    <Navbar />
   
    <div className="Element1img">
        <img src={HeadArk} alt="Ring" className="Element"
 />
     
      </div>
      <div className="collection-container">
        <h1 className="collection-title" id='ArkadiaS'>Arkadia Collections</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                loading= "lazy"
              />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <Link to={product.link || `/buy/${product.id}`} 
                  className="buy-button" 
                  target='_blank' 
                  rel="noopener noreferrer"
                >
                  Buy Online
                </Link>
              </div>
            </div>

          ))}
        </div>
      </div>
    </>
  )
}
export default Arkadia;
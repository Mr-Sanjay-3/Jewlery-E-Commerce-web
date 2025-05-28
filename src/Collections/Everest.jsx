
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Collection.scss";
import Navbar from '../SubComponents/Navbar';

import HeadSky from '../assets/images/headsky.jpg';

import RingE1 from "../assets/images/Ring1S.jpg";
import RingE2 from "../assets/images/Ring2S.jpg";
import RingE3 from "../assets/images/Ring3S.jpg";
import RingE4 from "../assets/images/Ring4S.jpg";
import RingE5 from "../assets/images/Ring5S.jpg";
import RingE6 from "../assets/images/Ring6S.jpg";
import RingE7 from "../assets/images/Ring7S.jpg";
import RingE8 from "../assets/images/Ring8S.jpg";
import RingE9 from "../assets/images/Ring9S.jpg";
import RingE10 from "../assets/images/Ring10S.jpg";

const Everest = () => {
 
  const products = [
    {
      id: 1,
      name: 'Diamond Serenade',
      price: '₹ 437,248',
      image: RingE1,
      link: 'https://ringsandi.com/products/diamond-serenade-women-ring',
    },
    {
      id: 2,
      name: 'Starlit Promise',
      price: '₹ 537,248',
      image: RingE2,
      link: 'https://ringsandi.com/products/starlit-promise-women-ring',
    },
    {
      id: 3,
      name: 'MoonBeam Charm',
      price: '₹ 649,570',
      image: RingE3,
      link: 'https://ringsandi.com/products/moonbeam-charm-women-ring-grace?variant=50313840361751',
    },
    {
      id: 4,
      name: 'Infinity Shine',
      price: '₹ 1,079,691',
      image: RingE4,
      link: 'https://ringsandi.com/products/infinity-shine-women-ring-elegance?variant=50309026939159',
    },
    {
      id: 5,
      name: 'Uminous Voyage',
      price: '₹ 76,168',
      image: RingE5,
      link: 'https://ringsandi.com/products/luminous-cluster-ring',
    },
    {
      id: 6,
      name: 'Radiant Cluster',
      price: '₹ 58,048',
      image: RingE6,
      link: 'https://ringsandi.com/products/radiant-cluster-women-ring-elegance',
    },
    {
      id: 7,
      name: 'Luminous Cluster',
      price: '₹ 46,530',
      image: RingE7,
      link: 'https://ringsandi.com/products/rectangular-radiance-women-ring-elegance?variant=48017309597975',
    },
    {
      id: 8,
      name: 'Rose Radiance',
      price: '₹ 57,680',
      image: RingE8,
      link: 'https://ringsandi.com/products/rose-radiance-floral-women-ring-elegance?variant=48727220388119',
    },
    {
      id: 9,
      name: 'Delicate Beauty',
      price: '₹ 56,141',
      image: RingE9,
      link: 'https://ringsandi.com/products/delicate-beauty-women-ring',
    },
    {
      id: 10,
      name: 'Trishul',
      price: '₹ 106,233',
      image: RingE10,
      link: 'https://ringsandi.com/products/trishul-men-ring-elegance?variant=48057449414935',
    },

  //   id: 11,
  //   name: '',
  //   price: '₹ ',
  //   image: ,
  //   link: '',
  // },
  ];

  return (
    <>
    <Navbar />
   
      <div className="Element1img">
        <img src={HeadSky} alt="Ring" className='Element'  />
      </div>
      <div className="collection-container">
        <h1 className="collection-title" id='Everest'>SkyCrest Collection</h1>
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

  );
};

export default Everest;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import "./Collection.scss";
// import Navbar from '../Components/Navbar';

// import HeadSky from '../assets/images/headsky.jpg';

// import Dimond1 from "../assets/images/d1.jpg";
// import Dimond2 from "../assets/images/d2.jpg";
// import Dimond3 from "../assets/images/d3.jpg";
// import Dimond4 from "../assets/images/d4.jpg";
// import Dimond5 from "../assets/images/d5.jpg";
// import Dimond6 from "../assets/images/d6.jpg";
// import Dimond7 from "../assets/images/d7.jpg";
// import Dimond8 from "../assets/images/d8.jpg";
// import Dimond9 from "../assets/images/d9.jpg";
// import Dimond10 from "../assets/images/d10.jpg";

// const Everest = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a network request
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   }, []);

//   const products = [
//     {
//       id: 1,
//       name: 'Diamond Serenade',
//       price: '₹ 437,248',
//       image: Dimond1,
//       link: 'https://ringsandi.com/products/diamond-serenade-women-ring',
//     },
//     {
//       id: 2,
//       name: 'Starlit Promise',
//       price: '₹ 537,248',
//       image: Dimond2,
//       link: 'https://ringsandi.com/products/starlit-promise-women-ring',
//     },
//     {
//       id: 3,
//       name: 'MoonBeam Charm',
//       price: '₹ 649,570',
//       image: Dimond3,
//       link: 'https://ringsandi.com/products/moonbeam-charm-women-ring-grace?variant=50313840361751',
//     },
//     {
//       id: 4,
//       name: 'Infinity Shine',
//       price: '₹ 1,079,691',
//       image: Dimond9,
//       link: 'https://ringsandi.com/products/infinity-shine-women-ring-elegance?variant=50309026939159',
//     },
//     {
//       id: 5,
//       name: 'Uminous Voyage',
//       price: '₹ 76,168',
//       image: Dimond5,
//       link: 'https://ringsandi.com/products/luminous-cluster-ring',
//     },
//     {
//       id: 6,
//       name: 'Radiant Cluster',
//       price: '₹ 58,048',
//       image: Dimond6,
//       link: 'https://ringsandi.com/products/radiant-cluster-women-ring-elegance',
//     },
//     {
//       id: 7,
//       name: 'Luminous Cluster',
//       price: '₹ 46,530',
//       image: Dimond7,
//       link: 'https://ringsandi.com/products/rectangular-radiance-women-ring-elegance?variant=48017309597975',
//     },
//     {
//       id: 8,
//       name: 'Rose Radiance',
//       price: '₹ 57,680',
//       image: Dimond8,
//       link: 'https://ringsandi.com/products/rose-radiance-floral-women-ring-elegance?variant=48727220388119',
//     },
//     {
//       id: 9,
//       name: 'Delicate Beauty',
//       price: '₹ 56,141',
//       image: Dimond4,
//       link: 'https://ringsandi.com/products/delicate-beauty-women-ring',
//     },
//     {
//       id: 10,
//       name: 'Trishul',
//       price: '₹ 106,233',
//       image: Dimond10,
//       link: 'https://ringsandi.com/products/trishul-men-ring-elegance?variant=48057449414935',
//     },
//   ];

//   return (
//     <>
//       <Navbar />
   
//         <>
//           <div className="head-sky">
//             <img src={HeadSky} alt="Ring" className='headimgsky' />
//           </div>
//           <div className="collection-container">
//             <h1 className="collection-title">SkyCrest Collection</h1>
//             <div className="products-grid">
//               {products.map((product) => (
//                 <div key={product.id} className="product-card">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="product-image"
//                   />
//                   <div className="product-info">
//                     <h3 className="product-name">{product.name}</h3>
//                     <p className="product-price">{product.price}</p>
//                     <Link to={product.link || `/buy/${product.id}`} 
//                       className="buy-button" 
//                       target='_blank' 
//                       rel="noopener noreferrer"
//                     >
//                       Buy Online
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default Everest;
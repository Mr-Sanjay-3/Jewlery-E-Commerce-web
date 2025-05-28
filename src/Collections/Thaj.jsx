import React from 'react'
import Navbar from '../SubComponents/Navbar'
import './Collection.scss'
import { Link } from'react-router-dom'

import HeadThaj from '../assets/images/headThaj.jpg'

import Ring1T from '../assets/images/Ring1T.png'
import Ring2T from '../assets/images/Ring2T.png'
import Ring3T from '../assets/images/Ring3T.png'
import Ring4T from '../assets/images/Ring4T.png'
import Ring5T from '../assets/images/Ring5T.png'




export const Thaj = () => {
 const products  = [
    {
        id: 1,
        name: "Lagacy Of Love",
        price: "₹ 1,10,818",
        image: Ring1T,
        link:"https://www.whpjewellers.com/products/20881/enchanting-radiance-diamond-engagement-ring-for-women-0p20881-0sDRGD23109109-0vDRGD23109109_0",

    },{
        id: 2,
        name: "Luminous Beauty",
        price: "₹ 92,279",
        image: Ring2T,
        link:"https://www.whpjewellers.com/products/17689/contemporary-shine-solitaire-women-ring-0p17689-0sDAO2324-0vDAO2324_0",

    },
    {
        id: 3,
        name: " Spark of Shine",
        price: "₹ 74,734",
        image: Ring3T,
        link:"https://www.whpjewellers.com/products/13611/stylish-gleam-diamond-engagement-ring-for-women-0p13611-0sRGB8642BRB-0vRGB8642BRB_0",

    }
    ,{
        id: 4,
        name: "Elegant Elegance",
        price: "₹ 82,567",
        image: Ring4T,
        link:"https://www.whpjewellers.com/products/19923/harmonious-dazzle-ring-for-women-0p19923-0sDRGD23067671-0vDRGD23067671_0",

    },{
        id: 5,
        name: "Flora of Love",
        price: "₹ 52,583",
        image: Ring5T,
        link:"https://www.whpjewellers.com/products/18938/starry-radiance-diamond-ring-for-women-0p18938-0sDRG0044-0vDRG0044_0",
        

    }
    // {
    //     id: ,
    //     name: "",
    //     price: "₹",
    //     image:,
    //     link:"",

    // }
 ]



  return (
    <>

<Navbar />
           <div className="Element1img">
               <img src={HeadThaj} alt="Thaj" className='Element'  />
        </div>
             <div className="collection-container">
            <h1 className="collection-title" id='Thaj'>Thaj Collections</h1>
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


export default Thaj;
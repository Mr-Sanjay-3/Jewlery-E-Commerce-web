import React from 'react'
import { Link } from 'react-router-dom'
import './Collection.scss'


import ValHead from '../assets/images/ValHead.jpg'

import Ring1V from '../assets/images/Ring1V.png'
import Ring2V from '../assets/images/Ring2V.png'
import Ring3V from '../assets/images/Ring3V.png'
import Ring4V from '../assets/images/Ring4V.png'
import Ring5V from '../assets/images/Ring5V.png'
import Ring6V from '../assets/images/Ring6V.png'
import Ring7V from '../assets/images/Ring7V.png'
import Navbar from '../SubComponents/Navbar'

export const Valcano = () => {


    const products = [

        {
            id: 1,
            name: 'Gothic Black',
            price: '₹ 15,949',
            image: Ring1V,
            link: '',
        },

        {
            id: 2,
            name: 'Raid or Die Promise',
            price: '₹ 44,788 ',
            image: Ring2V,
            link:'https://www.etsy.com/in-en/listing/1749936172/my-ride-or-die-promise-ring-biker-series?ls=a&ref=listing_page_ad_row-6&pro=1&plkey=5312e55b643cad59c6f765ed5a898c36a9fdf91a%3A1749936172&listing_id=1749936172&listing_slug=my-ride-or-die-promise-ring-biker-series',

        },
        {
            id: 3,
            name: ' Red Dragon',
            price: '₹ 4,698',
               image:  Ring3V,
               link: 'https://www.etsy.com/in-en/listing/1555225606/sterling-silver-bat-ring-moon-star?ls=r&ref=internal_similar_listing_bot-3&pro=1&frs=1&content_source=9b7b1fcfff169806442cc8a30ff7c3e6cfc8cf83%253A1555225606&logging_key=9b7b1fcfff169806442cc8a30ff7c3e6cfc8cf83%3A1555225606&listing_id=1555225606&listing_slug=sterling-silver-bat-ring-moon-star',
        } ,
        {
            id: 4,
            name: 'Sterling Silver Dark',
            price: '₹ 4,647',
               image:  Ring4V,
               link: 'https://www.etsy.com/in-en/listing/1043453562/sterling-silver-dark-gothic-ring-gothic?ls=r&ref=internal_similar_listing_bot-3&pro=1&frs=1&content_source=0dc01daf82d8ee34751e146ab6d358d558234814%253A1043453562&logging_key=0dc01daf82d8ee34751e146ab6d358d558234814%3A1043453562&listing_id=1043453562&listing_slug=sterling-silver-dark-gothic-ring-gothic',
        } ,{
            id: 5,
            name: 'Fire Quarter',
            price: '₹ 13,839',
               image: Ring5V ,
               link: 'https://www.etsy.com/in-en/listing/1889692194/gothic-fire-opal-and-garnet-moon-ring?ls=r&ref=related-1&pro=1&sts=1&content_source=74f147fd97bb6e75334a7453d996b3ab1b52e3b1%253A1889692194&logging_key=74f147fd97bb6e75334a7453d996b3ab1b52e3b1%3A1889692194',
        } ,{
            id: 6,
            name: 'Vintage Garnet',
            price: '₹ 13,342',
               image: Ring6V ,
               link: 'https://www.etsy.com/in-en/listing/1890175338/vintage-garnet-moon-engagement-ring?ls=a&ref=listing_page_ad_row-1&pro=1&sts=1&plkey=279ca339271e1d2a285b44aa9aba0d14810e8f93%3A1890175338&listing_id=1890175338&listing_slug=vintage-garnet-moon-engagement-ring',
        } ,
        {
            id: 7,
            name: 'Gothic Skull',
            price: '₹ 4,656',
               image:  Ring7V,
               link:'https://www.etsy.com/in-en/listing/1043460060/gothic-skull-engagement-ring-goth-ring?ls=r&ref=internal_similar_listing_bot-2&pro=1&frs=1&content_source=3f64474c8b1750274acd2b76103e9e5490c1b8ce%253A1043460060&logging_key=3f64474c8b1750274acd2b76103e9e5490c1b8ce%3A1043460060&listing_id=1043460060&listing_slug=gothic-skull-engagement-ring-goth-ring',
        } ,
        // {
            //     id: ,
            //     name: '',
            //     price: '₹ ',
            //        image:  ,
            //        link: '',
            // } ,
    ]




  return (
   <>
   <Navbar />
   <div className='Element1img'>
    <img src={ValHead} alt='El' className='Element'/>
   </div>

 
   <div className='collection-container'>
    <h1 className='collection-title' id='val'>Valcano Collections</h1>
    <div className='products-grid'>
        {products.map((product)  => (
        <div className='product-card' key={product.id}>
         <img 
            src = {product.image}
            alt= {product.name}
            className='product-image' 
            loading='lazy'
         />
         <div  className='product-info'>
            <h3 className='product-name'>{product.name}</h3>
            <p className='product-price'>{product.price}</p>
            
         <Link
          to ={product.link || `/buy/${product.id}`}
           target ='_blank'
           className ='buy-button'
           rel='noopener noreferrer'
         >
         Buy Online
         </Link>
         </div>
        </div>
      
       ))}

    </div>

   </div>

  <div className="Discrib">
    <h1>Valcano</h1>
    <p style={{textAlign:"center"}}> 
    Valcano is a series of 7 rings, each with its own unique design and symbolism. The rings are made of high-quality materials and are available in a variety of sizes and styles.
    </p>

  </div>
   
   </>
  )
}

export default Valcano;
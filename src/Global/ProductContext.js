import React, { createContext, useState } from 'react'
import dslr from '../Images/dslr.jpg'
import IGI from '../Images/IGI-2.png'
import PUBG from '../Images/PUBG-1.PNG';
import iphone from '../Images/iphone.jpg';
import ashphalt from '../Images/ashphalt-9.png'
import rings from '../Images/rings.jpg';
import shoes from '../Images/shoes.jpg';
import watch from '../Images/watch.jpg';

//provider we take
export const ProductContext = createContext();

function ProductContextProvider(props) {
    const [products]=useState([
        {id:1,name:'Dslr',price:300,image:dslr,status:'hot'},
        {id:2,name:'PUBG',price:800,image:PUBG,status:'new'},
        {id:3,name:'IGI',price:3000,image:IGI,status:'hot'},
        {id:4,name:'iphone',price:50000,image:iphone,status:'new'},
        {id:5,name:'ashphalt',price:300,image:ashphalt,status:'hot'},
        {id:6,name:'shoes',price:500,image:shoes,status:'new'},
        {id:7,name:'rings',price:2000,image:rings,status:'hot'}, 
        {id:8,name:'watch',price:1000,image:watch,status:'hot'}
    ])
  return (
    <ProductContext.Provider value={{products:[...products]}}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider

import React, { useContext } from 'react'
import { CartContext } from '../Global/CartContext'
import plus from '../Images/plus-solid.svg'
import minus from '../Images/minus-solid.svg'
import trash from '../Images/trash-solid.svg'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
//toast.configure();

function Cart() {
  const {shoppingCart,totalPrice,qty,dispatch} = useContext(CartContext);
  const handletoken = async (token) =>{
       //console.log(token);
       const product = {name:'All Poducts',price:totalPrice}
       const responnse = await axios.post('http://localhost:8080/checkout',{
          product,
          token
       });
       const {status} = responnse.data;
       if(status=='success'){
        dispatch({type:'EMPTY'});
        //props.history.push('/');
        // toast.success("You have paid successfully now you can continue your shopping.",
        //{position:toast.POSITION.TOP_RIGHT})

       }
       //console.log(responnse)
  }
  console.log(shoppingCart);
  return (
    <div className='cart-container'>
        <div className='cart-details' style={{marginTop:'100px'}}>
            {/* <h2>Shopping Cart</h2> */}
            {shoppingCart.length >0 ?
                shoppingCart.map(cart=>(
              <div className='cart' key={cart.id}>
                   <span className='cart-image'><img src={cart.image} alt="not found"/></span>
                   <span className='cart-product-name'>{cart.name}</span>
                   <span className='cart-product-price'>${cart.price}.00</span>
                   <span className='inc' onClick={()=>dispatch({type:'INC',id:cart.id,cart})}><img src={plus} width="60px" height="60px"/></span>
                   <span className='product-quantity'>{cart.qty}</span>
                   <span className='dec' onClick={()=>dispatch({type:'DEC',id:cart.id,cart})}><img src={minus} width="60px" height="60px"/></span>
                   <span className ='product-total-price'>${cart.price * cart.qty}.00</span>
                   <span className = 'delete-product' onClick={()=>dispatch({type:'DELETE',id:cart.id,cart})}><img src={trash} width="50px" height="50px" /></span>
              </div>
            ))
          : <div className='empty'>Sorry your cart is currently empty</div> }
    </div>
    {shoppingCart.length>0 ? <div className='cart-summary'>
        <div className='summary'>
          <h3>Card Summary</h3>
          <div className='total-item'>
            <div className='items'>Total Items</div>
            <div className='item-count'>{qty}</div>
          </div>
          <div className='total-price-section'>
            <div className='items'>Total Price</div>
            <div className='item-count'>${totalPrice}.00</div>
          </div>
          <div className='stripe-section'>
             {/* { stripe button} */}
             <StripeCheckout
             stripeKey='pk_test_51MhPhqSADlgmYCfg2PycbPR8BWdAL8hP8rggdqkgum9oolb3pO6GmZ1MMmmCY1VunIlUvomdD35t6AyAWRDtNDkv00pNou1Jhl'
             token={handletoken}>
              {/* billlingAddress
              shippingAddress
              amount={totalPrice*100}
              name="All products" */}
             </StripeCheckout>
          </div>
        </div>
    </div>:''}
  </div>
  )
}

export default Cart

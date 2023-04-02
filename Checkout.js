import React from 'react'
import {useDispatch} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'


export default function Checkout(subtotal) {

  const dispatch = useDispatch()

    function tokenHandler(token) {
        console.log(token);
        dispatch(placeOrder(token,subtotal))
    }
  return (
    <div>

        <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        token={tokenHandler}
        stripeKey='pk_test_51Mr0m0SDA6nEAfpaN6ulNvwXDZnN5BvxURCnVkPU4TtAdlmcWf7HYRLRND4pBRI7R3vOQeJ97AK9uN66oOgMSNM500ym2FlOPn'
        currency='INR'
        >
            <button className='btn'>Pay Now</button>
        </StripeCheckout>
      
    </div>
  )
}

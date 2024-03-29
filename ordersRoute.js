const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const stripe = require("stripe")("sk_test_51Mr0m0SDA6nEAfpao3YYH2IrQxuw6EN6WKYXqjSOm1Uxd27bkHP0ixr3mTYPZwrwZprnQXvsUFSEvXmci0AnN2NC002oyzZCxQ")
//const Order = require('../models/orderModel')

router.post("/placeorder",async(req,res) => {

    const{token,subtotal,currentUser,cartItems}=req.body

    try {
        const customer = await stripe.customers.create({
            email : token.email,
            source : token.id
        })

        const payment = await stripe.charges.create({
            amount : subtotal*100,
            currency:'inr',
            customer:customer.id,
            receipt_email:token.email
        },{
            idempotencyKey : uuidv4()
        })

        if(payment)
        {

            /*const newOrder = new Order({
                name : currentUser.name,
                email : currentUser.email,
                userid : currentUser.userid,
                orderItems : cartItems,
                orderAmount : subtotal,
                shippingAddress : {
                    street:token.card.address_line1,
                    city : token.card.address_city,
                    country : token.card.address_country,
                    pincode : token.card.address_zip


                },
                transactionID : token.source.id
            })
            newOrder.save()*/
            res.send('Payment Done')
        }
        else{
            res.send('Payment Failed')
        }
    } catch (error) {

        return res.status(400).json({message : 'something went wrong'});
        
    }

});

module.exports = router
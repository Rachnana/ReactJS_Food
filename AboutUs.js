import React from 'react'
import download from '../assets/download.jpg';
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';



export default function AboutUs() {
  return (
    <div className='about'>
        <h1>About Us</h1>
        <p>Hello, wishes from Foodbea.com</p>
        <br />
        <p>
            For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries. 
            By putting together meticulous information for our customers, we enable them to make an informed choice.
            Focusing on affordability The benefits of providing an interesting choice are embodied by the success of Foodbea. 
            We are leaving no stone unturned when it comes to making food more affordable without compromising on the profitability of a given restaurant.
            Boosting accessibility for customers Our delivery service is reaching more and more cities. We are actively growing our services - table reservation,
            Zomato for Work and are continuing to power Feeding India.Quality Improving quality of food
            We are committed to nurturing a neutral platform and are helping food establishments maintain high standards through Hyperpure. 
            Food Hygiene Ratings is a coveted mark of quality among our restaurant partners.


        </p>
        <br />
        <p>
        Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, 
        serving their multiple needs. Customers use our platform to search and discover restaurants, read and 
        write customer generated reviews and view and upload photos, order food delivery, book a table and make 
        payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific 
        marketing tools which enable them to engage and acquire customers to grow their business while also providing 
        a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, 
        Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. 
        We also provide our delivery partners with transparent and flexible earning opportunities.
        </p>
        <br />
  
        <h3>Browse through some of our Foods</h3>
        <br />
        <div className="pictures">
         
          <img src={download} width="560"
            height="315" alt="My Image" />
          <img src={food1} width="560"
            height="315" alt="food 1" />
          <img src={food2} width="560"
            height="315" alt="food 2" />
        
        </div>
      
    </div>
  )
}

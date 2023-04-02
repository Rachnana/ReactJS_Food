const express = require("express")
const Food = require("./models/foodModel")




const app = express();
const db = require("./db.js")
app.use(express.json());

const foodsRoute = require('./routes/foodsRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use('/api/foods/',foodsRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders',ordersRoute)
app.get("/",(req,res) => {
    res.send("Server Working" +port);
});

/*app.get("/getfoods",(req,res) => {
    Food.find({}).then((docs) => {
          res.send(docs);
      }).catch((err) => {
        console.log(err);
      });
      
});*/

const port = process.env.PORT || 5000;

app.listen(port, () => `Server Running  on port`);
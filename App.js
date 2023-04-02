import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';




function App() {
  return (
    <div className="App">
      <Navbar/>

      <BrowserRouter>
      <Route path="/" exact component={Homescreen} />
      <Route path="/cart" exact component={Cartscreen} />
      <Route path="/register" exact component={Registerscreen} />
      <Route path="/login" exact component={Loginscreen} />
      <Route path="/about" exact component={AboutUs} />
      <Route path="/contact" exact component={ContactUs} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;

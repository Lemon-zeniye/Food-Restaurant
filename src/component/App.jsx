import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import OurDishes from "./OurDishes/OurDishes";
import AboutUs from "./AboutUs/AboutUs";
import Customers from "./Customers/Customers";
import Menu from "./Menu/Menu";
import Form from "./Form/Form";
import Foooter from "./Footer/Footer";
import "../App.css";
const App = () => {
    
    return(
        <div className="appJs">
            <Navbar />
            <Main />
            <OurDishes />
            <AboutUs />
            <Customers />
            <Menu />
            <Form />
            <Foooter />
        </div>
    )
}
export default App;
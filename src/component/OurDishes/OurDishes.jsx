import img1 from "../../images/burger-one.png";
import img2 from "../../images/beef.png";
import img3 from "../../images/bufflo.png";
import img4 from "../../images/fishe.png";
import img5 from "../../images/rice.png";
import img6 from "../../images/stake.png";
import "./OurDishes.css";
const ourfoods = [
    {
        img: img1,
        price: "16.99$", 
        title: "Burger"
    },
    {
        img: img2,
        price: "14.99$", 
        title: "Beef"
    },
    {
        img: img3,
        price: "17.99$", 
        title: "Bufflo"
    },
    {
        img: img4,
        price: "13.99$", 
        title: "Fishe"
    },
    {
        img: img5,
        price: "20.99$", 
        title: "Rice"
    }, 
    {
        img: img6,
        price: "10.99$",
        title: "Stake" 
    }
];
const OurDishes = () => {
    return(
        <section id="dishes" className="section-one">
            <div className="title">
                <p>Our Dishes</p>
                <h1>POPULAR DISHES</h1>
            </div>
            <div className="foods">
                {
                   ourfoods.map((food, id) => (
                    <div key={id} className="food">
                        
                        <img src={food.img} alt="" />
                        <h2>{food.title}</h2>
                        <div>
                            <p>{food.price}</p>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                   ))
                }
            </div>
        </section>
    )
}
export default OurDishes;
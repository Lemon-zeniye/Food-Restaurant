import { useState, useEffect } from "react";

import burger from "../../images/burger-one.png";
import noodel from "../../images/noodel.png";
import chicken from "../../images/chicken.png";

import "./Main.css";

const datas = [
    {
        title: "Hot Noodels",
        img: noodel,
        color: "black"
    },
    {
        title: "Fried Chicken",
        img: chicken,
        color: "yellow"
    },
    {
        title: "Nice Burger",
        img: burger,
        color: "green"
    }
]

const Main = () => {
    const [index, setIndex] = useState(0);
    useEffect(()=> {
        const time = setTimeout(() => {
            setIndex(preIndex => preIndex === datas.length - 1 ? 0 : preIndex + 1);
        }, 5000);
        return () => {
            clearTimeout(time)
        }
    }, [index])

  const style ={transform: `translate3d(${-index * 100}%, 0, 0)`};
    return(
        <div id="home" className="slideshow" >
            <div className="slider" style={style} >
                {
                    datas.map((data, index)=> (
                        <div key={index} className="one" >
                            <div className="dishes-div">
                                <div className="dishes">
                                    <h3>Our Spacial Dish</h3>
                                    <h1>{data.title}</h1>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Quo culpa aut commodi cumque voluptat cum ipsam qui necessitatibus facilis reicindis!</p>
                                    <button>Order Now</button>
                                </div>
                                <div className="img-div">
                                     <img src={data.img} alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="dots">
                {
                    datas.map((_, idx) => (
                        <div key={idx} className={`dot ${index === idx ? "active" : ""}`} onClick={()=> {
                            setIndex(idx);
                        }} ></div>
                    ))
                }
            </div>
        </div>
    )
}

export default Main;
import img from "../../images/steak.png"
import "./AboutUs.css";
const AboutUs = () => {
    return(
        <section id="about" className="section-two">
                <div className="aboutUs-title">
                    <p>About Us</p>
                    <h1>WHY CHOOSE US?</h1>
                </div>
                <div className="Us-container">
                    <div className="img">
                      <img src={img} alt="" />
                    </div>
                    <div className="discripton">
                        <h1>Best Food In The Country</h1>
                        <div className="paragraph">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis obcaecati voluptate neque autem quo culpa maiores. Reprehenderit, eveniet ut? Explicabo atque ipsa fugiat non cupiditate, quibusdam placeat eveniet laudantium accusamus!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi maiores dolores? Recusandae itaque dolor quis vel?</p>
                        </div>
                        <div className="buttons">
                            <button className="b-one">Free Delivery</button>
                            <button className="b-two">Easy Payment</button>
                            <button className="b-three">24/7 Service</button>
                        </div>
                        <button className="learn">Learn More</button>
                    </div>
                </div>
        </section>
    )
}
export default AboutUs;
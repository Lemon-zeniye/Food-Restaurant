// import { useState, useEffect } from "react";
import "./Customers.css";
import man from "../../images/man.png";
import avatar1 from "../../images/avatar-ali.png";
import avatar2 from "../../images/avatar-anisha.png";
import avatar3 from "../../images/avatar-richard.png";
import avatar4 from "../../images/avatar-shanai.png";
const Customers = () => {
    // const [index, setIndex] = useState(0);
    // useEffect(() => {
    //    const time =  setTimeout(() => {
    //         setIndex(previouse => previouse === 2 ? 0 : previouse + 1);
    //     }, 3000);
    //     return(() => {
    //         clearTimeout(time);
    //     })
    // }, [index]);

    // style will be add to card-container
    // style={{transform:`translate3d(-${index * 57}%, 0, 0)`}}


    return(
        <section id="review" className="section-three">
            <div className="customer-title">
                <p>Customer's Review</p>
                <h1>WHAT THEY SAY</h1>
            </div>
            <div className="container">
                <div className="card-container">
                    <div className="card">
                        <div>
                        <img src={man} alt="" />
                        <p className="name">John Deo</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsam neque aspernatur vel suscipit vitae ea voluptas veniam, maiores mollitia quasi at fuga architecto, debitis iste, nobis obcaecati esse accusamus?</p>
                    </div>
                    <div className="card">
                        <div>
                        <img src={avatar1} alt="" />
                        <p className="name">Ali</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsam neque aspernatur vel suscipit vitae ea voluptas veniam, maiores mollitia quasi at fuga architecto, debitis iste, nobis obcaecati esse accusamus?</p>
                    </div>
                    <div className="card">
                        <div>
                        <img src={avatar2} alt="" />
                        <p className="name">Anisha</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsam neque aspernatur vel suscipit vitae ea voluptas veniam, maiores mollitia quasi at fuga architecto, debitis iste, nobis obcaecati esse accusamus?</p>
                    </div>
                    <div className="card">
                        <div>
                        <img src={avatar3} alt="" />
                        <p className="name">Richard</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsam neque aspernatur vel suscipit vitae ea voluptas veniam, maiores mollitia quasi at fuga architecto, debitis iste, nobis obcaecati esse accusamus?</p>
                    </div>
                    <div className="card">
                        <div>
                        <img src={avatar4} alt="" />
                        <p className="name">Shanai</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsam neque aspernatur vel suscipit vitae ea voluptas veniam, maiores mollitia quasi at fuga architecto, debitis iste, nobis obcaecati esse accusamus?</p>
                    </div>
                    <div className="card">
                        <div>
                        <img src={man} alt="" />
                        <p className="name">John Deo</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsam neque aspernatur vel suscipit vitae ea voluptas veniam, maiores mollitia quasi at fuga architecto, debitis iste, nobis obcaecati esse accusamus?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Customers;
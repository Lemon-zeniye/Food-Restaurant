import "./Form.css";
const Form = () => {
    return(
        <section id="order" className="section-Four">
             <div className="form-title">
                 <p>Order Now</p>
                 <h1>FREE AND FAST</h1>
             </div>
            <div className="container-form">
                <div className="form-container">
                    <form className="form">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" placeholder="enter your name" />
                        <label htmlFor="order">Your Order</label>
                        <input type="text" placeholder="enter food name" />
                        <label htmlFor="number">How Much</label>
                        <input type="text" placeholder="how many orders" />
                        <label htmlFor="address">Your Address</label>
                        <textarea cols="100%" rows="50%" placeholder="enter your address"></textarea>
                    </form>
                    <form>
                        <label htmlFor="name">Your Number</label>
                        <input type="text" placeholder="enter your number" />
                        <label htmlFor="order">Additional Food</label>
                        <input type="text" placeholder="extra with food" />
                        <label htmlFor="number">Date And Time</label>
                        <input type="text" placeholder="dd-mm-yyyy" />
                        <label htmlFor="address">Your Address</label>
                        <textarea placeholder="enter your message"></textarea>
                    </form>
                </div>
                <button className="form-button">Order Now</button>
            </div>
             
        </section>
    )
}
export default Form;
import icon1 from "../../images/icon-facebook.svg";
import icon2 from "../../images/icon-instagram.svg";
import icon3 from "../../images/icon-twitter.svg";
import icon4 from "../../images/icon-youtube.svg";
import icon5 from "../../images/icon-pinterest.svg";
import "./Footer.css";
const Footer = () => {
    const dete = new Date().getFullYear();
    return(
        <div className="footer">
            <br />
            <div className="icons-img">
              <a href="https://instagram.com/endalk7.a/"><img src={icon2} alt="" /></a>  
              <a href="https://m.facebook.com/?_rdr"><img src={icon1} alt="" /></a>
              <img src={icon3} alt="" />
              <img src={icon4} alt="" />
              <img src={icon5} alt="" />
            </div>
            <br />
            <p>copy right {`${dete}`} @Endalk Abate</p>
        </div>
    )
}
export default Footer;
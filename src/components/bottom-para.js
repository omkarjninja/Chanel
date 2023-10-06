import "./bottom.css";
import one from "../assets/images/down1.jpg";
import two from "../assets/images/down2.jpg"
function Bottom(){
    return(
        <div className="btm-main-div">
            <div className="btm-first">
            <img className="products" src={one} width="100px" height="100px"></img>
            <p className="side-text">"Experience timeless sophistication with our Chanel quilted leather handbag – a symbol of luxury, elegance, and unmatched craftsmanship."</p>
            </div>
            <div className="btm-second">
            <img className="products second-pro" src={two} width="100px" height="100px"></img>
            <p className="side-text">"Indulge in timeless luxury with our exquisite quilted leather handbag, a true emblem of Chanel's enduring elegance and impeccable craftsmanship."</p>
            </div>
        </div>
    )
}
export default Bottom;
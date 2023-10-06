import "./navbar.css";
import call from "../assets/images/call.png"
function Navbar(){
    return(
        <div className="main-nav">
            <div className="nav first">
                <ul className="list">
                    <li><a href="https://www.chanel.com/in/fragrance/">Perfumes</a></li>
                    <li><a href="https://www.chanel.com/in/about-chanel/the-history/">About us</a></li>
                    <li><a href="https://www.chanel.com/in/high-jewellery/">Products</a></li>
                    <li><a href="https://www.chanel.com/in/fashion/">Images</a></li>
                </ul>
            </div>
            <div className="nav second">
                <ul className="gram">
                <li><img src={call} width="20px"></img></li>
                <li><a  className="contact" href="mailto:ojadhav250@gmail.com">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;
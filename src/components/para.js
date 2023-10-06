import "./text.css";
import keys from "../assets/images/key.png";
import like from "../assets/images/like.png";
import bag from "../assets/images/bag.png"
function Para(){
    return(
        <div>
            <div className="para-grp">
                <p className="para">Welcome to the world of Chanel, where fashion transcends time and trends, and sophistication is a way of life. Explore our exquisite collection of haute couture, ready-to-wear, and accessories, all meticulously crafted to reflect the enduring legacy of Coco Chanel.</p>
                <div className="key-grp">
                    <div className="small-logo"><img className="small-img" src={keys} width="20px"></img></div>
                    <div className="small-logo"><img className="small-img" src={like} width="20px"></img></div>
                    <div className="small-logo"><img className="small-img" src={bag} width="20px"></img></div>
                </div>
            </div>
        </div>
    )
}
export default Para;
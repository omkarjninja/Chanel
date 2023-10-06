import "./new.css";
import main from "../assets/images/main.jpg";
import one from "../assets/images/down1.jpg";
import two from "../assets/images/down2.jpg";
import arrow from "../assets/images/arrow.png";
import logo from "../assets/images/chanel.png";
function News(){
    return(
        <div>
<div className="new-main-body">
            <div className="img-grp">
                <div className="big-img">
                    <img className="maining" src={main} width="500px"></img>
                </div>
                <div className="side-div-grp">
                <div className="collect">
                    <div className="side-div div1">
                        <img className="side-img" src={one} width="100px"></img>
                        <p className="side-para-new">"Experience timeless sophistication with our Chanel quilted leather handbag – a symbol of luxury, elegance, and unmatched craftsmanship."</p>
                        <img className="arrow" src={arrow} width="20px"></img>
                    </div>
                </div>
                <div className="collect">
                    <div className="side-div div2">
                        <img className="side-img" src={two} width="100px"></img>
                        <p className="side-para-new">"Indulge in timeless luxury with our exquisite quilted leather handbag, a true emblem of Chanel's enduring elegance and impeccable craftsmanship."</p>
                        <img className="arrow" src={arrow} width="20px"></img>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        <center>
        <div className="last">
        <img className="logo" src={logo} width="500px"></img>
        </div>
        </center>
        
        </div>
        
    )
}
export default News;
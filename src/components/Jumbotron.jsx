import "../../public/fonts.css";
import "../assets/styles/Jumbotron.css"
import jumbotronImage from "../assets/images/jumbotron-img.jpeg";

const Jumbotron = () => {
  return (
    <div className="jumbotron" id="home">
      <div className="jumbotronTitle">
        <h1 className="title dm-serif-display-regular">
          <span>Keripik Pangsit</span>yang Terenak di Semarang
        </h1>
        <p className="pt-serif-regular">
          Hidangan comfort food khas Indonesia yang terbuat dari bubur nasi lembut dengan topping suwiran ayam, irisan cakwe, taburan seledri, bawang goreng, dan kerupuk.
        </p>
      </div>
      <div className="jumbotronImage">
        <img src={jumbotronImage} alt="jumbotron image" loading="lazy"/>
      </div>
    </div>
  );
};

export default Jumbotron;
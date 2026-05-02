import "../../public/fonts.css";
import "../assets/styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <h2 className="quotes abril-fatface-regular">
        “Keripik Pangsit yang <br /> 
        membuatanda terus <br />
        merasa Lapar!”
      </h2>
      <p className="dm-serif-display-regular"> - Support UMKM </p>
      <div className="promotion">
        <img src="" alt="icon image" loading="lazy"/>
        <p className="abril-fatface-regular">Langsung aja buruan</p>
        <a href="#" className="poppins-regular">Checkout!</a>
      </div>
      <div className="filter"></div>
    </div>
  );
};

export default HeroSection;
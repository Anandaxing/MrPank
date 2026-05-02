import "../../public/fonts.css";
import "../assets/styles/About.css";
import AboutImg from "../assets/images/about-img.jpeg";

const About = () => {
  return (
    <div className="aboutSection" id="about">
      <h1 className="aboutTitle dm-serif-display-regular">Tentang Kami</h1>
      <div className="aboutContent">
        <div className="aboutImage">
          <img src={AboutImg} alt="About Image" loading="lazy"/>
        </div>
        <div className="aboutDescription">
          <h2 className="dm-serif-display-regular">Mengapa memilih Mr. Pank?</h2>
          <p className="pt-serif-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus sed. Error, incidunt quidem laboriosam delectus autem enim nisi corrupti porro necessitatibus rem minus eveniet aperiam saepe facilis veritatis dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus corrupti aliquam debitis voluptates quia similique odit quo nobis, minima quis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
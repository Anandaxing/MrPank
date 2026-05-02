import "../assets/styles/NavigationBar.css";
import "../../public/fonts.css";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const NavigationBar = () => {
  let scrollMinimum = 20;
  let scrollMinimize = 100;
  window.onscroll = function() {
    document.querySelector(".navbar").classList.add("scrollMode");
    if (document.body.scrollTop > scrollMinimize || document.documentElement.scrollTop > scrollMinimize) {
      document.querySelector(".navbar").classList.add("minimize");
    } else if (document.body.scrollTop > scrollMinimum || document.documentElement.scrollTop > scrollMinimum) {
      document.querySelector(".navbar").classList.add("scrollMode");
    } else {
      document.querySelector(".navbar").classList.remove("scrollMode");
      document.querySelector(".navbar").classList.remove("minimize");
    }
  }

  return (
    <div className="navbar pt-serif-regular">
      <div className="pagination">
        <a href="#home" id="home-btn">Home</a>
        <a href="#about" id="about-btn">About</a>
        <a href="#products" id="product-btn">Products</a>
        <a href="#contact" id="contact-btn">Contact</a>
      </div>
      <input type="checkbox" id="menuBtn"/>
      <label for="menuBtn">
        <div id="menuIcon"><IoMenu /></div>
        <div id="closeIcon"><IoClose /></div>
      </label>
      <div className="logo">
        <h1 className="logoText abril-fatface-regular">Mr. <span>Pank</span></h1>
      </div>
    </div>
  );
};

export default NavigationBar;
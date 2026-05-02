import "../../public/fonts.css";
import "../assets/styles/Footer.css";
import { IoGlobeOutline } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return(
    <div className="footer">
      <div className="footerMedia">
        <a href="/"><IoGlobeOutline/></a>
        <a href="https://www.instagram.com/mrpank.ofc?igsh=YzR5NWNyanJ0NHRu" target="blank"><AiFillInstagram /></a>
        <a href="https://api.whatsapp.com/send/?phone=62089666196910&text&type=phone_number&app_absent=0&wame_ctl=1&fbclid=PAY2xjawHRyThleHRuA2FlbQIxMAABpiNmdZV74jPh2YQEgnud248h-or0m8an7jRrmB-w3Pp65t22FQgP8ZIP3A_aem_hLLvfO2MzNZw2jGGo8tYrg" target="blank"><IoLogoWhatsapp /></a>
      </div>
      <div className="footerPagination poppins-regular">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="copyright poppins-regular">
        <p>Created by <span>Ananda12</span> &copy; 2024.</p>
      </div>
    </div>
  );
};

export default Footer;
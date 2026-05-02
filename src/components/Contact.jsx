import "../../public/fonts.css";
import "../assets/styles/Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return(
    <div className="contactSection" id="contact">
      <div className="heading">
        <h1>Hubungi Kami</h1>
      </div>
      <div className="contactInfo">
        <div className="contactMedia">
          <img src="images/profile-picture.jpg" alt="pfp image" />
          <div className="media">
            <a href="https://maps.app.goo.gl/ZS5T6eJBtYBDA3XR9" target="blank" className="poppins-regular"> <FaLocationDot/> <span>Semarang, ID</span></a>
            <a href="https://www.instagram.com/mrpank.ofc?igsh=YzR5NWNyanJ0NHRu" target="blank" className="poppins-regular"> <AiFillInstagram/> <span>Instagram</span></a>
            <a href="https://api.whatsapp.com/send/?phone=62089666196910&text&type=phone_number&app_absent=0&wame_ctl=1&fbclid=PAY2xjawHRyThleHRuA2FlbQIxMAABpiNmdZV74jPh2YQEgnud248h-or0m8an7jRrmB-w3Pp65t22FQgP8ZIP3A_aem_hLLvfO2MzNZw2jGGo8tYrg" target="blank" className="poppins-regular"> <IoLogoWhatsapp/> <span>+6289666196910</span></a>
          </div>
        </div>
        <div className="contactMap">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112196.27495984084!2d110.3346626474609!3d-7.024722607585843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b9da5cb9f2!2sKota%20Semarang%2C%20Jawa%20Tengah!5e1!3m2!1sid!2sid!4v1734586299236!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
        </div>
      </div>
    </div>
  );
};

export default Contact;
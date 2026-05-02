import "../assets/styles/NavigationBar.css";
import { FaWhatsapp } from "react-icons/fa";

const WaButton = () => {
  return(
    <a href="https://api.whatsapp.com/send/?phone=62089666196910&text&type=phone_number&app_absent=0&wame_ctl=1&fbclid=PAY2xjawHRyThleHRuA2FlbQIxMAABpiNmdZV74jPh2YQEgnud248h-or0m8an7jRrmB-w3Pp65t22FQgP8ZIP3A_aem_hLLvfO2MzNZw2jGGo8tYrg" target="blank" className="waButton">
      <FaWhatsapp />
    </a>
  );
};

export default WaButton;
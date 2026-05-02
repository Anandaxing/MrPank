import "../../public/fonts.css";
import "../assets/styles/Product.css";
import { products } from "./Products/products";
import { FaShoppingCart } from "react-icons/fa";

const Product = () => {
  return(
    <div className="productSection" id="products">
      <div className="heading">
        <h1 className="dm-serif-display-regular">Produk Kami</h1>
        <p className="pt-serif-regular">Kami memiliki berbagai varian rasa.</p>
      </div>
      <div className="contents">
        {products.map((product) => {
          return (
            <div className="content">
              <div className="productImageContainer">
                <img src={product.image} alt="product images" loading="lazy"/>
                <p className="price poppins-regular">{product.price}</p>
              </div>
              <h2 className="productName dm-serif-display-regular">{product.name}</h2>
            </div>
          );
        })}
      </div>
      <a href="https://api.whatsapp.com/send/?phone=62089666196910&text&type=phone_number&app_absent=0&wame_ctl=1&fbclid=PAY2xjawHRyThleHRuA2FlbQIxMAABpiNmdZV74jPh2YQEgnud248h-or0m8an7jRrmB-w3Pp65t22FQgP8ZIP3A_aem_hLLvfO2MzNZw2jGGo8tYrg" target="blank" className="poppins-regular"> <FaShoppingCart/> <span>Beli Sekarang!</span></a>
    </div>
  );
};

export default Product;
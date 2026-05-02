import NavigationBar from "./components/NavigationBar";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WaButton from "./components/WaButton";

const App = () => {
  return (
    <>
      <NavigationBar />
      <WaButton />
      <Jumbotron />
      <About />
      <HeroSection />
      <Product />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
import "./App.css";
import Herosection from "./component/herosection/Herosection";
import Header from "./component/header/Header";
import Info from "./component/info/Info";
import Discover from "./component/discover/Discover";
import Subscriber from "./component/subscriber/Subscriber";
import EvData from "./component/evdata/EvData";
import JuiceNetFeatures from "./component/juicenetfeatures/JuiceNetFeatures";
import JuiceNetApp from "./component/juicenetapp/JuiceNetApp";
import Products from "./component/products/Products";
import BlogSlider from "./component/blogslider/BlogSlider";
import Footer from "./component/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Herosection />
      <Info />
      <Discover />
      <Subscriber />
      <EvData />
      <JuiceNetFeatures />
      <JuiceNetApp />
      <Products />
      <BlogSlider />
      <Footer />
    </div>
  );
}

export default App;

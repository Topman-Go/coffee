// import Button from './components/Button';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import About from './components/About';
import Testimonial from './components/Testimonial';
import Ourblog from './components/Ourblog';
import Order from './components/Order';
import Medianav from './components/Medianav';

function App() {
  return (
    <div className="App">
      <Medianav />
      <Navbar />
      {/* <Button /> */}
      <Product />
      <About />
      <Testimonial />
      <Ourblog />
      <Order />
    </div>
  );
}

export default App;

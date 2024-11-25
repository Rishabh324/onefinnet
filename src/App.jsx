import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroBanner />
      <ProductList />
    </div>
  );
};

export default App;

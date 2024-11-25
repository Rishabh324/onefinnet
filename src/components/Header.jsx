const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <div className="text-3xl">🚲</div>
      <nav>
        <ul className="flex space-x-8">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#bicycles" className="hover:text-gray-300">Bicycles</a></li>
          <li><a href="#accessories" className="hover:text-gray-300">Accessories</a></li>
          <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
      <div className="text-lg">
        $0.00 <span role="img" aria-label="cart">🛒</span>
      </div>
    </header>
  );
};

export default Header;

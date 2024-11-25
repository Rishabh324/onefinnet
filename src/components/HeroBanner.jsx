import Banner from '../assets/1.jpg';
const HeroBanner = () => {
  return (
    <section className="relative bg-cover bg-center h-[60vh] flex items-center justify-start text-white" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="bg-black/60 p-8 rounded-md mx-4 h-full flex flex-col justify-between w-[50%]">
        <h2 className="text-lg font-bold mb-2">Newly Launched</h2>
        <h1 className="text-5xl font-bold mb-4">Kryo X26 MTB</h1>
        <div className="mb-4">
          <p className="font-semibold">Specifications:</p>
          <ul className="list-disc list-inside text-gray-200">
            <li>Lightweight 18&quot; Frame</li>
            <li>Steel Suspension Fork</li>
            <li>Steel Hardtail Frame</li>
          </ul>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-max">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;

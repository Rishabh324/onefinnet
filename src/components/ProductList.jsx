const products = [
  { id: 1, name: 'Kryo X26 MTB - Model K', price: 350, image: '2.jpg' },
  { id: 2, name: 'Kryo X26 MTB - Model X', price: 350, image: '2.jpg' },
  { id: 3, name: 'Kryo X26 MTB - Model Y', price: 350, image: '2.jpg' },
  { id: 4, name: 'Kryo X26 MTB - Model Z', price: 350, image: '2.jpg' },
];

const ProductList = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
            <img src={`./src/assets/${product.image}`} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">${product.price.toFixed(2)}</p>
            <p className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;

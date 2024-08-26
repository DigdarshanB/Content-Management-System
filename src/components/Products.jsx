import React from "react";

const products = [
    {
         id: 1,
        image: '/images/p1.jpg',
        name: 'Camping Tent',
        price: '$300',
        description: 'Your portable home in the wild.',
    },
    {
        id: 2,
       image: '/images/p2.jpg',
       name: 'Survival knife',
       price: '$25',
       description: 'To save yourself from predators lurking in the wilderness.',
   },
   {
    id: 3,
   image: '/images/p3.jpg',
   name: 'RV',
   price: '$250,000',
   description: 'Iconic RV from Breaking Bad; one in the world.',
},
];

const Products = () => {
    return(
        <section className="py-10 bg-gray-100">
             <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <span className="text-lg font-bold text-gray-900">{product.price}</span>
            </div>
          ))}
        </div>
      </div>
        </section>
    )
}

export default Products;

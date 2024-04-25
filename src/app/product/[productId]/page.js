import React from 'react';

// Sample product data
const products = [
    {
        id: 'eggs',
        name: 'Organic Eggs',
        description: 'Fresh organic eggs laid by free-range chickens. Rich in protein and essential nutrients, these eggs are perfect for your breakfast or baking needs.'
    },
    {
        id: 'fruits-vegetables',
        name: 'Fresh Fruits and Vegetables',
        description: 'A variety of fresh fruits and vegetables sourced directly from local farms. Packed with vitamins, minerals, and antioxidants, these produce items are essential for a healthy diet.'
    },
    {
        id: 'milk',
        name: 'Farm Fresh Milk',
        description: 'Pure and creamy milk from grass-fed cows. Our milk is pasteurized and homogenized to maintain its freshness and nutritional value. Enjoy it as a refreshing beverage or use it in your favorite recipes.'
    },
    {
        id: 'honey',
        name: 'Natural Honey',
        description: 'Pure, raw honey harvested from local bee farms. Our honey is unprocessed and free from additives, preserving its natural flavor and health benefits. Use it as a sweetener, spread, or natural remedy.'
    },
    {
        id: 'wine',
        name: 'Fine Wines',
        description: 'An exquisite selection of fine wines from renowned vineyards around the world. From robust reds to crisp whites, our wines are carefully curated to complement any occasion or meal.'
    },
    {
        id: 'meat',
        name: 'Premium Meat Cuts',
        description: 'Premium-quality meat cuts sourced from trusted suppliers. Our meats are tender, flavorful, and responsibly sourced, ensuring a satisfying and delicious dining experience.'
    },
];

const Productdets = ({ params }) => {
    // Find the product with the matching productId
    const product = products.find(product => product.id === params.productId);

    if (!product) {
        return <div>Sorry, the product you are looking for is not available.</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>
    );
};

export default Productdets;

// page.js

// Importing necessary modules and components
import React from "react"; // Import React library
import RootLayout from "./layout"; // Import RootLayout component
import Link from 'next/link'; // Import Link from Next.js

// Array containing product data
const products = [
    { id: 1, name: 'Eggs', imageUrl: '/eggs.jpg', slug: 'eggs' },
    { id: 2, name: 'Fruits and Vegetables', imageUrl: '/fruits_vegetables.jpg', slug: 'fruits-vegetables' },
    { id: 3, name: 'Milk', imageUrl: '/milk.jpg', slug: 'milk' },
    { id: 4, name: 'Honey', imageUrl: '/honey.jpg', slug: 'honey' },
    { id: 5, name: 'Wine', imageUrl: '/wine.jpg', slug: 'wine' },
    { id: 6, name: 'Meat', imageUrl: '/meat.jpg', slug: 'meat' },
];

// Functional component representing the Index page
const IndexPage = () => {
    // Render JSX for the Index page
    return (
        <RootLayout> {/* Render RootLayout component */}
            {/* Container div for the content */}
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                {/* Grid layout for product items */}
                <div className="grid grid-cols-3 gap-6">
                    {/* Map over products array to render each product */}
                    {products.map(product => (
                        // Wrap each product in a Next.js Link component for client-side navigation
                        <Link href={`/product/${product.slug}`} key={product.id}>
                            {/* Individual product item */}
                            <div key={product.id} className="block">
                                {/* Styling for product container */}
                                <div className="bg-green-200 rounded-lg shadow-md p-4">
                                    {/* Product image */}
                                    <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-md" />
                                    {/* Product name */}
                                    <h2 className="text-xl font-semibold">{product.name}</h2>
                                </div>
                            </div>
                        </Link>

                    ))}
                </div>
            </div>
        </RootLayout>
    );
};

// Export IndexPage component as the default export
export default IndexPage;

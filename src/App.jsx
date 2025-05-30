import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import './App.css';

const App = () => {
    // Static product data
    const [products, setProducts] = useState([{
        id: 1,
        name: "Wireless Headphones",
        description: "High-quality sound with noise cancellation.",
        image: "https://picsum.photos/300/200?random=1",
        avgRating: 4.2,
        totalRatings: 10
      },
      {
        id: 2,
        name: "Smartwatch",
        description: "Track your fitness and notifications.",
        image: "https://picsum.photos/300/200?random=2",
        avgRating: 3.8,
        totalRatings: 15
      },
      {
        id: 3,
        name: "Portable Speaker",
        description: "Powerful sound in a compact design.",
        image: "https://picsum.photos/300/200?random=3",
        avgRating: 4.5,
        totalRatings: 8
      }]);

    // Handles rating submission
    const handleRatingSubmit = (productId, newRating) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) => {
                if (product.id === productId) {
                    const newTotalRatings = product.totalRatings + 1;
                    const newAvgRating = ((product.avgRating * product.totalRatings) + newRating) / newTotalRatings;
                    return { ...product, avgRating: newAvgRating, totalRatings: newTotalRatings };
                }
                return product;
            })
        );
    };

    return (
        <div style={{ padding: "20px" }} >
            <h1>Product Ratings</h1>
            <div  className="container">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onRatingSubmit={handleRatingSubmit} />
                ))}
            </div>
        </div>
    );
};

export default App;

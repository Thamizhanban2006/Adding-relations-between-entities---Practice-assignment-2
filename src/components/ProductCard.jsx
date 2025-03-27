import React from "react";
import RatingWidget from "./RatingWidget";

const ProductCard = ({ product, onRatingSubmit }) => {
    return (
        <div  className='card' style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", textAlign: "center", width: "200px" }}>
            <img src={product.image} alt={product.name} width="150" height="150" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>⭐ {product.avgRating.toFixed(1)} ({product.totalRatings} ratings)</p>
            <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
        </div>
    );
};

export default ProductCard;

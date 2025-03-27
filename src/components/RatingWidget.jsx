import React, { useState } from "react";

const RatingWidget = ({ productId, onRatingSubmit }) => {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleSubmit = () => {
        if (rating < 1 || rating > 5) {
            alert("Please select a rating between 1 and 5.");
            return;
        }
        onRatingSubmit(productId, rating);
        setRating(0); // Reset after submission
    };

    return (
        <div style={{ textAlign: "center", fontSize: "24px", marginTop: "10px" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "5px", cursor: "pointer" }}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        style={{ color: star <= (hoveredRating || rating) ? "gold" : "gray" }}
                    >
                        ★
                    </span>
                ))}
            </div>
            <button onClick={handleSubmit} disabled={rating === 0} style={{ marginTop: "10px", padding: "5px 10px" }}>
                Submit Rating
            </button>
        </div>
    );
};

export default RatingWidget;

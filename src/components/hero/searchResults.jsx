import React from "react";
// import "./SearchResults.css"; // Add some styling for disabled results

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((hotel, index) => {
        // const isDisabled = hotel.vendor1 === null || hotel.price1 === null;
        const isDisabled = false;
        return (
          <div key={hotel.hotelId || index} className={`result-item ${isDisabled ? "disabled" : ""}`}>
            <h3>{hotel.name}</h3>
            <p><strong>Rating:</strong> {hotel.reviews.rating} ⭐ ({hotel.reviews.count} reviews)</p>
            <p><strong>Phone:</strong> {hotel.telephone}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;

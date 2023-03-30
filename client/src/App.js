import React, { useState, useEffect } from "react";

const App = () => {
  const [listings, setListings] = useState([]);
  const fetchListings = async () => {
    const response = await fetch("http://localhost:5001/listings");
    const data = await response.json();
    setListings(data);
  };
  useEffect(() => {
    fetchListings();
  }, []);
  return (
    <div>
      {listings.length > 0 ? (
        <ul>
          {listings.map((listing) => (
            <li key={listing._id}>{listing.title}</li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default App;

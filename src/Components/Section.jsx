import React, { useContext } from "react";
import { counterContext } from "../Context/context";

const Section = () => {
  const value = useContext(counterContext); // Access the context

  // Sample data of items
  const data = [
    { id: 5001, title: "Item 1", imageUrl: "https://via.placeholder.com/50" },
    { id: 5002, title: "Item 2", imageUrl: "https://via.placeholder.com/50" },
    { id: 5003, title: "Item 3", imageUrl: "https://via.placeholder.com/50" },
    { id: 5004, title: "Item 4", imageUrl: "https://via.placeholder.com/50" },
    { id: 5005, title: "Item 5", imageUrl: "https://via.placeholder.com/50" },
    { id: 5006, title: "Item 6", imageUrl: "https://via.placeholder.com/50" },
    { id: 5007, title: "Item 7", imageUrl: "https://via.placeholder.com/50" },
    { id: 5008, title: "Item 8", imageUrl: "https://via.placeholder.com/50" },
  ];
 
  // Filter data based on the search term from context
  const filteredData = data.filter((item) =>
    item.title
      .toLowerCase()
      .includes(
        value.searchTerm.toLowerCase() || value.searchTerm.toUpperCase()
      )
  );

  // Function to handle adding items to the cart
  const handleAddToCart = (item) => {
    value.setCartItems((prevCartItems) => [...prevCartItems, item]);
    value.setCount((count) => count + 1); // Increment count (if needed)
  };

  return (
    <div className="flex flex-wrap gap-10 justify-center mt-28  scrollbar-styled p-4">
    
      {filteredData.map((item, indi) => (
        <div
          key={item.id}
          className="w-1/5 h-auto flex flex-col items-center bg-purple-600 rounded-md"
        >
          {/* Image container */}
          <div className="flex justify-center items-center h-[40vh] w-full">
            <img
              src={item.imageUrl}
              alt={item.title}
              id={indi}
              className="mb-2 w-1/2"
            />
          </div>

          {/* Text container outside the image container */}
          <div className="bg-blue-800 text-green-900 w-full h-22 flex flex-col justify-center items-center mt-5 p-2 rounded-b-md">
            <p className="text-white">{item.title}</p>
            <h1 className="text-white">{item.id}</h1>
            <button
              onClick={() => handleAddToCart(item)} // Add item to cart
              className="px-7 py-1 bg-green-300 hover:bg-lime-400 text-white font-bold rounded-md"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section;

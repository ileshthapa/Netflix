import React from "react";
// import cards_data from "../assets/cards_data";



const Titlecard = () => {
  return (
    <div className="titlecard px-10 py-8">
      <h2 className="text-2xl font-bold text-white mb-6">Popular on Netflix</h2>
      <div className="card_list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cards_data.map((card, index) => (
          <div
            className="card bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
            key={index}
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-40 object-cover"
            />
            <p className="text-white text-center py-2">{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Titlecard;

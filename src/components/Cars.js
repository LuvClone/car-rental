import React, { useState } from "react";
import { cars } from "./data"; 

const Cars = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(cars);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredCars);
  };

  return (
    <section className="bg-orange-400 pb-10 pt-20 lg:pb-20 lg:pt-[120px] flex justify-center items-center">
      <div className="container">
        <div className="mb-8 flex justify-center items-center flex-wrap">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Car, model, or brand"
            className="px-4 py-2 mr-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Max, monthly payment"
            className="px-4 py-2 mr-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Make year"
            className="px-4 py-2 mr-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
          />
          <button
            onClick={handleSearchSubmit}
            className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none mb-2"
          >
            Search
          </button>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {searchResults.map((car) => (
            <SingleCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SingleCard = ({ car }) => {
  const { images, name, year, member, type, range } = car;

  return (
    <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-md duration-300">
      <img src={images} alt="" className="w-full" />
      <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
        <h3>
          <a
            href="/#"
            className="mb-4 block text-xl font-semibold text-gray-800 hover:text-blue-500 dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
          >
            {name}
          </a>
        </h3>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm italic text-gray-500">Members: {member}</p>
            <p className="text-sm italic text-gray-500">Year: {year}</p>
          </div>
          <div>
            <p className="text-sm italic text-gray-500">Type: {type}</p>
            <p className="text-sm italic text-gray-500">Range: {range}</p>
          </div>
        </div>
        <div className="mb-4">
          {/* Render additional details here if needed */}
        </div>
        <a
          href="#"
          className="inline-block rounded-full border border-gray-300 px-7 py-2 text-base font-medium text-gray-700 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:border-gray-600 dark:text-gray-400 dark:hover:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default Cars;


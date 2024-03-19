// import React, { useState } from "react";
// import { cars } from "./data"; 

// const Cars = () => {
//   // const [year, setYear] = useState(""); // State to store selected year
//   // const [type, setType] = useState("");
//   // const [filterCar, setFilterCar] = useState(cars); // State to store filtered cars

//   // // Extracting unique years from the cars data
//   // const uniqueYears = [...new Set(cars.map((car) => car.year))];
//   // const uniqueTypes = [...new Set(cars.map((car) => car.type))];

//   // // Function to handle search/filtering
//   // const handleSearch = () => {
//   //   const newFilterCar = cars.filter(
//   //     (car) =>
//   //       (year === "" || car.year === year) && (type === "" || car.type === type)
//   //   );
//   //   setFilterCar(newFilterCar);
//   // };

//   const [year, setYear] = useState(""); // State to store selected year
//   const [type, setType] = useState("");
//   const [filterCar, setFilterCar] = useState(cars); // State to store filtered cars

//   // Extracting unique years from the cars data
//   const uniqueYears = [...new Set(cars.map((car) => car.year))];
//   const uniqueTypes = [...new Set(cars.map((car) => car.type))];

//   // Function to handle search/filtering
//   const handleSearch = () => {
//     const newFilterCar = cars.filter(
//       (car) =>
//         (year === "" || car.year === year) && (type === "" || car.type === type)
//     );
//     setFilterCar(newFilterCar);
//   };

//   return (
//     <section className="bg-orange-400 pb-10 pt-20 lg:pb-20 lg:pt-[120px] flex justify-center items-center">
//       <div className="container">
//         {
//         /* <div className="mb-8 flex justify-center items-center flex-wrap">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Car, model, or brand"
//             className="px-4 py-2 mr-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
//           />
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Max, monthly payment"
//             className="px-4 py-2 mr-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
//           />
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Make year"
//             className="px-4 py-2 mr-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
//           />
//           <button
//             onClick={handleSearchSubmit}
//             className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none mb-2"
//           >
//             Search
//           </button>
//         </div> */}
//         <form className="justify-center">
//             <div>
//               <label>Make Year</label>
//               <select
//                 id="Year"
//                 value={year}
//                 onChange={(e) => setYear(e.target.value)}
//               >
//                 <option value="">Year</option>
//                 {uniqueYears.map((year) => (
//                   <option key={year} value={year}>
//                     {year}
//                   </option>
//                 ))}
//               </select>
//               <label>Make Type</label>
//               <select
//                 id="Type"
//                 value={type}
//                 onChange={(e) => setType(e.target.value)}
//               >
//                 <option value="">Type</option>
//                 {uniqueTypes.map((type) => (
//                   <option key={type} value={type}>
//                     {type}
//                   </option>
//                 ))}
//               </select>
//               <button
//                 className="bg-indigo-400"
//                 type="button"
//                 onClick={handleSearch}
//               >
//                 Search
//               </button>
//             </div>
//           </form>


//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
//             <SingleCard/>
//         </div>
//       </div>
//     </section>
//   );
// };

// const SingleCard = ({ car }) => {
//   const { images, name, year, member, type, range } = car;

//   return (
//     <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-md duration-300">
//       <img src={images} alt="" className="w-full" />
//       <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
//         <h3>
//           <a
//             href="/#"
//             className="mb-4 block text-xl font-semibold text-gray-800 hover:text-blue-500 dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
//           >
//             {name}
//           </a>
//         </h3>
//         <div className="flex justify-between mb-4">
//           <div>
//             <p className="text-sm italic text-gray-500">Members: {member}</p>
//             <p className="text-sm italic text-gray-500">Year: {year}</p>
//           </div>
//           <div>
//             <p className="text-sm italic text-gray-500">Type: {type}</p>
//             <p className="text-sm italic text-gray-500">Range: {range}</p>
//           </div>
//         </div>
//         <div className="mb-4">
//           {/* Render additional details here if needed */}
//         </div>
//         <a
//           href="#"
//           className="inline-block rounded-full border border-gray-300 px-7 py-2 text-base font-medium text-gray-700 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:border-gray-600 dark:text-gray-400 dark:hover:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
//         >
//           View Details
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Cars;


import React, { useState } from "react";
import { cars } from "./data"; 

const Cars = () => {
  const [year, setYear] = useState(""); // State to store selected year
  const [type, setType] = useState("");
  const [filterCar, setFilterCar] = useState(cars); // State to store filtered cars

  // Extracting unique years and types from the cars data
  const uniqueYears = [...new Set(cars.map((car) => car.year))];
  const uniqueTypes = [...new Set(cars.map((car) => car.type))];

  // Function to handle search/filtering
// Function to handle search/filtering
const handleSearch = () => {
  const newFilterCar = cars.filter(
    (car) =>
      (year === "" || car.year.toString() === year) && (type === "" || car.type === type)
  );
  setFilterCar(newFilterCar);
};

  return (
    <section className="bg-orange-400 pb-10 pt-20 lg:pb-20 lg:pt-[120px] flex justify-center items-center ">
      <div className="container">
      <form className="flex justify-center items-center mb-8">
  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden hover:bg-white">
    <select
      id="Year"
      value={year}
      onChange={(e) => setYear(e.target.value)}
      className="px-3 py-2 bg-white text-gray-800 focus:outline-none"
    >
      <option value="">Year</option>
      {uniqueYears.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
    <select
      id="Type"
      value={type}
      onChange={(e) => setType(e.target.value)}
      className="px-3 py-2 bg-white text-gray-800 focus:outline-none"
    >
      <option value="">Type</option>
      {uniqueTypes.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
    <button
      className="px-4 py-2 bg-white text-black font-semibold hover:bg-white focus:outline-none"
      type="button"
      onClick={handleSearch}
    >
      Search
    </button>
  </div>
</form>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {filterCar.map((car, index) => (
            <SingleCard key={index} car={car} />
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

// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// export default function TipsPage({ options }) {
//   return (
//     <div>
//       <h1>{options.title}</h1>
//       <h2>{options.subtitle1}</h2>
//       <h2>{options.subtitle2}</h2>
//       {/* Add more elements as needed */}
//     </div>
//   );
// }

// // Parent Component
// function ParentComponent() {
//   const query = useQuery();
//   let options;

//   const queryStrategy = query.get("strategy");

//   if (queryStrategy === "nutrition") {
//     options = {
//       title: "Nutrition Tips",
//       subtitle1: "Benefits of Omega-3s",
//       subtitle2: "Calorie Burning Blends",
//       // Add more subtitles or options as needed
//     };
//   } else if (queryStrategy === "relaxation") {
//     options = {
//       title: "Relaxation Sounds",
//       subtitle1: "Rainy Days",
//       subtitle2: "Ocean Waves",
//       // Add more subtitles or options as needed
//     };
//   } else {
//     // Handle other strategies or set a default options object
//   }

//   return <TipsPage options={options} />;
// }

// // Link to this page
// <Link to="/tips?strategy=nutrition">Improve your nutrition!</Link>

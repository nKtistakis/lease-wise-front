import _fetch from ".";
// import Vehicle from "../constructors/vehicle";

export async function fetchVehicles(vehicle) {
  const url = `${process.env.REACT_APP_API_URL}/getVehicles`;

  return _fetch(url, vehicle);
}

// module.exports = {
//   fetchVehicles,
// };

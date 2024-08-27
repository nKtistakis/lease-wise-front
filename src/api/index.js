export async function getVehicles(query = "") {
  const url = process.env.REACT_APP_API_URL + "/vehicles/total" + query;

  try {
    console.log(url);

    const res = await fetch(url);
    const response = await res.json();

    if (!res.ok || !response.success) {
      throw new Error(
        `Response received from API was: ${res.status} - ${res.statusText}, and/or "success": ${response.success}`
      );
    }

    return response.data;
  } catch (err) {
    console.error("Fetch error:", err);
    throw err; // Re-throw the error to be caught by `useQuery`
  }
}

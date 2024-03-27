export const exerciseOptions = {
  method: "GET",
  params: { limit: "1000" },
  headers: {
    "X-RapidAPI-Key": "f61f27ef04mshf33829e4a7d8513p18e756jsnacaaf0faf4ee",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();

  return data;
};

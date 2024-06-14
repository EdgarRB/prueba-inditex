const FetchFunction = async (url: string) => {
  const allOrigins = `https://api.allorigins.win/get?url=${encodeURIComponent(
    url
  )}`;
  const response = await fetch(allOrigins);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  return response.json().then((data) => {
    return JSON.parse(data.contents);
  });
};

export default FetchFunction;

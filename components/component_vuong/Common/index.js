export const conventToCurrency = (price) =>
   Number(price).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
   });
export const convertObjectToParams = (obj) =>
   Object.entries(obj)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");


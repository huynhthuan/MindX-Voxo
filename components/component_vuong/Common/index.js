export const conventToCurrency = (price) =>
   Number(price).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
   });

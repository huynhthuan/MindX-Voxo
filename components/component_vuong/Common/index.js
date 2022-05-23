export const conventToCurrency = (price) =>
   Number(price).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
   });
export const convertObjectToParams = (obj) =>
   Object.entries(obj)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");

export const filter_meta_data =(meta_data,keyTotal,keyFirst,keySecond)=>{
   let arrFilter=[]
   const totalItem = meta_data.filter((item, index) => item.key === keyTotal)[0]?.value;
   for (let index = 0; index < totalItem; index++) {
      const valueFirst = meta_data.filter((item) => item.key === `${keyTotal}_${index}_${keyFirst}`)[0]?.value;
      const valueSecond = meta_data.filter((item) => item.key === `${keyTotal}_${index}_${keySecond}`)[0]?.value;
      arrFilter.push({ [keyFirst]:valueFirst, [keySecond]:valueSecond });
   }
  return arrFilter
}
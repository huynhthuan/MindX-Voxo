import axios from "axios";
import { BASE_URL_API } from "../../../utils/api";
import queryString from "query-string";

export const fetchApiGetCategories = async (query, asPath) => {
   const pathApi = asPath.replace(/\/\w+-\w+\/\w+\?/, "");
   const { slug, page } = query;
   const response = await fetchApi.get("/products/categories/?slug=" + slug);
   const responseId = response.data[0].id;
   const firstPage = `products?${pathApi}&per_page=12&category=` + responseId;
   const data = await fetchApi.get(page ? firstPage + "&page=" + page : firstPage);
   data.idCategory = responseId;
   return data;
};
export const fetchApiProductById = async (id) => {
   const data = await fetchApi.get("/products/" + id);
   const res = await fetchApi.get("/products/reviews?product=" + id);
   data.data.reviews = res.data
  
   return data;
};
export const fetchApi = axios.create({
   baseURL: BASE_URL_API + "/wp-json/wc/v3/",
   headers: {
      "content-type": "application/json",
      Authorization: "Basic Y2tfYWI0NGZmOThiN2FjOGM2MjliMTA3Mzk5ZWIwYjBjOGMyNmUwNDhjNDpjc18wYmRiZTI2OWM5NjA5OGJmZDY1N2FiZDRlMmQ3NTI2MzJmNDZhYTIw",
   },
   paramsSerializer: (params) => queryString.stringify(params),
});

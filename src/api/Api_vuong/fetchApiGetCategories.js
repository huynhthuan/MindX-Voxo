import axios from "axios";
import { BASE_URL_API } from "../../../utils/api";
import queryString from "query-string";
import { convertObjectToParams } from "../../../components/component_vuong/Common";
import Swal from "sweetalert2";

export const fetchApi = axios.create({
   baseURL: BASE_URL_API + "/wp-json/wc/v3/",
   headers: {
      "content-type": "application/json",
      Authorization: "Basic Y2tfYWI0NGZmOThiN2FjOGM2MjliMTA3Mzk5ZWIwYjBjOGMyNmUwNDhjNDpjc18wYmRiZTI2OWM5NjA5OGJmZDY1N2FiZDRlMmQ3NTI2MzJmNDZhYTIw",
   },
   paramsSerializer: (params) => queryString.stringify(params),
});

export const fetchApiGetCategories = async (query) => {
   try {
      const { slug, page } = query;
      const response = await fetchApi.get("/products/categories/?slug=" + slug);
      const responseId = response.data[0].id;
      const url = "/products?" + convertObjectToParams({ per_page: "12", page: "1", ...query, category: responseId, slug: "" });
      const data = await fetchApi.get(url);
      data.idCategory = responseId;
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const fetchApiProductById = async (id) => {
   try {
      const data = await fetchApi.get("/products/" + id);
      const res = await fetchApi.get("/products/reviews?product=" + id);
      data.data.reviews = res.data;
      return data;
   } catch (error) {
      console.log("error", error);
   }
};

export const fetchApiReviewProduct = async (url, id) => {
   try {
      await fetchApi.post("/products/reviews?" + url);
      const res = await fetchApi.get("/products/reviews?product=" + id);
      return res.data;
   } catch (error) {
      Swal.fire({
         title: "Error!",
         text: error.response.data.message,
         icon: "error",
         confirmButtonText: "Close",
      });
      return error;
   }
};
export const fetchApiAllReviews = async () => {
   const res = await fetchApi.get("/products/reviews");
   return res.data;
};

export const fetchApiColoImage = async (arrId) =>
   await Promise.all(
      arrId.map(async (item) => {
         const res = await fetchApiProductById(item);
         return { src: res.data.images[0].src, id: item, alt: res.data.images[0].alt, slug: res.data.slug };
      })
   );

export const fetchApiProductSection = async (idSlug, id) => {
   const res = await fetchApi(`/products?category=${idSlug}&exclude=${id}`);
   return res.data;
};

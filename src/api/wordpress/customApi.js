import axiosClient from '../axiosClient';

const customApi = {
    getProductCategories: (params) => {
        const url = '/wp-json/wp/v2/product_cat';

        return axiosClient.get(url, {
            params,
        });
    },
};

export default customApi;

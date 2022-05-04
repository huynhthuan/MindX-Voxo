import axiosClient from './axiosClient';

const authApi = {
    GenerateAuthCookie: (params) => {
        const url = '/api/user/generate_auth_cookie';

        return axiosClient.post(url, null, {
            params,
        });
    },
};

export default authApi;

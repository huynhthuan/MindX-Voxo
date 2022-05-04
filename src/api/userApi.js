import axiosClient from './axiosClient';

const userApi = {
    SendCodeResetPass: (params) => {
        const url = '/wp-json/bdpwr/v1/reset-password';

        return axiosClient.post(url, null, {
            params,
        });
    },
    ValidateCodeReset: (params) => {
        const url = '/wp-json/bdpwr/v1/validate-code';

        return axiosClient.post(url, null, {
            params,
        });
    },
    ResetPassword: (params) => {
        const url = '/wp-json/bdpwr/v1/set-password';

        return axiosClient.post(url, null, {
            params,
        });
    },
    ChangePassword: (params) => {
        const url = '/api/user/change_password';

        return axiosClient.post(url, null, {
            params,
        });
    },
};

export default userApi;

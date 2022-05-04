import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import wooApi from '../src/api/woocommerce/wooApi';

export const useCustomerInfor = () => {
    const { user } = useSelector((state) => state.auth);

    return useQuery(
        'customerInfor',
        async () => await wooApi.getCustomer(user.id)
    );
};

export const useMyOrders = () => {
    const { user } = useSelector((state) => state.auth);
    return useQuery(
        'myOrders',
        async () =>
            await wooApi.getOrders({
                customer: user.id,
            })
    );
};

export const useMyOrdersPending = () => {
    const { user } = useSelector((state) => state.auth);
    return useQuery(
        'myOrdersPending',
        async () =>
            await wooApi.getOrders({
                customer: user.id,
                status: 'pending',
            })
    );
};

export const useMyWishList = () => {
    const { share_key } = useSelector((state) => state.auth);
    return useQuery(
        'myWishList',
        async () => await wooApi.getWishListProducts(share_key)
    );
};

export const useUpdateCustomerInfor = () => {
    const queryClient = useQueryClient();
    const { user } = useSelector((state) => state.auth);

    return useMutation(
        async (dataBilling) =>
            await wooApi.updateCustomer(user.id, {
                ...dataBilling,
            }),
        {
            mutationKey: 'updateCustomerInfor',
            onSuccess: (data) => {
                queryClient.invalidateQueries('customerInfor');
            },
        }
    );
};

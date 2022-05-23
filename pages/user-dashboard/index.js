import Head from 'next/head';
import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavTabs from '../../components/UserDashboard/NavTabs/NavTabs';
import { useRouter } from 'next/router';
import SubscribeBox from '../../components/Common/SubscribeBox';
import Breadcrumb from '../../components/Common/BreadCrumb';

function UserDashboard() {
    const router = useRouter();
    const { cookie } = useSelector((state) => state.auth);
    useEffect(() => {
        if (!cookie) {
            router.push('/login');
        }
    }, [cookie]);

    return (
        <Fragment>
            <Head>
                <title>User Dashboard</title>
            </Head>
            <Breadcrumb title={'User Dashboard'}></Breadcrumb>
            <NavTabs />
            <SubscribeBox />
        </Fragment>
    );
}

export default UserDashboard;

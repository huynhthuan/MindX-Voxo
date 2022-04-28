import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { GENERATE_AUTH_COOKIE, GET_CURRENT_USER } from '../../../utils/api';

export default NextAuth({
    providers: [
        CredentialProvider({
            name: 'credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'johndoe@test.com',
                },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials, req) => {
                // database look up
                let res = await axios.get(GENERATE_AUTH_COOKIE, {
                    params: {
                        email: credentials.email,
                        password: credentials.password,
                    },
                });

                let data = res.data;

                // console.log(data);

                if (data.status === 'ok') {
                    return {
                        infor: data.user,
                        cookie: data.cookie,
                    };
                }

                if (data.status === 'error') {
                    throw new Error(data.error);
                }
            },
        }),
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            // first time jwt callback is run, user object is available
            if (user) {
                token.id = user.id;
                token.user = user;
            }

            return token;
        },
        session: async ({ session, user, token }) => {
            if (token) {
                session.id = token.id;
                session.user = token.user;
            }

            return session;
        },
    },
    secret: 'ZFdCmWjz8sPADGy2c8ArlFzxS/+0lw4tdEozQpTcL7k=',
    jwt: {
        secret: 'CbjHIJinDPtcnd4ydLtuqNVicKpoOcQdloqhCUPX1vE=',
        encryption: true,
    },
    pages: {
        signIn: '/login',
    },
});

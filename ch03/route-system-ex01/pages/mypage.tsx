import { useRouter } from "next/router";
import { useEffect } from "react";
//import PrivateComponent from '../components/Private';
import useAuth from '../hook/auth';

function MyPage(){
    const router = useRouter();
    const { loggedIn } = useAuth();

    useEffect(() => {
        if(!loggedIn) {
            router.push('/login');
        }
    }, [loggedIn]);

    return loggedIn ? router.push({
        pathname: '/blog/[date]/[slug]',
        query: {
            date: '2021-01-01',
            slug: 'happy-new-year',
            foo: 'bar'
        }
        })
        : null;
}

export default MyPage;
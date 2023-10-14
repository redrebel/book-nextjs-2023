import { useEffect } from 'react';
import Link from 'next/link';
import axios from "axios";

export async function getServerSideProps(){
    // 여기서 REST API를 호출합니다.
    const usersReq =
        await axios.get('http://localhost:3000/api/04/users');
    return {
        props: {
            users: usersReq.data,
        }
    }
}

function HomePage({ users }){
    return (
        <ul>
            { users.map((user) => (
                <li key={user.id}>
                    <Link href={`/user/${user.username}`} passHref>
                        {user.username}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default HomePage;
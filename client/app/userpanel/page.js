"use client"
import "./style.scss"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Home = () => {

    const router = useRouter();

    const {data:session} = useSession({
        required: true,
        onUnauthenticated(){
            router.push("/")
        }

    })

    return (
        <span>Witamy w panelu użytkownika</span>
    )
}
export default Home;
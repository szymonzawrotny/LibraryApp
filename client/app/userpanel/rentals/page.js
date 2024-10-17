"use client"
import "../style.scss"
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Home = () => {

    const router = useRouter();

    const {data:session} = useSession({
        required: true,
        onUnauthenticated(){
            router.push("/")
        }

    })

    return (
        <div className="rentalsList">
            <h2>Your Rentals</h2>
            <div className="list">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
    )
}
export default Home;
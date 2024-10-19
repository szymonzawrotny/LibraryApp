"use client"
import { useEffect, useState } from "react"
import { CiCirclePlus } from "react-icons/ci";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import "../style.scss"

const Home = () => {

    const router = useRouter();
    const [list, setList] = useState([
        { tytul: "siema" },
        { tytul: "co" },
        { tytul: "tam" }
    ]);
    const [copyList, setCopyList] = useState([]);

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/")
        }
    })

    const fetchData = async () => {
        const response = await fetch("http://localhost:5000/moviesApi")
            .then(response => response.json())
            .then(data => setList(data))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSearch = (e) => {
        let text = e.target.value;
    }

    const elements = list.map((one, index) => {
        return (
            <li key={index}>
                <p>
                    {index + 1}.
                    {one.tytul}
                </p>
                <div className="show">
                    <CiCirclePlus />
                </div>
            </li>
        )
    })

    return (
        <div className="movieList">
            <h2>Movie list</h2>
            <div className="search" onChange={handleSearch}>
                <input type="text" />
            </div>
            <div className="list">
                <ul>
                    {elements}
                </ul>
            </div>
        </div>
    )
}
export default Home;


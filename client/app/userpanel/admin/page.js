"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Home = () => {

    const router = useRouter();

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/")
        }
    })

    const [users, setUsers] = useState([]);
    const [movies,setMovies] = useState([]);

    const [regEmail,setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");

    const handleReg = async (e) => {
        e.preventDefault();
    
        const response = await fetch("http://localhost:5000/reg", {
          method: "POST",
          body: JSON.stringify({
            regEmail,
            regPassword
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
    
        if (response.ok){
          console.log("wysłano")
          alert("dodano użytkownika")
          setRegEmail("");
          setRegPassword("");
        }else{
          console.log("coś nie działa");
        }
      }

    const fetchUserData = async () => {
        const response = await fetch("http://localhost:5000/usersApi")
            .then(response => response.json())
            .then(data => setUsers(data));
    }

    const fetchMovieData = async () => {
        const response = await fetch("http://localhost:5000/moviesApi")
            .then(response => response.json())
            .then(data => setMovies(data));
    }

    useEffect(() => {
        if (session?.user?.email.email !== "szymonzawrotny@gmail.com") {
            router.push("/");
        }

        fetchUserData();
        fetchMovieData();
    }, [])

    const elementsUser = users.map((one,index)=>{
        return <li key={index}>{`${index+1}. ${one.email}`}</li>
    })

    const elementsMovie = movies.map((one,index)=>{
        return <li key={index}>{`${index+1}. ${one.tytul}`}</li>
    })

    return (
        <div className="adminPanel">
            <div className="manageMovie">
                <div className="add">
                    <h2>Dodaj film</h2>
                    <form action="">
                        <input type="text" placeholder='nazwa filmu...' />
                        <input type="text" placeholder='gatunek...' />
                        <input type="text" placeholder='reżyser...' />
                        <input type="text" placeholder='opis...' />
                        <input type="submit" value="dodaj" />
                    </form>
                </div>
                <div className="update">
                    <h2>Edytuj film</h2>
                    <form action="">
                        <input type="text" placeholder='email...' />
                        <input type="text" placeholder='dane...' />
                        <input type="text" placeholder='wartość...' />
                        <input type="submit" value="edytuj" />
                    </form>
                </div>
                <div className="delete">
                    <h2>Usuń film</h2>
                    <form action="">
                        <input type="text" placeholder='nazwa filmu...' />
                        <input type="submit" value="usuń" />
                    </form>
                </div>
                <div className="userList">
                    <ul>
                        {elementsMovie}
                    </ul>
                </div>
            </div>
            <div className="manageUser">
                <div className="add">
                    <h2>Dodaj klienta</h2>
                    <form onSubmit={handleReg}>
                        <input 
                            type="text" 
                            value={regEmail}
                            onChange={e=>setRegEmail(e.target.value)}
                            placeholder='email...'/>
                        <input 
                            type="text" 
                            value={regPassword}
                            onChange={e=>setRegPassword(e.target.value)}
                            placeholder='password...' />
                        <input type="submit" value="dodaj" />
                    </form>
                </div>
                <div className="update">
                    <h2>Edytuj klienta</h2>
                    <form action="">
                        <input type="text" placeholder='email...' />
                        <input type="text" placeholder='dane...' />
                        <input type="text" placeholder='wartość...' />
                        <input type="submit" value="edytuj" />
                    </form>
                </div>
                <div className="delete">
                    <h2>Usuń klienta</h2>
                    <form action="">
                        <input type="text" placeholder='email...' />
                        <input type="submit" value="usuń" />
                    </form>
                </div>
                <div className="userList">
                    <ul>
                        {elementsUser}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Home;
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Home = () => {

    const router = useRouter();

    const { data: session } = useSession({
        required: false,
        onUnauthenticated() {
            router.push("/")
        }
    })

    useEffect(() => {
        // if (session?.user?.email.email !== "szymonzawrotny@gmail.com") {
        //     router.push("/");
        // }
    }, [])

    return (
        <div className="adminPanel">
            <div className="manageMovie">a</div>
            <div className="manageUser">
                <div className="add">
                    <h2>Dodaj klienta</h2>
                    <form action="">
                        <input type="text" placeholder='email...'/>
                        <input type="text" placeholder='password...'/>
                        <input type="submit" value="dodaj" />
                    </form>
                </div>
                <div className="update">
                    <h2>Edytuj klienta</h2>
                    <form action="">
                        <input type="text" placeholder='email...'/>
                        <input type="text" placeholder='dane...'/>
                        <input type="text" placeholder='wartość...'/>
                        <input type="submit" value="edytuj" />
                    </form>
                </div>
                <div className="delete">
                <h2>Usuń klienta</h2>
                    <form action="">
                        <input type="text" placeholder='email...'/>
                        <input type="submit" value="usuń" />
                    </form>
                </div>
                <div className="userList">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Home;
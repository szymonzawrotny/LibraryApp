import Link from 'next/link'
import "./style.scss"
import { FaCameraRetro } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { MdMovieEdit } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";

export default function RootLayout({ children }) {
    return (
        <div className="userpanel">
            <nav>
                <Link href="/">
                    <div className="logo">
                        <FaCameraRetro size={42}/>
                    </div>
                </Link>
                <Link href="/userpanel/movies">
                    <div className="option">
                        <MdLocalMovies size={28}/>
                        movies
                    </div>
                </Link>
                <Link href="/userpanel/rentals">
                    <div className="option">
                        <MdMovieEdit size={28}/>
                        yours rentals
                    </div>
                </Link>
                <Link href="/userpanel/rent">
                    <div className="option">
                        <MdAddShoppingCart size={28}/>
                        rent
                    </div>
                </Link>
                <div className="logout">
                    <CgLogOut size={36}/>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}
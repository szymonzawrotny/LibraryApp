import "../style.scss"

const Home = () => {
    return (
        <div className="movieList">
            <h2>Movie list</h2>
            <div className="search">
                <input type="text" />
            </div>
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


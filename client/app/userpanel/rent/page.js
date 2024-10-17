import "../style.scss"

const Home = () => {
    return (
        <div className="rentMovie">
            <h2>Rent movie!</h2>
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
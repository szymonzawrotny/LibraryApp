import "./style.scss"

const Home = ()=>{
  return(
    <div className="app">
      <div className="left">
          <div className="triangle"></div>
          <header>Join us!</header>
      </div>
      <div className="right">
        <div className="register">
          <h2>register</h2>
          <form action="">
            <input type="text" placeholder="email..."/>
            <input type="text" placeholder="password..."/>
            <input type="text" placeholder="password again..."/>
            <input type="submit" value="add" />
          </form>
        </div>
        <div className="login">
            <h2>login</h2>
            <form action="">
              <input type="text" placeholder="email..."/>
              <input type="text" placeholder="password..."/>
              <input type="submit" value="zaloguj" />
            </form>
        </div>
      </div>
    </div>
  )
}
export default Home;
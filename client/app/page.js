'use client'
import "./style.scss"
import { useEffect, useState } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";

const Home = () => {

  const router = useRouter();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleReg = (e) => {
    e.preventDefault();
    console.log("rejestracja")
  }

  const handleLog = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials",{
      redirect: false,
      username: email,
      password: password
    })

    if(result.error){
      console.log(result.error);
    } else {
      router.push('/userpanel')
    }
  }

  return (
    <div className="app">
      <div className="left">
        <div className="triangle"></div>
        <header>Join us!</header>
      </div>
      <div className="right">
        <div className="register">
          <h2>register</h2>
          <form onSubmit={handleReg}>
            <input type="text" placeholder="email..." />
            <input type="text" placeholder="password..." />
            <input type="text" placeholder="password again..." />
            <input type="submit" value="add" />
          </form>
        </div>
        <div className="login">
          <h2>login</h2>
          <form onSubmit={handleLog}>
            <input type="text" placeholder="email..." onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="text" placeholder="password..." onChange={(e)=>{setPassword(e.target.value)}}/>
            <input type="submit" value="zaloguj" />
          </form>
        </div>
      </div>
    </div>
  )
}
export default Home;
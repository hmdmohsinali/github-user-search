import { useEffect, useState } from "react";
import  User  from "./components/User";

function App() {

  const [userName, setUserName] = useState("hmdmohsinali");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true)


  const handleSubmit=()=>{
    fetchUser()
  }
  async function fetchUser(){
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json();
    if(data){
      setUserData(data)
      setLoading(false);
      setUserName("")
    }
    console.log(data)
  }



  useEffect(()=>{
    fetchUser()
  },[])

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <div className="flex justify-center flex-col">
    <div className="flex justify-center items-center space-x-2 m-4">
      <input
        className="border border-gray-600 rounded-lg px-4 py-2 w-64 focus:outline-none"
        name="search-by-username"
        type="text"
        placeholder="Search User"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <button className="border border-gray-600 rounded-lg px-4 py-2 bg-slate-500 text-white text-lg hover:bg-slate-600 transition duration-300">
        Search
      </button>
    </div>
    <div>
      
      {userData !== null ? <User user={userData} /> : null}
    </div>
  </div>
  
  );
}

export default App;

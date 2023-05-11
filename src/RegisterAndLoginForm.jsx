import { useContext, useState } from "react"
import axios from "axios"
import { UserContext } from "./UserContext.jsx"

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("login")
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext)
  async function handleSubmit(ev) {
    ev.preventDefault()
    const url = isLoginOrRegister === "register" ? "register" : "login"
    const { data } = await axios.post(url, { username, password })
    setLoggedInUsername(username)
    setId(data.id)
  }
  return (
    <div className="bg-login-bg bg-cover bg-center h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
        <h1 className="text-center text-white text-2xl font-bold mb-4">CHAT APP</h1>
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          placeholder="username"
          className="block w-full rounded-sm p-2 mb-2 bg-black text-white placeholder-gray-500"
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2 bg-black text-white placeholder-gray-500"
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          {isLoginOrRegister === "register" ? "Register" : "Login"}
        </button>

        <button
          className="bg-green-500 text-white block w-full rounded-sm p-2 mt-2"
          onClick={async (ev) => {
            ev.preventDefault()
            setUsername("DemoUser")
            setPassword("demouser123")
            const { data } = await axios.post("/login", { username: "DemoUser", password: "demouser123" })
            setLoggedInUsername("DemoUser")
            setId(data.id)
          }}
        >
          Demo Login
        </button>
        <div className="text-center mb-4 text-teal-500 bg-gray-900 mt-2 rounded-sm p-1">
          {isLoginOrRegister === "register" && (
            <div>
              Already a member?
              <button className="ml-1 underline" onClick={() => setIsLoginOrRegister("login")}>
                Login here
              </button>
            </div>
          )}
          {isLoginOrRegister === "login" && (
            <div>
              Dont have an account?
              <button className="ml-1 underline" onClick={() => setIsLoginOrRegister("register")}>
                Register
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  )
  // return (
  //   <div className="bg-login-bg bg-cover bg-center h-screen flex items-center">
  //     <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
  //       <h1 className="text-center text-white text-2xl font-bold mb-4">CHAT APP</h1>

  //       <input
  //         value={username}
  //         onChange={(ev) => setUsername(ev.target.value)}
  //         type="text"
  //         placeholder="username"
  //         className="block w-full rounded-sm p-2 mb-2  bg-black text-white placeholder-gray-500"
  //       />
  //       <input
  //         value={password}
  //         onChange={(ev) => setPassword(ev.target.value)}
  //         type="password"
  //         placeholder="password"
  //         className="block w-full rounded-sm p-2 mb-2 bg-black text-white placeholder-gray-500"
  //       />
  //       <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
  //         {isLoginOrRegister === "register" ? "Register" : "Login"}
  //       </button>
  //       <div className="text-center mb-4 text-teal-500 bg-gray-900 mt-2 rounded-sm p-1">
  //         {isLoginOrRegister === "register" ? (
  //           <div>
  //             Already a member?
  //             <button className="ml-1 underline" onClick={() => setIsLoginOrRegister("login")}>
  //               Login here
  //             </button>
  //           </div>
  //         ) : (
  //           <div>
  //             Don't have an account?
  //             <button className="ml-1 underline" onClick={() => setIsLoginOrRegister("register")}>
  //               Register
  //             </button>
  //           </div>
  //         )}
  //       </div>
  //     </form>
  //   </div>
  // )
}

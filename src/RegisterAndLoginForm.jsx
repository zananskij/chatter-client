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
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] text-white">
      <div className="w-96 bg-gray-800 p-10 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-8 text-center">
          {isLoginOrRegister === "register" ? "Register" : "Login"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            placeholder="Username"
            required
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder="Password"
            required
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="shiny-button shiny-button-blue py-2 px-4 rounded-md text-white font-bold w-full"
          >
            {isLoginOrRegister === "register" ? "Register" : "Login"}
          </button>

          <button
            className="shiny-button shiny-button-green py-2 px-4 rounded-md text-white font-bold w-full"
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

          <div className="text-center text-sm">
            {isLoginOrRegister === "register" ? (
              <span>
                Already a member?{" "}
                <button
                  className="text-blue-500 hover:text-blue-400 underline ml-1"
                  onClick={() => setIsLoginOrRegister("login")}
                >
                  Login here
                </button>
              </span>
            ) : (
              <span>
                Don't have an account?{" "}
                <button
                  className="text-blue-500 hover:text-blue-400 underline ml-1"
                  onClick={() => setIsLoginOrRegister("register")}
                >
                  Register
                </button>
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

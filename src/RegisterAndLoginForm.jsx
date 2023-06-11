// import { useContext, useState } from "react"
// import axios from "axios"
// import { UserContext } from "./UserContext.jsx"

// export default function RegisterAndLoginForm() {
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const [isLoginOrRegister, setIsLoginOrRegister] = useState("login")
//   const { setUsername: setLoggedInUsername, setId } = useContext(UserContext)

//   async function handleSubmit(ev) {
//     ev.preventDefault()
//     const url = isLoginOrRegister === "register" ? "register" : "login"
//     const { data } = await axios.post(url, { username, password })
//     setLoggedInUsername(username)
//     setId(data.id)
//   }

//   return (
//     <div className="flex justify-center items-center h-screen bg-login-bg bg-cover bg-center">
//       <form className="w-64 bg-gray-600 p-6 rounded-md shadow-lg flex flex-col space-y-4" onSubmit={handleSubmit}>
//         <h1 className="text-center text-black text-2xl font-bold mb-4">CHATTER</h1>
//         <input
//           value={username}
//           onChange={(ev) => setUsername(ev.target.value)}
//           type="text"
//           placeholder="Username"
//           className="block w-full p-2 rounded-md border border-gray-300"
//         />
//         <input
//           value={password}
//           onChange={(ev) => setPassword(ev.target.value)}
//           type="password"
//           placeholder="Password"
//           className="block w-full p-2 rounded-md border border-gray-300"
//         />
//         <button
//           className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200"
//           type="submit"
//         >
//           {isLoginOrRegister === "register" ? "Register" : "Login"}
//         </button>

//         <button
//           className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition duration-200"
//           onClick={async (ev) => {
//             ev.preventDefault()
//             setUsername("DemoUser")
//             setPassword("demouser123")
//             const { data } = await axios.post("/login", { username: "DemoUser", password: "demouser123" })
//             setLoggedInUsername("DemoUser")
//             setId(data.id)
//           }}
//         >
//           Demo Login
//         </button>
//         <div className="text-center text-sm">
//           {isLoginOrRegister === "register" ? (
//             <span>
//               Already a member?{" "}
//               <button
//                 className="text-blue-500 hover:text-blue-600 underline"
//                 onClick={() => setIsLoginOrRegister("login")}
//               >
//                 Login here
//               </button>
//             </span>
//           ) : (
//             <span>
//               Don't have an account?{" "}
//               <button
//                 className="text-blue-500 hover:text-blue-600 underline"
//                 onClick={() => setIsLoginOrRegister("register")}
//               >
//                 Register
//               </button>
//             </span>
//           )}
//         </div>
//       </form>
//     </div>
//   )
// }
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

// import { useContext, useState } from "react"
// import axios from "axios"
// import { UserContext } from "./UserContext.jsx"

// export default function RegisterAndLoginForm() {
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const [isLoginOrRegister, setIsLoginOrRegister] = useState("login")
//   const { setUsername: setLoggedInUsername, setId } = useContext(UserContext)
//   async function handleSubmit(ev) {
//     ev.preventDefault()
//     const url = isLoginOrRegister === "register" ? "register" : "login"
//     const { data } = await axios.post(url, { username, password })
//     setLoggedInUsername(username)
//     setId(data.id)
//   }
//   return (
//     <div className="bg-login-bg bg-cover bg-center h-screen flex items-center">
//       <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
//         <h1 className="text-center text-white text-2xl font-bold mb-4">CHAT APP</h1>
//         <input
//           value={username}
//           onChange={(ev) => setUsername(ev.target.value)}
//           type="text"
//           placeholder="username"
//           className="block w-full rounded-sm p-2 mb-2 bg-black text-white placeholder-gray-500"
//         />
//         <input
//           value={password}
//           onChange={(ev) => setPassword(ev.target.value)}
//           type="password"
//           placeholder="password"
//           className="block w-full rounded-sm p-2 mb-2 bg-black text-white placeholder-gray-500"
//         />
//         <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
//           {isLoginOrRegister === "register" ? "Register" : "Login"}
//         </button>

//         <button
//           className="bg-green-500 text-white block w-full rounded-sm p-2 mt-2"
//           onClick={async (ev) => {
//             ev.preventDefault()
//             setUsername("DemoUser")
//             setPassword("demouser123")
//             const { data } = await axios.post("/login", { username: "DemoUser", password: "demouser123" })
//             setLoggedInUsername("DemoUser")
//             setId(data.id)
//           }}
//         >
//           Demo Login
//         </button>
//         <div className="text-center mb-4 text-teal-500 bg-gray-900 mt-2 rounded-sm p-1">
//           {isLoginOrRegister === "register" && (
//             <div>
//               Already a member?
//               <button className="ml-1 underline" onClick={() => setIsLoginOrRegister("login")}>
//                 Login here
//               </button>
//             </div>
//           )}
//           {isLoginOrRegister === "login" && (
//             <div>
//               Dont have an account?
//               <button className="ml-1 underline" onClick={() => setIsLoginOrRegister("register")}>
//                 Register
//               </button>
//             </div>
//           )}
//         </div>
//       </form>
//     </div>
//   )
// }

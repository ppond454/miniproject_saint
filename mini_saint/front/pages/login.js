import Head from "next/head"
import Layout from "../components/layout"
import { useState } from "react"
import axios from "axios"
import config from "../config/config"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

export default function Login({ token }) {
  let router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState("")
  const [remember, setRemember] = useState(false)
  const login = async (req, res) => {
    try {
      let result = await axios.post(
        `${config.URL}/login`,
        { username, password, remember },
        { withCredentials: true }
      )
      console.log("result: ", result)
      console.log("result.data:  ", result.data)
      console.log("token:  ", token)
      setStatus(result.status + ": " + result.data.user.username)
      if (result.status === 200) setTimeout(() => router.push("/product"), 3000)
    } catch (e) {
      console.log("error: ", JSON.stringify(e.response))
      setStatus(JSON.stringify(e.response).substring(0, 80) + "...")
    }
  }
  const reMem = async () => {
    setRemember(!remember)
  }
  const loginForm = () => (
    <div className="flex items-center justify-center ">
      <div className="px-12 py-10  mt-4 w-[500px] text-left bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
          <div className="mt-4">
          <div>
          <b>Token:</b>{token.substring(0, 15)}
          <button onClick={copyText}> Copy token </button>
          <label>{status}</label>
        </div>
            <div>
              <label className="block" for="email">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex mt-4 iitems-baseline ">
              <input
                className=" px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="remember_me"
                name="remember_me"
                type="checkbox"
                onClick={reMem}
              />
              <label className="ml-3 my-auto">remember</label>
            </div>
            <div className="flex items-baseline justify-between">
              <motion.button whileHover={{scale : 1.1}} onClick={login} className="px-6 py-2 mt-4 mx-auto text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Login
              </motion.button>
            </div>
          </div>
      </div>
    </div>
  )



  const copyText = () => {
    navigator.clipboard.writeText(token)
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      {loginForm()}
    </Layout>
  )
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } }
}

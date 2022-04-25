import { useState } from "react"
import Head from "next/head"
import Layout from "../components/layout"
import axios from "axios"
import config from "../config/config"
import { useRouter } from "next/router"
import {motion} from "framer-motion"
export default function Register({ token }) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState("")
  let router = useRouter()
  const profileUser = async () => {
    console.log("token: ", token)
    const users = await axios.get(`${config.URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    console.log("user: ", users.data)
  }

  const register = async (req, res) => {
    try {
      let result = await axios.post(`${config.URL}/register`, {
        username,
        email,
        password,
      })
      console.log("result: ", result)
      console.log("result.data:  ", result.data)
      console.log("token:  ", token)
      setStatus(result.data.message)
      if (result.status === 200)
        setTimeout(() => {
          router.push("/login")
        }, 3000)
    } catch (e) {
      console.log(e)
    }
  }

  const registerForm = () => (
    <div className="flex items-center justify-center ">
      <div className="px-12 py-10  mt-4 w-[500px] text-left bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-center">Sign Up</h3>
        <div className="mt-4">
          <div>
            {/* <b>Token:</b>
            {token.substring(0, 15)}
            <button onClick={copyText}> Copy token </button>
            <label>{status}</label> */}
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
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
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

          <div className="flex items-baseline justify-between">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={register}
              className="px-6 py-2 mt-4 mx-auto text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Register
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Layout>
      <Head>
        <title>Register Page</title>
      </Head>
      {registerForm()}
    </Layout>
  )
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } }
}

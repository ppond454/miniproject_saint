import Head from "next/head"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import { useEffect, useState } from "react"
import axios from "axios"
import config from "../config/config"

export default function Logout({ token }) {
  const [status, setStatus] = useState("")

  useEffect(async () => {
    await logout()
    setTimeout(() => {
      window.location.href = "/login"
    }, 5000)
  }, [])

  const logout = async () => {
    console.log("remove token: ", token)
    let result = await axios.get(`${config.URL}/logout`, {
      withCredentials: true,
    })
    setStatus("Logout successful")
  }

  return (
    <Layout>
      <Head>
        <title>Logout Page</title>
      </Head>
      {/* <Navbar /> */}
      <div>
        <h1>Logout</h1>
        <div>
          <h2> {status} </h2>
        </div>
      </div>
    </Layout>
  )
}

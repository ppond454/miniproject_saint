import Head from "next/head"
import Layout from "../components/layout"
import React, { useEffect, useState } from "react"
import axios from "axios"
import withAuth from "../components/withAuth"
import config from "../config/config"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

const Cart = ({ token }) => {
  const [user, setUser] = useState([])
  const [carts, setcarts] = useState([])
  const getcart = async (id) => {
    console.log("user.id>>>>", id)
    let cart = await axios.get(`${config.URL}/cart/${id}`)
    setcarts(cart.data[0])
    console.log("cart>>>>", cart)
  }
  useEffect(() => {
    profileUser()
  }, [])

  let data = [{ id: 1, productsname: "ลาเต้", amount: 3, price: 30 }]
  const minus = async (amount, id) => {
    await axios.put(`${config.URL}/cart/2`, { cartid: id, amount: amount - 1 })
    getcart(user.id)
    console.log("minus")
  }
  const plus = async (amount, id) => {
    await axios.put(`${config.URL}/cart/2`, { cartid: id, amount: amount + 1 })
    getcart(user.id)
    console.log("plus")
  }
  const remove = async (id) => {
    await axios.delete(`${config.URL}/cart/2`, { cartid: id })
    console.log("delete")
    getcart(user.id)
  }
  const profileUser = async () => {
    try {
      const users = await axios.get(`${config.URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log("profileUser>>>", users)
      setUser(users.data)
      getcart(users.data.id)
    } catch (e) {
      console.log(e)
    }
  }

  const tableForm = () => {
    return (
      <div style={{  }} className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                ลำดับที่
              </th>
              <th scope="col" className="px-6 py-3">
                ขื่อสินค้า
              </th>
              <th scope="col" className="px-6 py-3">
                จำนวน
              </th>
              <th scope="col" className="px-6 py-3">
                ราคา
              </th>
              <th scope="col" className="px-6 py-3">
                ราคารวม
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only"></span>
              </th>
            </tr>
          </thead>
          <tbody>
            {carts &&
              carts.map((val, i) => {
                return (
                  <tr key={i} className="bg-white border-b   hover:bg-gray-50 ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                    >
                      {i + 1}
                    </th>
                    <td className="px-6 py-4">{val.productsname}</td>
                    <td className="px-6 py-4 flex">
                      <button
                        className="text-[20px]"
                        onClick={() => minus(val.amount, val.id)}
                      >
                        -
                      </button>
                      <p className="w-[15px] text-center">{val.amount}</p>
                      <button
                        className="text-[20px]"
                        onClick={() => plus(val.amount, val.id)}
                      >
                        +
                      </button>
                    </td>
                    <td className="px-6 py-4">{val.price}</td>
                    <td className="px-6 py-4">
                      {val.amount * val.price}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => remove(val.id)}>
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <Layout>
      <Head>
        <title>User profile</title>
      </Head>
      {tableForm()}
    </Layout>
  )
}

export default withAuth(Cart)

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } }
}

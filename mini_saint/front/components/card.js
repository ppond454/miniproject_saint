import React from "react"
import { motion } from "framer-motion"
import axios from "axios"
import config from "../config/config"

import { useRouter } from "next/router"

const Cade = ({ id, productsname, discription, price, imageurl, userid }) => {
  const addToCart = async () => {
    let cart = await axios.post(`${config.URL}/cart/${userid}`, {
      id: id,
      productsname: productsname,
      discription: discription,
      price: price,
      imageurl: imageurl,
      amount: 1,
    })
  }

  const router = useRouter()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <motion.div
      className="bg-white bg-opacity-50 shadow-xl rounded-lg overflow-hidden p-[20px] "
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: id, type: "easeInOut" }}
    >
      <h2 className="text-xl font-bold m-[10px] text-center">{productsname}</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={`${imageurl}`} alt="product" className="w-[450px] h-[200px]" />
      </div>

      <div className="p-[20px]">
        <div className="h-[70px]">
        <p>{discription}</p>

        </div>
        <h3>ราคา : {price}</h3>
        {/* <Button variant="contained">Default</Button> */}

        <motion.button
          className="bg-[#A07855FF] mt-[10px] p-[10px] text-white rounded-lg "
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            if (userid) {
              addToCart()
            } else {
              router.push("/login")
            }
          }}
        >
          เลือกซื้อ
        </motion.button>
      </div>
    </motion.div>
  )
}
export default Cade

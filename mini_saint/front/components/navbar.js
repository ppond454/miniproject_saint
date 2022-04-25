import Link from "next/link"
import React from "react"
import MenuIcon from "@material-ui/icons/Menu"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <motion.nav
      className="flex font-gothic fixed items-center  w-[100vw] top-0 z-50 pl-[10px] md:px-auto shadow-xl h-16   justify-between sm:justify-around space-x-5"
      style={{
        backgroundColor: "rgba(160, 120, 85, 0.7)",
        backdropFilter: "blur(10px)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, type: "easeInOut" }}
    >
      <h6 className="my-auto">
        <Link href="/">
          <a
            className="text-[40px] text-white font-great text-bold font-josefin-sans"
            style={{ textDecoration: "none" }}
          >
            Coffee by few
          </a>
        </Link>
      </h6>
      <div className="flex">
        <div className="hidden md:block ">
          <Link href="/">
            <button className="p-[10px] text-white hover:underline  hover:opacity-50    ">
              Home
            </button>
          </Link>
          <Link href="/product">
            <button className="p-[10px] text-white hover:underline hover:opacity-50   ">
              Product
            </button>
          </Link>
          <Link href="/login">
            <button className="p-[10px] text-white hover:underline hover:opacity-50   ">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="p-[10px] text-white hover:underline hover:opacity-50   ">
              Sing up
            </button>
          </Link>

          <Link className="hidden md:block " href="/logout">
            <button className="p-[10px]">
              <ExitToAppIcon />
            </button>
          </Link>
        </div>

        <Link href="/cart">
          <button aria-label="cart">
            <ShoppingCartIcon />
          </button>
        </Link>

        <div className="p-[10px] group block md:hidden cursor-pointer">
          <MenuIcon />
          <div
            className={`absolute right-0 w-40 text-center py-2 mt-2 hidden group-hover:block p-[10px] pt-1 bg-white rounded-lg shadow-xl  `}
            onClose={() => setAnchorEl(null)}
          >
            <ul className="hover:text-[#A07855FF] ">
              <li>
                <Link href="/">
                  <button>Home</button>
                </Link>
              </li>
            </ul>
            <ul className="hover:text-[#A07855FF]">
              <li>
                <Link href="/product">
                  <Link href="/login">
                    <button>Login</button>
                  </Link>
                </Link>
              </li>
            </ul>
            <ul className="hover:text-[#A07855FF]">
              <li>
                <Link href="/register">
                  <button>Sing up</button>
                </Link>
              </li>
            </ul>
            <ul className="hover:text-[#A07855FF]">
              <li>
                <Link href="/register">
                  <button>Logout</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

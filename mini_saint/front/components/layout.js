import Navbar from "./navbar"
import {useVisible} from "../functions/navmotion"

export default function Layout({ children }) {
  const visible = useVisible()
  return (
    <div>
      {visible &&  <Navbar />}
      {children}
    </div>
  )
}

import Navbar from "./navbar"
import { useVisible } from "../functions/navmotion"

export default function Layout({ children }) {
  const visible = useVisible()
  return (
    <div className="bg-[#F5F5DC] font-thai min-h-screen w-full">
      {visible && <Navbar />}
      <div className="pt-[100px]">{children}</div>
    </div>
  )
}

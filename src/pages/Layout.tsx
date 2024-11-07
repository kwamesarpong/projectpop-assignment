import { Outlet } from "react-router-dom"
import { Sidebar } from "@/components/ui/sidebar"

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout